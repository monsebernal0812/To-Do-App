
export class TaskRepositoryLocalStorage {
  constructor() {
    // Clave utilizada en localStorage
    this.key = "tasks";
  }
  // Obtener todas las tareas
   
  getAll() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }

  //Guardar una nueva tarea
  
  save(task) {
    const tasks = this.getAll();
    tasks.push(task);
    localStorage.setItem(this.key, JSON.stringify(tasks));
    return tasks;
  }

  //Alternar el estado completado de una tarea
   
  toggle(id) {
    const tasks = this.getAll().map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    localStorage.setItem(this.key, JSON.stringify(tasks));
    return tasks;
  }

  //Eliminar una tarea por ID
  
  deleteTask(id) {
    const tasks = this.getAll().filter(t => t.id !== id);
    localStorage.setItem(this.key, JSON.stringify(tasks));
    return tasks;
  }
}

  