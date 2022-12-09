import React from 'react'

const AddTodo = ({ text, handleTextChange, addTodo, handleKeyDownInput }) => {

    return (
        <div className='add-todo'>
            <input
                type="text"
                className='add-todo__input'
                placeholder='Write HERE, moron!'
                value={text}
                onChange={(e) => handleTextChange(e)}
                onKeyDown={(e) => handleKeyDownInput(e)}
            />
            <button
                type='submit'
                className='add-todo__btn'
                onClick={ addTodo }
            >Add</button>
        </div>
    );
}

export default AddTodo;
