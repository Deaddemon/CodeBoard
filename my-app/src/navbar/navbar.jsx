import React from "react";
import './navbar.css';
 
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
   
  return (

    
    <div className="Navbar">
        <div className="flex flex-col md:flex-row navbar-header" >
         
        <button
          className="navbar-btn navbar-btn-primary navbar-btn-landing"
           
        >
          <HashLink smooth to='/landing/#landing' > Code Editor </HashLink>
        </button>
      
        <button
          className="navbar-btn navbar-btn-primary navbar-btn-canvas"
  
        >
         <HashLink smooth to='/canvas/#canvas' > White Board  </HashLink>
        </button>
     
      </div>

       
    </div>
  );
}
 
 