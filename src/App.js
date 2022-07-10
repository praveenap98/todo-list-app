import React, { useEffect, useState } from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'
import './styles.css'

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('All');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(()=>{
        const filteredTaskHandler = (status) => {
            switch(status){
              case 'Completed':
                 setFilteredTodos(todos.filter((todo) => todo.completed === true));
                 break;
    
              case 'Pending':
                 setFilteredTodos(todos.filter((todo) => todo.completed === false));
                 break;
            
              default:
                 setFilteredTodos(todos);
                 break;
            }
        }
        filteredTaskHandler(status);
    }, [todos, status]);

    return (
        <div className='main-container'>
            <h1>Todo List</h1>
            <Form 
            setInputText={setInputText} 
            setTodos={setTodos}
            todos={todos}
            inputText={inputText}
            setStatus={setStatus} />
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
    )
}

export default App;