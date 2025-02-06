import { useEffect, useState } from "react"
import instance from "../axiosinstance.js";

const CreateTask  = ()=>{
    const [task,settask] = useState({});
      function onSubmit(e)
      {
        e.preventDefault();
       
        instance.post("/client/create-task",JSON.stringify(task))
        .then((response)=>{
                console.log(response.data);
                if(response.status === 200)
                {
                   alert("Task created successfully");
                }
        })
        .catch((error)=>{
                console.log(error);
        })
      }
      function onClick(e)
      {
          settask((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
          }))
          
      }
     
    return(
        <div>
            <form onSubmit= {onSubmit}>
                <input type = "text" name = "name"  id = "taskname" placeholder = "Name" onChange={onClick}></input>
                <input type = "text" name=  "description" id = "taskdescription" placeholder="Description" onChange={onClick}></input>
                <input type = "text" name=  "duration_in_hrs" id = "task_duration_in_hrs" placeholder = "Duration_in_hrs" onChange={onClick}></input>
                <input type = "text" name = "remuneration" id = "task_remuneration" placeholder = "Remuneration" onChange = {onClick}></input>
                <button>Submit</button>
            </form>
        </div>
    )


}
export default CreateTask;