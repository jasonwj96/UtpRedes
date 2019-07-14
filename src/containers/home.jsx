import React from "react";
// import { Link } from "react-router-dom";
import "./home.scss";

const Home = props => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <iframe
          title="UTP Panama Intro"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oznPAZNJu9o"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="welcome-info">
          <p className="welcome-title">Licenciatura en redes informáticas</p>
         
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

export default Home;
