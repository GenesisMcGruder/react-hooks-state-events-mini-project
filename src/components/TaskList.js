import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteTask}) {

  return (
    <div className="tasks">
      {tasks.map((task)=>(
       <Task key={task.text} text={task.text} category= {task.category} handleDeleteTask={handleDeleteTask} />
     ))
      /* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
