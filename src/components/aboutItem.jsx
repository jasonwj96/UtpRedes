import React, { useState } from "react";
import "./aboutItem.scss";

const AboutItem = props => {
  const [className, setClassName] = useState("aboutItem-container");
  const [toggleItem, setToggleItem] = useState(false);
  const images = require.context("../img/assets/", true);
  const { imageUrl, overlayText, desc } = props;

  const toggle = () => {
    if (toggleItem) setClassName("aboutItem-container expand");
    else setClassName("aboutItem-container");

    setToggleItem(!toggleItem);
  };

  const overlayIcon = () => {
    if (overlayText === "Instalaciones") {
      return <i className="fas fa-university" />;
    } else if (overlayText === "Oportunidad laboral") {
      return <i className="fas fa-briefcase" />;
    } else if (overlayText === "Reconocimiento internacional") {
      return <i className="fas fa-globe-americas" />;
    } else if (overlayText === "Cuerpo docente") {
      return <i className="fas fa-chalkboard-teacher" />;
    } else if (overlayText === "Egresados") {
      return <i className="fas fa-user-graduate" />;
    }
  };

  return (
    <div className={className} onClick={toggle}>
      <div className="overlay">
        {overlayIcon()}
        <p className="overlay-text">{overlayText}</p>
      </div>
      <img src={images(`${imageUrl}`)} alt="" />
      <div className="info">
        <button className="close-btn" onClick={toggle}>
          <i className="fas fa-times" />
        </button>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AboutItem;
