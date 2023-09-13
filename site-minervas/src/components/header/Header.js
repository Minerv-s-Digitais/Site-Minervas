import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importe o ícone de sanduíche

import logonova from "../../assets/logonova-completa.svg"
import Menu from "./Menu"

import "./Header.scss"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={logonova} className="logo" alt="logo" />
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
      <Menu />
    </div>
  )
}

export default Header
