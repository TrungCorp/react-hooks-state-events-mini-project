import React,{useState} from "react";

function CategoryFilter({ categories ,filterTerm}) {
  const [lastCat,setLastCat] = useState("")
  
   const displayedCats = categories.map(cat => {
      var toggle = false
      function handleToggle(event)
      {
        toggle = !toggle
        if(toggle == true)
        {
          event.currentTarget.className = "selected"
          if(lastCat !=""){
           
            lastCat.target.className = ""
          }
          setLastCat(event)
          filterTerm(event.target.innerHTML)
        }
        else if (toggle == false)
        {
          event.currentTarget.className = ""
        }
      }
      return <button key={cat} className={toggle ? "selected" : ""} onClick={handleToggle}>{cat}</button>
    })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
        displayedCats
      }
    </div>
  );
}

export default CategoryFilter;
