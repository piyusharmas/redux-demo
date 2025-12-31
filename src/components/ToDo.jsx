import {useSelector} from 'react-redux';
import AddForm from './AddToDo';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../features/todo/todoSlice.js';

export default function ToDo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        dispatch(deleteTodo(id));
    }   

    return (
        <div>
            <h2>To-Do</h2>
            <AddForm />
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.task}
                    <button onClick={() => clickHandler(todo.id)}>delete</button>
                </li>
            ))}
        </div>
    );
}