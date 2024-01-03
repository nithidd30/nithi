import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
const Navbar=()=>{

  const navigate = useNavigate();
  
    return(
        <div className="header">
    <nav class="navbar">
          <a href="/Home" class="logo">GaragePal</a>
          <ul class="nav-list">
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Book">Booking</a></li>
            
            <li><a href="/Rating">Review</a></li>
          </ul>

          <div>
              <button className="navigationbt" onClick={() =>navigate('/SignInNo')}>Sign Up</button>
              <button className="navigationbt"onClick={() =>navigate('/Login')}>Login</button>
            
          </div>
      </nav> 
          </div>
    );
}
export default Navbar;