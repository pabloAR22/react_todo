import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar tomate', completed: true},
  {text: 'Cortar cebolla', completed: false},
  {text: 'hervir agua', completed: true},
  {text: 'servir pasta', completed: false}
];

function App() {
  return (
    <>
      
      <TodoCounter completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    
    </>
  );
}

export default App;
