import React from 'react'

const Todo = ({ id, text, isFavorite, deleteTodo }) => {
    

    return (
        <div className={`todo ${isFavorite && 'todo__favorite'}`}>
            <div className="todo__wrapper">
                <button className="todo__star">&#127879;</button>
                <div className="todo__text">{text}</div>
            </div>
            <button 
            onClick={() => deleteTodo(id)} 
            className="todo__delete">&#10008;</button>
        </div>
    )
};

export default Todo;