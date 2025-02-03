
import { useEffect, useState } from "react";
import  instance from "../axiosinstance.js"
import "../css/Register.css"
import { useNavigate } from "react-router-dom";


const Register = ({role,displayText})=>{
    const navigate = useNavigate();
    
    const[registerData ,setregisterData] = useState({});
    const [submitflag, setsubmitFlag] = useState(0);
    function OnChange(e)
    {
        setregisterData((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,

        }))
        
    }

    function OnSubmit (e){
        e.preventDefault();
        setsubmitFlag(1);
        
    }
    useEffect(()=>{
        if(submitflag === 1){
        if(JSON.stringify(registerData) !== "{}"){
            console.log(registerData);
            console.log(role);
        instance.post(`/user/register?role=${role}`,JSON.stringify(registerData))

        .then((response)=>{
            console.log("Response data",response);
            setsubmitFlag(0);
            navigate("/login")
            
        })
        .catch((error)=>{
            console.log("Error while sending registration data to backend",error.message)
        })
    }
    }
        
      
    },[submitflag])
    return(
        <div id=  "form_container">
            
            <h2 id=  "Heading_of_Registration">  Registration Page</h2>
            <h3 id = "Display_Text_of_Registration">{displayText}</h3>
            <form id = "registration_form" onSubmit={OnSubmit}>
                <input type = "text" name = "name" id = "uname" placeholder="Name" onChange={OnChange}/>
                <input type = "text" name = "email" id = "uemail" placeholder="Email" onChange={OnChange}/>
                <input type = "password" name = "password" id = "password" placeholder="Password" onChange={OnChange}/>
                <button>Submit</button>


            </form>
        </div>
    )
}
export default Register;