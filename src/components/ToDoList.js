import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [inputText, setInputText] = useState('')
    const addTask = (inputText) => {
        const newTask = {
            id: Date.now(),
            inputText,
            completed: false
        };
        setTasks([...tasks, newTask])
        setInputText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id != id))
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            else {
                return task;
            }
        }))
    }

    return (
        <div className="todo-list">
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => { console.log(tasks); addTask(inputText) }}>Add</button>
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted} />
            ))}

        </div>
    )
}

export default ToDoList