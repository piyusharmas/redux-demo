import {useSelector} from 'react-redux';
export default function ToDo() {
    const todos = useSelector((state) => state.todos);
    return (
        <div>
            <h2>To-Do</h2>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <p>{todo.task} - {todo.isDone ? 'Done' : 'Pending'}</p>
                </li>
            ))}
        </div>
    );
}