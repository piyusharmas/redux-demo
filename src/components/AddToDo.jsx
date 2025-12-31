import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';


export default function AddForm() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const submithandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    return (
        <>
            <form onSubmit={submithandler}>
                <input type="text" 
                placeholder="Add a new task" 
                onChange={(e)=>setTask(e.target.value)}/>
                <button>Add Task</button>
            </form>
        </>
    );
}