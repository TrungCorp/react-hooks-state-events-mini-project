import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filter,setFilter] = useState("")
  const [obj,setObj] = useState("")
  const [taskList,setTaskList] = useState(TASKS)
  
  function filterTerm(data)
  {
    
    setFilter(data)       
    
  }

  function handleSubmit(obj)
  {
    console.log(obj)
    const newObj = [...taskList,obj]
    setTaskList(newObj)
    
  }
  function deleteObj(obj)
  {
    console.log(obj)
    const newObj = taskList.filter((task)=>{
      if(task.text !== obj)
      {
        return true
      }
    })
    setTaskList(newObj)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterTerm={filterTerm} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES}  onTaskFormSubmit={handleSubmit}/>
      <TaskList filter={filter}  tasks={taskList} deleteObj={deleteObj}/>
    </div>
  );
}

export default App;
