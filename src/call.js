import React from 'react';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

export default function call() {
    return (
        <div>
            <TodoInput/>
            <Todolist/>
        </div>
    )
}
