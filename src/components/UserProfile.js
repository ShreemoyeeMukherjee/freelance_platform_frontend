import { useEffect, useState } from "react";
import ViewTask from "./Viewtask.js";
import instance from "../axiosinstance.js";
import axios from "axios";
let taskList = [];

const UserProfile = ()=>{
    const[viewTaskFlag ,setviewTaskFlag] = useState(0);
    useEffect(()=>{
        instance.get("/client/view-task")
        .then((response)=>{
            
             taskList = response.data;
             console.log(taskList);
              
        })
        .catch((error)=>{
            console.log(error);
        })
     },[])
    
     
    function onClick()
    {
        
      
        console.log("In click")
       setviewTaskFlag(1);
       
    }
    
    return(
        <div id = "UserProfile">
            <button id = "CreateTask">Create Task</button>
            <button id = "ViewTask" onClick={onClick}>View Task </button>
            
            {
            viewTaskFlag=== 1 &&<ViewTask taskList={taskList}
            />
            }
              {console.log(taskList)}
          
             
            
        </div>

    )
}
export default UserProfile;