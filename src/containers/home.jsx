import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = props => {
  return (
    <div className="home-container">
      <Link to="/home">Home</Link>
      <Link to="/home/eventos">Eventos</Link>
      <Link to="/home/eventos/2019">Eventos/2019</Link>
      <Link to="/home/eventos/2019/julio">Eventos/2019/julio</Link>
      <Link to="/home/eventos/2019/julio/feria de empleo">
        Eventos/2019/julio/feria de empleo
      </Link>
    </div>
  );
};

export default Home;
