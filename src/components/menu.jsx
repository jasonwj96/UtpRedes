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
            <a href="../containers/home.jsx"></a>
            <p>Inicio</p>
          </div>
          <div className="menu-link">
            <i class="fas fa-university"></i>
            <a href="../containers/home.jsx"></a>
            <p>Acerca de la carrera</p>
          </div>
          <div className="menu-link">
            <i className="fas fa-book" />
            <a href="../containers/home.jsx"></a>
            <p>Materias</p>
          </div>
          <div className="menu-link">
            <i className="far fa-calendar-alt" />
            <a href="../containers/home.jsx"></a>
            <p>Eventos</p>
          </div>
          <div className="menu-link">
            <i className="fas fa-user-tie" />
            <a href="../containers/home.jsx"></a>
            <p>Perfil de egresado</p>
          </div>
          <div className="menu-link">
          <i class="fas fa-briefcase"></i>
            <a href="../containers/home.jsx"></a>
            <p>Campo laboral</p>
          </div>
          <div className="menu-link">
          <i class="fas fa-question-circle"></i>
            <a href="../containers/home.jsx"></a>
            <p>Ayuda</p>
          </div>
           <div className="menu-link">
           <i class="fas fa-users"></i>
            <a href="../containers/home.jsx"></a>
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
