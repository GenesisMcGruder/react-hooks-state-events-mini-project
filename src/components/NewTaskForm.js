import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [detail,setDetail] = useState("")
  const [decidedCategory,setDecidedCategory] = useState("Code")

  function handleSubmit(e){
    e.preventDefault()
    let newTask = {
      text: detail,
      category: decidedCategory
    }
   onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={detail} onChange={(e)=>setDetail(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={decidedCategory} onChange={(e)=> setDecidedCategory(e.target.value)}>
          {categories.filter(category => category !== "All").map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
