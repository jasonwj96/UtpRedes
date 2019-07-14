import React from "react";
// import { Link } from "react-router-dom";
import "./home.scss";
// igual no me aparece
const Materias = props => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <div className="welcome-info">
          <p className="welcome-title">Licenciatura en redes</p>
          <div className="welcome-footer">
            <div className="icon">
              <i className="fas fa-clock" />
              <p>
                Duración: <br /> 4 años
              </p>
            </div>
            <div className="icon">
              <i className="fas fa-building" />
              <p>Gran oportunidad laboral</p>
            </div>
            <div className="icon">
              <i className="fas fa-graduation-cap" />
              <p>1000+ egresados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias;

