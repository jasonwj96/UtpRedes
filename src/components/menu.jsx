import React, { useState, useEffect } from "react";
import "./menu.scss";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

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
          <Link className="menu-link selected" to="/inicio">
            <i className="fas fa-home" />
            <p>Inicio</p>
          </Link>

          <Link className="menu-link" to="/inicio/Acerca de la carrera">
            <i className="fas fa-university" />
            <p>Acerca de la carrera</p>
          </Link>

          <Link className="menu-link" to="/inicio/Primer año">
            <i className="fas fa-book" />
            <p>Materias</p>
          </Link>

          <Link className="menu-link" to="/inicio/Eventos">
            <i className="far fa-calendar-alt" />
            <p>Eventos</p>
          </Link>

          <Link className="menu-link" to="/inicio/Perfil de egresado">
            <i className="fas fa-user-tie" />
            <p>Perfil de egresado</p>
          </Link>

          <Link className="menu-link" to="/inicio/Campo laboral">
            <i className="fas fa-briefcase" />
            <p>Campo laboral</p>
          </Link>

          <Link className="menu-link" to="/inicio/Ayuda">
            <i className="fas fa-question-circle" />
            <p>Ayuda</p>
          </Link>

          <Link className="menu-link" to="/inicio/Creditos">
            <i className="fas fa-users" />
            <p>Creditos</p>
          </Link>
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
