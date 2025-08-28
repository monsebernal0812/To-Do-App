import { useState } from "react";

export default function TaskInput({ onAdd }) {
  // Estado local para manejar el valor del input
  const [title, setTitle] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);   // Llama al caso de uso para agregar la tarea
      setTitle("");   // Limpiar input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input controlado */}
      <input type="text" value={title} placeholder="Nueva tarea..." onChange={(e) => setTitle(e.target.value)}/>
      {/* Botón de agregar */}
      <button type="submit">Agregar</button>
    </form>
  );
}
