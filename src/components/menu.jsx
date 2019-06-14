import React, { useState, useEffect } from "react";
import "./menu.scss";
import logo from "../img/logo.jpg";

const Menu = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("menu-container");

    if (menuOpen) {
      container.className = "expandMenu";
    } else {
      container.className = "collapseMenu";
    }
  }, [menuOpen]);

  const toggleMenu = e => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="menu-container" className="collapseMenu">
      <div id="main">
        <img id="menu-logo" src={logo} alt="logo" />
        <div id="linkset">
          <div className="menu-link selected">
            <i class="fas fa-graduation-cap" />
            <p>Oferta academica</p>
          </div>
          <div className="menu-link">
            <i class="far fa-calendar-alt" />
            <p>Eventos</p>
          </div>
          <div className="menu-link">
            <i class="fas fa-briefcase" />
            <p>Campo laboral</p>
          </div>
          <div className="menu-link">
            <i class="fas fa-book" />
            <p>Materias</p>
          </div>
          <div className="menu-link">
            <i class="fas fa-user-tie" />
            <p>Funcionarios</p>
          </div>
        </div>
      </div>
      <div onClick={toggleMenu} id="tab">
        <button id="hamburger-btn">
          {menuOpen ? (
            <i className="fas fa-arrow-left" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Menu;
