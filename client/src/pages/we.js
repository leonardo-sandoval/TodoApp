import React from 'react';

const WeContent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">¡Bienvenido a Todo App!</h1>
      <p className="text-gray-700 mb-2">
        En Todo App, te proporcionamos una herramienta simple y efectiva para organizar tus tareas diarias.
        Con nuestra aplicación, puedes crear, editar y eliminar tus "todos" y asignarles tareas individuales.
      </p>
      <p className="text-gray-700 mb-2">
        ¿Cómo funciona?
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Comienza agregando un "todo" en la página principal. Un "todo" puede ser cualquier tarea o proyecto que desees realizar.</li>
        <li>Una vez que hayas agregado un "todo", puedes verlo en la lista con detalles sobre su fecha de creación y las tareas asociadas.</li>
        <li>Puedes agregar, editar o eliminar tareas dentro de cada "todo".</li>
        <li>Cuando hayas completado una tarea, simplemente marca la casilla junto a ella para marcarla como completada.</li>
      </ul>
      <p className="text-gray-700 mb-2">
        ¿Por qué usar Todo App?
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Mantén tus tareas organizadas y nunca olvides una tarea importante.</li>
        <li>Agrega notas o detalles adicionales a cada "todo" para mantener un registro detallado de tus proyectos.</li>
        <li>Marca tus tareas completadas para ver fácilmente tu progreso y logros.</li>
        <li>Acceso rápido y fácil desde cualquier dispositivo con conexión a Internet.</li>
      </ul>
      <p className="text-gray-700 mt-4">
        ¡Esperamos que disfrutes usando Todo App y que te sea útil en tu vida diaria!
      </p>
    </div>
  );
};

export default WeContent;

