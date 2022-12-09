import React, { useState } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos';
import todosData from '../Data/todos.js';



const Main = () => {
    const [todos, setTodos] = useState(todosData);
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const addTodo = () => {
        if (!text) {
            return;
        }
        setTodos([
            {
                id: new Date(),
                text: text,
                isFavorite: false
            },
            ...todos,
        ]);
        setText('');
    }

    const handleKeyDownInput = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const deleteTodo = (elementId) => {
        setTodos(todos.filter(item => {
            if (item.id === elementId) {
                return false;
            }
            return true;
        }))
    }

    return (
        <div>
            <AddTodo
                text={text}
                handleTextChange={handleTextChange}
                handleKeyDownInput={handleKeyDownInput}
                addTodo={addTodo}
            />
            <Todos
                text={text}
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default Main;

