import "./navbar.scss";
import React from "react";
// import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <Link className="menu-link" to="/presentacion">
        <p>Presentación</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Acerca de la carrera">
        <p>Acerca de la carrera</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Primer año">
        <p>Materias</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Eventos">
        <p>Eventos</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Perfil de egresado">
        <p>Perfil de egresado</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Campo laboral">
        <p>Campo laboral</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Ayuda">
        <p>Ayuda</p>
      </Link>

      <Link className="menu-link" to="/presentacion/Creditos">
        <p>Créditos</p>
      </Link>
    </div>
  );
};

export default Navbar;
