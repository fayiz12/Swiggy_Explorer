import { useState,useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    const [btn,setBtn]=useState("Login")
    
    useEffect(()=>{
        console.log("useEffect is called");
    },[])
    return (
        <div className="header">
            <img className="logo" src={LOGO_URL}></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button onClick={()=>btn==="Login"?setBtn("Logout"):setBtn("Login")} className="login-btn">{btn}</button>
            </ul>
        </div>
        
    )
}

export default Header;