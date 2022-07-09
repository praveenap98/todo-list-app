import React from 'react';

const Todo = ({todo, setTodos, todos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((t) => t.id !== todo.id))
    }

    const doneHandler = () => {
        
        setTodos(todos.map((t) => {
            if(t.id === todo.id)
            return {...t, completed:!todo.completed};
            else
            return t;
        }));
    }
    return (
        <div className='todo-container'>
            <li className={todo.completed ? 'strikeout' : ''}>{todo.text}</li>
            <button className='button green' onClick={doneHandler}>{todo.completed ? 'Undone' : 'Done'}</button>
            <button className='button red'onClick={deleteHandler}>Cancel</button>
        </div>
    )
}

export default Todo;