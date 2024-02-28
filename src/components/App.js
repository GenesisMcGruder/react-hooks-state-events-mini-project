import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory,setSelectedCategory] = useState("All")

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value)
    
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks,newTask])
  }
  const tasksToDisplay = tasks.filter((task)=>{
    if(selectedCategory === "All") return true;
    return task.category=== selectedCategory})

  const handleDeleteTask= (deletedTask)=>{
   const filteredTasks= tasks.filter(task=> deletedTask.text !== task.text)
   setTasks(filteredTasks)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
