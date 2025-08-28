import { useState, useEffect } from "react";

// Repositorio de tareas: capa de infraestructura
import { TaskRepositoryLocalStorage } from "../infrastructure/TaskRepositoryLocalStorage";

// Casos de uso: capa de aplicación
import { addTask } from "../application/useCases/addTask";
import { toggleTask } from "../application/useCases/toggleTask";
import { deleteTask } from "../application/useCases/deleteTask";

// Componentes UI: capa de presentación
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import "./styles.css";

// Instanciamos el repositorio (puede cambiarse por otro tipo de storage)
const repo = new TaskRepositoryLocalStorage();

export default function App() {
  // Estado principal: lista de tareas y filtro actual
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 

  // Cargar tareas desde el repositorio al iniciar la app
  // Esto asegura que la UI siempre refleje los datos del storage
  useEffect(() => {
    setTasks(repo.getAll());
  }, []);

  // --- HANDLERS (interacción de UI con casos de uso) ---

  // Agrega una nueva tarea mediante el caso de uso addTask
  // Actualiza tanto el repositorio como el estado local
  const handleAdd = (title) => setTasks(addTask(repo, title));

  // Cambia el estado completado de una tarea mediante toggleTask
  const handleToggle = (id) => setTasks(toggleTask(repo, id));

  // Elimina una tarea mediante deleteTask
  const handleDelete = (id) => setTasks(deleteTask(repo, id));

  // --- FILTRADO DE TAREAS ---
  // Dependiendo del filtro actual, mostramos todas, completadas o pendientes
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true; // "all" devuelve todas
  });

  // Contadores útiles para mostrar en la UI
  const pendingCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="app-container">
      <h1>To-Do App</h1>

      {/* Input: capa de presentación que llama al caso de uso handleAdd */}
      <TaskInput onAdd={handleAdd} />

      {/* Contador: muestra información derivada de la entidad Task */}
      <p className="task-counter">
        Pendientes: {pendingCount} | Completadas: {completedCount}
      </p>

      {/* Filtros: actualizan el estado local para la vista */}
      <div className="filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          Todas
        </button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
          Completadas
        </button>
        <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>
          Pendientes
        </button>
      </div>

      {/* Lista de tareas: solo muestra datos filtrados y delega acciones a los handlers */}
      <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

