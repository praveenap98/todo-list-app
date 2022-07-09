import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div>
            <ul>
                {
                    filteredTodos.map((todo) => {
                        return(
                           <Todo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}

export default TodoList