import React, { useState } from "react";
import "./aboutItem.scss";

const AboutItem = props => {
  const [className, setClassName] = useState("aboutItem-container");
  const [toggleItem, setToggleItem] = useState(false);
  const images = require.context("../img/assets/", true);

  const toggle = () => {
    if (toggleItem) setClassName("aboutItem-container expand");
    else setClassName("aboutItem-container");

    setToggleItem(!toggleItem);
  };

  const { imageUrl, overlayText, desc } = props;

  return (
    <div className={className} onClick={toggle}>
      <div className="overlay">
        <i className="fas fa-university" />
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
