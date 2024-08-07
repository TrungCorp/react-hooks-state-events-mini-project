import React, { useEffect,useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [cats,setCats] = useState("Code")
  const [text,setText] = useState("")
 
  const displayedCATS = categories.filter(cat=>{
    if(cat !== "All")
    {
      return true
    }
  })
  function handleTextChange(event)
  {
    setText(event.target.value)
  }
  function handleCatChange(event)
  {
    console.log(event.target.value)
    setCats(event.target.value)
  }
  function handleSubmit(event)
  {
    event.preventDefault()
    const newTaskObj ={
      text: text,
      category: cats
    }
    onTaskFormSubmit(newTaskObj)
  }
  
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={cats} onChange={handleCatChange} name="category">
          {/* render <option> elements for each category here */
            displayedCATS.map(cat =>{
              return <option  key={cat}>{cat}</option>
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
