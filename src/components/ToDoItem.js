import React from "react"

const ToDoItem = ({task, deleteTask, toggleCompleted}) =>{
    const handleChange = () =>{
        toggleCompleted(task.id)
    }
    return(
        <div className = "todo-item">
            <input 
            type="checkbox"
            checked={task.completed}
            onChange={handleChange}
            />
            <p>{task.inputText}</p>
            <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>
    )
}

export default ToDoItem