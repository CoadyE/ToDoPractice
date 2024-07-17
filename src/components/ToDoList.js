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

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id != id))
    }

    const toggleCompleted = (id) => {
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
            {tasks.map(task => {
                <ToDoItem 
                key={task.id} 
                task={task} 
                toggleCompleted={toggleCompleted} 
                deleteTask={deleteTask} />
            })}
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => addTask(inputText)}>Add</button>
        </div>
    )
}

export default ToDoList