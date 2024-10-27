import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
      total === completed ?

      <h1 className = "TodoCounter">
        Has completado todas las tareas.
      </h1>
      :
      <h1 className="TodoCounter">
        has completado <span>{completed}</span>  de <span>{total}</span> Todos
      </h1>
    )
}

export { TodoCounter };