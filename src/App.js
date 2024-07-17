import './App.css';
import MyComponent from './components/MyComponent'
import MyButton from './components/Button'
import ToDoList from './components/ToDoList'
import React, { useState } from "react"


const Form = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const addTask = (task) => {
    {task != '' && <p> Your task is {task}</p>}
    taskList.push(task)
    setTaskList(taskList)
    console.log("taskList", taskList)
  }
  return (
    <>
      <label>
        Task:
        <input name="task" value={task} onChange={e => setTask(e.target.value)} />
      </label>
      <button type="submit" onClick={() => { addTask(task) }}>Submit</button>
      
    </>
  )

}
export default function MyApp() {
  return (
    <div className="App">
      <h1>
        To Do List
      </h1>
      <ToDoList/>
    </div>
  );
}

