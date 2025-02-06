import { useState } from "react";
import TaskItem from "./TaskItem.js";
import DeleteTask from "./DeleteTask.js";

const Help=({task})=>{
    console.log(task);
    const [showDetails, setshowDetails] = useState(0);
    function onClick()
    {
        if(showDetails === 0){
        setshowDetails(1);
        }
        else
        {
            setshowDetails(0);
        }
    }
    function handleDelete(id,e) // event object should always  come at last
    {
           DeleteTask(id);
    }
    return(
        <div>
            <li>
            <h3>{task.name}</h3><button id = "HelpTaskShowDetailsButton" onClick={onClick}>ShowDetails</button>
           <button  onClick={()=>{handleDelete(task.id)}}>Delete</button>
            {showDetails===1 && <TaskItem task = {task}/>}
            </li>


        </div>
    )
}
export default Help;