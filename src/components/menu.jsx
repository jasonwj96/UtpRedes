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
            <a href="../containers/home.jsx"><p>Inicio</p></a>
            
          </div>
          <div className="menu-link">
            <i className="far fa-calendar-alt" />
            <a href="../containers/home.jsx"><p>Eventos</p></a>        
          </div>
          <div className="menu-link">
            <i className="fas fa-user-tie" />
            <a href="../containers/home.jsx"><p>Perfil de egresado</p></a>            
          </div>
          <div className="menu-link">
            <i className="fas fa-briefcase" />
            <a href="../containers/home.jsx"><p>Campo laboral</p></a>            
          </div>
          <div className="menu-link">
            <i className="fas fa-question-circle" />
            <a href="../containers/home.jsx"><p>Ayuda</p></a>            
          </div>
          <div className="menu-link">
            <i className="fas fa-users" />
            <a href="../containers/home.jsx"><p>Creditos</p></a>           
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
