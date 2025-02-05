import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import "./css/App.css"
import Login from './components/Login.js';
import UserProfile from './components/UserProfile.js';


import RegisterButton from './components/Registerbutton.js';

function App() {
  return (
    <div id="Main_page_container">
   <BrowserRouter>
   <Routes>
    <Route path = "/" element = {<RegisterButton/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/userprofile" element = {<UserProfile/>}/>
    
   </Routes>
   </BrowserRouter>
   </div>
    
  )
}

export default App;
