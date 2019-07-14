import React from "react";
// import { Link } from "react-router-dom";
import "./home.scss";

const Home = props => {
  return (
    <div className="home-container">
      {/* <Link to="/inicio">Inicio</Link>
      <Link to="/inicio/eventos">Inicio/Eventos</Link>
      <Link to="/inicio/eventos/2019">Inicio/Eventos/2019</Link>
      <Link to="/inicio/eventos/2019/julio">Inicio/Eventos/2019/julio</Link>
      <Link to="/inicio/eventos/2019/julio/feria de empleo">
        Inicio/Eventos/2019/julio/feria de empleo
      </Link> */}
      <iframe
        title="UTP Panama Intro"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oznPAZNJu9o"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Home;
