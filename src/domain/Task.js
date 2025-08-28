// Entities (Dominio)

export class Task {
  constructor(id, title, completed = false) {
    this.id = id;         // ID único
    this.title = title;   // Nombre o descripción de la tarea
    this.completed = completed; // Estado de la tarea, por defecto false
  }
}
