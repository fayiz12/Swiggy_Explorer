import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header=()=>{
    const [btn,setBtn]=useState("Login")
    return (
        <div className="header">
            <img className="logo" src={LOGO_URL}></img>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button onClick={()=>btn==="Login"?setBtn("Logout"):setBtn("Login")} className="login-btn">{btn}</button>
            </ul>
        </div>
        
    )
}

export default Header;