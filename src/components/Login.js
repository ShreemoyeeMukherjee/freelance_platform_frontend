import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,Router} from "react-router-dom";
import instance from "..//axiosinstance.js"
import { useState } from "react";
import {setError} from "react";
import "../css/Login.css"
import LoginError from "./LoginError.js"
import { useNavigate } from "react-router-dom";


const Login = ()=>{
    const navigate  = useNavigate();
    const[loginInfo , setloginInfo] = useState({});
    const [loginerrorflag ,setloginerrorflag] = useState(0);
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
            navigate("/userprofile")
            const token = response.data;
            localStorage.setItem("token",token);
            console.log(token);

        })
        .catch((error)=>{
            console.log(error);
            setloginerrorflag(1);
        })
        
    }
    return(<div>
        <form onSubmit={onSubmit}>
            <input type = "text" id = "login_email" name = "email" placeholder="Email" onChange={onChange}/>
            <input type = "password" id = "login_password" name = "password" placeholder="Pasword" onChange={onChange}/>
            <button id = "login_button">Submit</button>
            {loginerrorflag === 1 && <LoginError/>}

        </form>
    </div>)

}
export default Login;