import {useSelector} from 'react-redux';
import AddForm from './AddToDo';

export default function ToDo() {
    const todos = useSelector((state) => state.todos);
    return (
        <div>
            <h2>To-Do</h2>
            <AddForm />
            {todos.map((todo) => (
                <li key={todo.id}>
                    <p>{todo.task} - {todo.isDone ? 'Done' : 'Pending'}</p>
                </li>
            ))}
        </div>
    );
}