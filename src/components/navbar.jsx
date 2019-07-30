import "./navbar.scss";
import React from "react";
// import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <Link className="menu-link" to="/inicio">
        <p>Inicio</p>
      </Link>

      <Link className="menu-link" to="/inicio/Acerca de la carrera">
        <p>Acerca de la carrera</p>
      </Link>

      <Link className="menu-link" to="/inicio/Primer año">
        <p>Materias</p>
      </Link>

      <Link className="menu-link" to="/inicio/eventos">
        <p>Eventos</p>
      </Link>

      <Link className="menu-link" to="/inicio/Perfil de egresado">
        <p>Perfil de egresado</p>
      </Link>

      <Link className="menu-link" to="/inicio/Campo laboral">
        <p>Campo laboral</p>
      </Link>

      <Link className="menu-link" to="/inicio/Ayuda">
        <p>Ayuda</p>
      </Link>

      <Link className="menu-link" to="/inicio/Creditos">
        <p>Créditos</p>
      </Link>
    </div>
  );
};

export default Navbar;
