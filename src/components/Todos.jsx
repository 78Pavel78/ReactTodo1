import Todo from './Todo.jsx';

const Todos = ({ todos, deleteTodo }) => {

    return (
        <div className='todos'>
            {
                todos.map(todo => {
                    return <Todo
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        key={todo.id}
                        text={todo.text}
                        isFavorite={todo.isFavorite}
                    />
                })
            }
        </div>
    );
}

export default Todos;