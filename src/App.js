import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar tomate', completed: true},
  {text: 'Cortar cebolla', completed: false},
  {text: 'hervir agua', completed: false},
  {text: 'servir pasta', completed: false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue));
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();

      return todoText.includes(searchedText);
    }
  )

  console.log('Todos de: ' + searchValue);

  return (
    <>
      
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        { searchedTodos.map(todo => (
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
