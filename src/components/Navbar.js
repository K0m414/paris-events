import React from 'react';
import { NavLink } from "react-router-dom"
import "./css/Navbar.css"

function Navbar(){
    return(
        <nav>
            <ul className="navbar">
            
                <li>
                    <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
                </li>
                
                <li>
                    <NavLink exact to="/recherche-des-evenements" activeClassName="nav-active">Liste des événements</NavLink>
                </li>
                
                <li>
                    <NavLink exact to="/vos-favoris" activeClassName="nav-active">Favoris</NavLink>
                </li>
                
            </ul>
        </nav>
        
        
    )
}

export default Navbar;