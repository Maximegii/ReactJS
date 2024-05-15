import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "@/styles/Home.module.css";

function TodoList() {
    const [tasks, setTasks] = useState(["toto"]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const valuee = localStorage.getItem(tasks);
        if (valuee ==! null){
        // setTasks(JSON.parse(valuee))
        console.log("value",valuee)}
      }, [])
    
      // When user submits the form, save the favorite number to the local storage
      const saveToLocalStorage = e => {
        e.preventDefault()
        localStorage.setTasks("tasks", tasks)
      }
      //fonction pour ajouter une tache
    function addTask(input) {
         const newTask = {
             index: Date.now(),
             input,
             completed: true
         };
        console.log("items before adding", tasks.length)
        setTasks([...tasks, input]);
        setInput('');
    }
// fonction pour supprimer une tache
    function deleteTask(index) {
        console.log("Deleting task with ID:", index);
        setTasks(tasks.filter(task => task.index !== index));
    }


    return (
        <div className="todo-list">
           {tasks.map(task => (
            <TodoItem
            key={task.index} 
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted} 
 
 />
 ))}
            
            <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className={styles.card} onClick={() => addTask(input)}>Add</button>
            
        </div>
    );
}

export default TodoList;
