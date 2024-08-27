import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';
import { FaCheck } from "react-icons/fa";



function Todo({ todo, enes, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        enes(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div className='todo'>
            < div >
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                        style={{ width: '100%' }}
                        className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                <div className='todo-icons-box'>
                    <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                    <a>
                        Delete
                    </a>
                </div>
                {
                    editable
                    ? 
                    <div className='todo-icons-box'>
                        <FaCheck className='todo-icons' onClick={updateTodo}/>
                        <a>
                            Confirm
                        </a>
                    </div>
                    : 
                    <div className='todo-icons-box'>
                        <FaEdit className='todo-icons' onClick={() => setEditable(true)}/>
                        <a>
                            Edit
                        </a>
                    </div> 
                }
            </div>
        </div>
    )
}

export default Todo