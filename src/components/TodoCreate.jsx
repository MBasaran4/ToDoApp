import React, {useState, useRef}from 'react'
import '../App.css'

function TodoCreate ({onCreateTodo}) {
    const buttonRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        buttonRef.current.click();
        }
    };
    
    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }    

    const createTodo = () => {
        if(!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }

    return (
    <div className='todo-create'>
        <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className='todo-input'
            type='text'
            placeholder='Todo giriniz'
            onKeyDown={handleKeyDown}
        />
        <button ref={buttonRef} onClick={createTodo} className='todo-create-button'>Oluştur</button>
    </div>

  )
}

export default TodoCreate
