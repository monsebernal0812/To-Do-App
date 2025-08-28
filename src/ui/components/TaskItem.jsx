import { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  // Estado local para animación de eliminación
  const [removing, setRemoving] = useState(false);

  // Maneja la eliminación con retraso para animación
  const handleDelete = () => {
    setRemoving(true); // activa clase CSS "removing" para animación
    setTimeout(() => onDelete(task.id), 300); // espera 300ms antes de borrar la tarea
  };

  return (
    <li className={removing ? "removing" : ""}>
      {/* Botón para marcar como completada o pendiente */}
      <button className="complete-btn" onClick={() => onToggle(task.id)}>
        {task.completed ? "Completada" : "Pendiente"}
      </button>

      {/* Texto de la tarea, cambia estilo si está completada */}
      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      {/* Botón de eliminar la tarea */}
      <button className="delete-btn" onClick={handleDelete}>Borrar</button>
    </li>
  );
}
