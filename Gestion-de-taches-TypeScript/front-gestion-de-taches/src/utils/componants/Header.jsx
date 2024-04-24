import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout"


const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/home">
          <button>Home</button>{" "}
        </NavLink>

        <NavLink to="/">
          <button>Connexion</button>{" "}
        </NavLink>

        <NavLink to="/signup">
          <button> S'inscrire </button>{" "}
        </NavLink>
        
        <Logout/>
      </nav>
    </header>
  )
}

export default Header
