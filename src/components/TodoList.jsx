import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function Todolist() {
    let todos = useSelector(state => state)
    return (
        <div className="my-4">
           {todos.map(todo => {
               return <TodoItem key={todo.id} todo={todo} />
           })}
             
        </div>
    )
}

export default Todolist
