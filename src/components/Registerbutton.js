import { useState } from "react"
import Register from "../components/Register.js"
import "../css/Register.css"
import Login from "./Login.js"
import { useNavigate } from "react-router-dom"
const RegisterButton = ()=>{
    const [roleclient ,setroleclient] = useState(0);
    const [rolefreelancer, setrolefreelancer] = useState(0);
    const navigate = useNavigate();
    
     function ToggleRole(no1,no2)
     {
        setroleclient(no1);
        setrolefreelancer(no2);
     }
     function goToLogin()
     {
          navigate("/login");
     }

    return(
        <div id = "RegisterParentContainer"> 
            <h1 id= "heading_of_main_page"> Welcome to Freelancia</h1>
            <button   id = "RegisterAsClient" onClick = {()=>ToggleRole(1,0)}>Register as Client</button>
            <br></br>
            <button id = "RegisterAsFreelancer" onClick=  {()=>ToggleRole(0,1)}>Register as Freelancer </button>
            {roleclient ===1 && <Register role = "CLIENT"  displayText = "Find extremely talented professional individuals as per your project  requirements"/>}
            {rolefreelancer ===1  && < Register role = "FREELANCER" displayText="Find amazing freelancing opportunites according to your expertise and get paid according to latest industry standards"/>}
            <button id = "LoginButton" onClick={goToLogin}>Login</button>
           

        </div>
    )

}
export default RegisterButton;