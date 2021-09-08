import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            <NavLink exact to="/recherche-des-evenements" activeClassName="nav-active">Liste des événements</NavLink>
            <NavLink exact to="/vos-favoris" activeClassName="nav-active">Favoris</NavLink>
        </div>
        
    )
}

export default Navbar;