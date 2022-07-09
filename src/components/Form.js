import React from 'react';

const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    

    const inputHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(inputText === '') {
            alert('Enter the task!')
        }
        else {
        console.log("->",inputText);
        setTodos([...todos, {text : inputText, completed : false, id : Math.random() * 1000}]);
        setInputText('');
        }
    }

    const selectHandler= (e) => {
        console.log(e.target.value);
        setStatus(e.target.value)
    }

    return(
        <div className='form-container'>
            <form>
                <input onChange={inputHandler} type='text' placeholder='Enter your task here' value={inputText}/>
                <button className='button blue' onClick={submitHandler} type='submit'>Add</button>
                <div>
                <label htmlFor='status'>Task Status</label>
                <select id='status' onChange={selectHandler}>
                    <option>All</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>
                </div>
            </form>
        </div>
    )
}

export default Form;