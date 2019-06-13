import "./navbar.scss";
import React from "react";
import logo from "../img/logo.jpg";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <a className="link" href="/home">
        Oferta académica
      </a>
      <a className="link" href="/home">
        Eventos
      </a>
      <img id="logo" src={logo} alt="logo" />
      <a className="link" href="/home">
        Campo laboral
      </a>
      <a className="link" href="/home">
        Materias de redes
      </a>
    </div>
  );
}

export default Navbar;
