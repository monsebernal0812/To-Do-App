# Aplicación creada con React y con una estructura Clean Architecture 
Lo que se busco realizar con dicha estructura es que cada cada que se iba realizando tuviera una responsabilidad 
la cuál hace que dicha aplicación sea más mantenible, escalable, testable y tenga una buena organización. 
El tipo de organización que se realizo fue en capas concéntricas, donde las reglas de negocio no depende de los detalles extremos. 

# ¿Cómo se componen estás capas?
1. Entities (Entidades/Dominio): Representan las reglas de negocio más puras
La podemos ver más como la definición del (Task) con sus respectivos atributos (id, title, completed).

2. Use Cases (Casos de uso / Aplicación): Contienen la lógica que dicta cómo interactúan las entidades.
Se puede identificar más de la siguiente manera: "Agregar tarea", "Eliminar tarea", "Marcar tarea como completada".

3. Interface Adapters (Adaptadores / Infraestructura): Traducen los datos para que puedan usarse entre la UI y los casos de uso.
Se conoce como un repositorio de tareas que conecta con localStorage.

4. Frameworks & UI (Presentación / Capa externa): Lo más externo, frameworks y librerías (React, DB, APIs, etc.).
Nos basamos en los componentes de React que muestran la lista de tareas.

# Estructura del proyecto: 

src/
├── domain/               # Entidades del dominio (Task)
├── application/          # Casos de uso (add, toggle, delete)
├── infrastructure/       # Repositorio LocalStorage
└── ui/                   # Componentes React (UI, estilos)

# Tecnologías utilizadas: 

* React (con componentes funcionales)
* JavaScript (ES6+)
* Hooks: useState, useEffect
* CSS puro

# Instalación y ejecución: 

git clone (https://github.com/monsebernal0812/To-Do-App)
cd todo-app

# Instalar dependencias: 
npm install

# Ejecución de la aplicación: 
npm start

# Visualización en el navegador: 
http://localhost:3000
