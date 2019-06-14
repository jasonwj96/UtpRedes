import React from "react";
import "./menu.scss";
import logo from "../img/logo.jpg";

const Menu = () => {
  return (
    <div id="menu-container">
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
      <div id="tab">
        <button id="hamburger-btn">
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
