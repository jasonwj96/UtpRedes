import React, { useState, useEffect } from "react";
import "./egresadoItem.scss";

const EgresadoItem = props => {
  const [className, setClassName] = useState("egresadoItem-container");
  const [toggleItem, setToggleItem] = useState(false);
  const images = require.context("../img/assets/", true);
  const { imageUrl, overlayText, desc } = props;

  useEffect(() => {
    if (toggleItem) setClassName("egresadoItem-container expand");
    else setClassName("egresadoItem-container");
  }, [toggleItem]);

  const toggle = () => setToggleItem(!toggleItem);

  return (
    <div className={className} onClick={toggle}>
      <div className="overlay">
        <p className="overlay-text">{overlayText}</p>
      </div>
      <img src={images(`${imageUrl}`)} alt="Alejandro Murillo" />
      <div className="info">
        <button className="close-btn" onClick={toggle}>
          <i className="fas fa-times" />
        </button>
        <img src={images(`./alejandro.jpg`)} alt="alejandro" />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default EgresadoItem;
