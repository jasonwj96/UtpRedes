import React, { useState, useEffect } from "react";
import "./menu.scss";
import logo from "../img/logo.jpg";
import { Link} from "react-router-dom";

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
            <Link to="./Inicio">Inicio</Link>
          </div>
          <div className="menu-link">
          <i class="fas fa-university"></i>
            <Link to="./home.jsx"><p>Acerca de la carrera</p></Link>        
          </div>
          <div className="menu-link">
          <i class="fas fa-book"></i>
            <Link to="./Materias"><p>Materias</p></Link>        
          </div>
          <div className="menu-link">
            <i className="far fa-calendar-alt" />
            <Link to="./home.jsx"><p>Eventos</p></Link>        
          </div>
          <div className="menu-link">
            <i className="fas fa-user-tie" />
            <Link to="./home.jsx"><p>Perfil de egresado</p></Link>         
          </div>
          <div className="menu-link">
            <i className="fas fa-briefcase" />
            <Link to="./home.jsx"><p>Campo laboral</p></Link>            
          </div>
          <div className="menu-link">
            <i className="fas fa-question-circle" />
            <Link to="./home.jsx"><p>Ayuda</p></Link>            
          </div>
          <div className="menu-link">
            <i className="fas fa-users" />
            <Link to="./home.jsx"><p>Creditos</p></Link>           
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
