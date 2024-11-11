import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext'

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
  
  return (
      totalTodos === completedTodos ?

      <h1 className = "TodoCounter">
        Has completado todas las tareas.
      </h1>
      :
      <h1 className="TodoCounter">
        has completado <span>{completedTodos}</span>  de <span>{totalTodos}</span> Todos
      </h1>
    )
}

export { TodoCounter };