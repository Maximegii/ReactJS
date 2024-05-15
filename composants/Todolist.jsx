import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "@/styles/Home.module.css";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    
    const [text, setText] = useState('');
    useEffect(() => {
      if (typeof window !== 'undefined'){  
        const valuee = localStorage.getItem('tasks');
        if (valuee){
         setTasks(JSON.parse(valuee))
        console.log("value",valuee)}
      }
    }, [])
    
      //fonction pour ajouter une tache

   function addTask(text) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }
   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }
   return (
    <div className="todo-list">
    {tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    />
    ))}
    {/* <form > */}
   <input
    className={styles.input}
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button type="submit" className={styles.card} onClick={() => addTask(text)}>Add</button>
   {/* </form> */}
    </div>
    );
   }
   export default TodoList;