import instance from "../axiosinstance.js"
import { useState } from "react";
import {TaskItem} from "./TaskItem.js";
import Help from "./Help.js";
const ViewTask = ({taskList})=>{
   
    return(
        <div>
            <ul>
        {
            taskList.map((task)=>{
                return(<Help  task = {task}/>)
})
        }
        </ul>;
        </div>
    )


}       
    

export  default ViewTask;