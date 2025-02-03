import { useState } from "react"
import Register from "../components/Register.js"
import "../css/Register.css"
import Login from "./Login.js"
const RegisterButton = ()=>{
    const [roleclient ,setroleclient] = useState(0);
    const [rolefreelancer, setrolefreelancer] = useState(0);
    
     function ToggleRole(no1,no2)
     {
        setroleclient(no1);
        setrolefreelancer(no2);
     }

    return(
        <div id = "RegisterParentContainer"> 
            <h1 id= "heading_of_main_page"> Welcome to Freelancia</h1>
            <button   id = "RegisterAsClient" onClick = {()=>ToggleRole(1,0)}>Register as Client</button>
            <br></br>
            <button id = "RegisterAsFreelancer" onClick=  {()=>ToggleRole(0,1)}>Register as Freelancer </button>
            {roleclient && <Register role = "CLIENT"  displayText = "Find extremely talented professional individuals as per your project  requirements"/>}
            {rolefreelancer && < Register role = "FREELANCER" displayText="Find amazing freelancing opportunites according to your expertise and get paid according to latest industry standards"/>}
            <Login/>

        </div>
    )

}
export default RegisterButton;