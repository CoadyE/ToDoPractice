import * as  React from 'react';
import Button from '@mui/material/Button';

function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <Button variant="contained" onClick={() => deleteTask(task.id)}>
                X
            </Button>
        </div>
    );
}
export default TodoItem;