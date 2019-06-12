import "./navbar.scss";
import React from "react";
import logo from "../img/logo.jpg";

function Navbar() {
  return (
    <div id="navbar-container">
      <a className="link" href="#">
        Oferta académica
      </a>
      <a className="link" href="#">
        Eventos
      </a>
      <img id="logo" src={logo} alt="logo" />
      <a className="link" href="#">
        Campo laboral
      </a>
      <a className="link" href="#">
        Materias de redes
      </a>
    </div>
  );
}

export default Navbar;
