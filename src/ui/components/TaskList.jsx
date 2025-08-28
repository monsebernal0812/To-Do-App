import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map((t) => (
        <TaskItem
          key={t.id}      // Clave única necesaria para listas en React
          task={t}        // Pasa la tarea al componente TaskItem
          onToggle={onToggle} // Función para marcar completada
          onDelete={onDelete} // Función para eliminar
        />
      ))}
    </ul>
  );
}
