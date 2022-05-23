import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
<h1>Todo List</h1>
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"   placeholder="Add Task..." value={newTodo} onChange={(e)=> {setTodo(e.target.value)}}/>
      <button data-cy="add-task-button" className={styles.btn} onClick={() => {
        
      setTodos([ ...todos,newTodo ],);
      setTodo ("");}
      }>+</button>
      <div>
        {todos.map(todo=>(
<div key={todo}>
  <input type="radio" />{todo}
<hr/>
</div>
  ))}
      </div>
    </div>
  </>
    )
};

export default AddTask;
