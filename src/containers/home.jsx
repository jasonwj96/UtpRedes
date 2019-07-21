import React from "react";
// import { Link } from "react-router-dom";
import "./home.scss";
import WelcomePanel from "../components/welcomePanel";

const Home = props => {
  return (
    <div className="home-container">
      <iframe
        title="UTP Panama Intro"
        src="https://www.youtube.com/embed/oznPAZNJu9o"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <WelcomePanel />
    </div>
  );
};

export default Home;
