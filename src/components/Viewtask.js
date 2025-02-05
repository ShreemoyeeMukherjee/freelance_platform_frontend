import instance from "../axiosinstance.js"
import { useState } from "react";
import TaskItem from "./TaskItem.js";
import Help from "./Help.js";
const ViewTask = ({taskList})=>{
   
    return(
        <div>
        {
            taskList.map((task)=>{
                return(<Help  task = {task}/>)
})
        }
        </div>
    )


}       
    

export  default ViewTask;