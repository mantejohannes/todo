import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ( ) =>{
    return(
   
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       
          <NavLink className="navbar-brand" to="/">ReactJS App</NavLink>
          
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
     </li>

     <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
     </li>


     <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
     </li>



               
             
              
              
              
            
            </ul>
           
          </div>
      
      </nav>
      
     
    );
  }

    

    export default Navbar;