import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
      <h1 className="TodoCounter">
        has completado <span>{completed}</span>  de <span>{total}</span> Todos
      </h1>
    )
}

export { TodoCounter };