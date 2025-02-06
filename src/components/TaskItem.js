import { useEffect, useState } from "react";
import ShowInputText from "./ShowInputText.js";
const TaskItem = ({task})=>{
    
    const [edit1,setedit1] = useState(0);
    const [edit2,setedit2] = useState(0);
    const [edit3,setedit3] = useState(0);
    const [edit4,setedit4] = useState(0);
    const [updatedTask, setupdatedTask] = useState(task);
  

    function onClick(no)
    {
        
        if(no === 1)
        {
            setedit1(!edit1)
        }
        else if(no === 2)
        {
            setedit2(!edit2);
        }
        else if(no ===  3)
        {
            setedit3(!edit3)
        }
        else
        {
            setedit4(!edit4);
        }
        
        
    }
    useEffect(()=>{
        if(edit1 !== 0){
            console.log(typeof(edit1))
        console.log("after updatiom",edit1)
        }
    },[edit1])
    
    
    return(
        
        <div id = "TaskItem">
            <h3>{task.name}</h3>
            <button id= "TaskItemNameUpdate" onClick={()=>{onClick(1)}}>Edit</button>
            <h3>{task.description}</h3>
            <button id = "TaskItemDescriptionUpdate" onClick={()=>{onClick(2)}}>Edit</button>
            <h3>{task.duration_in_hrs}</h3>
            <button id = "TaskItemDurationUpdate" onClick={()=>{onClick(3)}}>Edit</button>
            <h3>{task.remuneration}</h3>
            <button id = "TaskItemeRemunerationUpdate" onClick={()=>{onClick(4)}}>Edit</button>
            
            {edit1 === true && <ShowInputText value = {task.name}/>}
            {edit2 === true && <ShowInputText value = {task.description}/>}
            {edit3 === true && <ShowInputText value = {task.duration_in_hrs}/>}
            {edit4 === true && <ShowInputText value = {task.remuneration}/>}
        </div>
      
    )
}
export default TaskItem;