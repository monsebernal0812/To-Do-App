// Importamos la entidad Task (reglas de negocio puras)
import { Task } from "../../domain/Task";

export function addTask(taskRepository, title) {
    // Crear la nueva tarea con atributos iniciales
    const newTask = { 
        id: Date.now(),       // Generamos un ID único
        title,                // Título de la tarea
        completed: false      // Inicialmente no completada
    };

    // Guardar la tarea en el repositorio y devolver la lista actualizada
    // Nota: el repositorio maneja persistencia, la lógica de negocio se mantiene separada
    return taskRepository.save(newTask);
}
