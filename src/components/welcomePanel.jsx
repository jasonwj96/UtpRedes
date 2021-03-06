import React from "react";
import "./welcomePanel.scss";
import { Link } from "react-router-dom";

const WelcomePanel = () => {
  return (
    <div className="welcomePanel-container">
      <div className="welcome-info">
        <p className="welcome-title">Licenciatura en redes informáticas</p>
        <ul className="welcome-list">
          <li>
            <i className="fas fa-circle" />
            <p>Instalaciones de alta tecnología</p>
          </li>
          <li>
            <i className="fas fa-circle" />
            <p>Docentes altamente capacitados</p>
          </li>
          <li>
            <i className="fas fa-circle" />
            <p>Grandes oportunidades laborales para egresados</p>
          </li>
          <li>
            <i className="fas fa-circle" />
            <p>Diploma con reconocimiento internacional.</p>
          </li>
          <li>
            <i className="fas fa-circle" />
            <p>Cafetería, librería, centros recreativos, y más.</p>
          </li>
        </ul>
        <Link to="/presentacion/Acerca de la carrera">
          <button className="home-btn">Saber más</button>
        </Link>

        <div className="welcome-footer">
          <div className="icon">
            <i className="fas fa-clock" />
            <p>
              Duración: <br /> 4 años
            </p>
          </div>
          <div className="icon">
            <i className="fas fa-building" />
            <p>Oportunidad laboral</p>
          </div>
          <div className="icon">
            <i className="fas fa-graduation-cap" />
            <p>1000+ egresados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePanel;
