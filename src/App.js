import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App" m-3>
      <TodoInput/>
      <Todolist/>
    </div>
  );
}

export default App;
