import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,Router} from "react-router-dom";
import instance from "..//axiosinstance.js"
import { useState } from "react";


const Login = ()=>{
    const[loginInfo , setloginInfo] = useState({});
    function onChange(e)
    {
         setloginInfo((prevState)=>(
            {
                ...prevState,
                [e.target.name]:e.target.value,
            }
         ))
    }

    function onSubmit(e)
    {
        e.preventDefault();
        console.log(JSON.stringify(loginInfo));
        instance.post("/user/login",JSON.stringify(loginInfo))
        .then((response)=>{
            const token = response.data;
            console.log(token);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    return(<div>
        <form onSubmit={onSubmit}>
            <input type = "text" id = "login_email" name = "email" placeholder="Email" onChange={onChange}/>
            <input type = "password" id = "login_password" name = "password" placeholder="Pasword" onChange={onChange}/>
            <button id = "login_button">Submit</button>

        </form>
    </div>)

}
export default Login;