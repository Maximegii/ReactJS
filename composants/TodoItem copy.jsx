import styles from "@/styles/Home.module.css";
import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.index);
 }
 
 return (
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p>{task.input}</p>
<button onClick={() => deleteTask(task.index)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;