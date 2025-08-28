
export function toggleTask(taskRepository, id) {
  // Llama al método toggle del repositorio y devuelve la lista actualizada
  return taskRepository.toggle(id);
}
