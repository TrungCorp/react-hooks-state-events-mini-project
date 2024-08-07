
import React, { useEffect, useState} from "react";
import Task from "./Task"

function TaskList({tasks,filter,deleteObj}) {
  
  
  
  //========================//
  //HANDLES DELETE FEATURE//

 
  const filteredTasks = tasks.map(tasks=>{

      return <Task TASKS={tasks} text={tasks.text} category={tasks.category} callBack={deleteObj} key={tasks.text}></Task>
    

  })
 const displayedTasks = filteredTasks.filter(task =>{
   if (task.props.category == filter)
   {
    return true
   }

 })
  
 
  return (
    <div className="tasks">
      {filter == null || filter == "All" ||filter =="" ? filteredTasks : displayedTasks}
    </div>
  );
}

export default TaskList;
