import React, { useState, useEffect } from "react";
import "./menu.scss";
import logo from "../img/logo.jpg";

const Menu = props => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    return () => {
      const container = document.getElementById("menu-container");

      if (showMenu) {
        container.className = "collapseMenu";
      } else {
        container.className = "expandMenu";
      }
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="menu-container">
      <div id="main">
        <img id="menu-logo" src={logo} alt="logo" />
        <div id="linkset">
          <div className="menu-link selected">
            <i className="fas fa-graduation-cap" />
            <p>Inicio</p>
          </div>
          <div className="menu-link">
            <i class="fas fa-university"></i>
            <p>Acerca de la carrera</p>
          </div>
          <div className="menu-link">
            <i className="fas fa-book" />
            <p>Materias</p>
          </div>
          <div className="menu-link">
            <i className="far fa-calendar-alt" />
            <p>Eventos</p>
          </div>
          <div className="menu-link">
            <i className="fas fa-user-tie" />
            <p>Perfil de egresado</p>
          </div>
          <div className="menu-link">
          <i class="fas fa-briefcase"></i>
            <p>Campo laboral</p>
          </div>
          <div className="menu-link">
          <i class="fas fa-question-circle"></i>
            <p>Ayuda</p>
          </div>
           <div className="menu-link">
           <i class="fas fa-users"></i>
            <p>Creditos</p>
          </div>
        </div>
      </div>
      <div onClick={toggleMenu} id="tab">
        <button id="hamburger-btn">
          {showMenu ? (
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
