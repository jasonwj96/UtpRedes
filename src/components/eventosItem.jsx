import React, { useState, useEffect } from "react";
import "./eventosItem.scss";

const EventosItem = props => {
  const [className, setClassName] = useState("eventosItem-container");
  const [toggleItem, setToggleItem] = useState(false);
  const images = require.context("../img/assets/", true);
  const { imageUrl, fecha, lugar, organizadores, contacto, desc } = props;

  useEffect(() => {
    if (toggleItem) setClassName("eventosItem-container expand");
    else setClassName("eventosItem-container");
  }, [toggleItem]);

  const toggle = () => setToggleItem(!toggleItem);

  return (
    <div className={className} onClick={toggle}>
      <div className="overlay">
        <div className="overlay-text">
          <p className="overlay-desc">{desc}</p>
        </div>
        <div className="overlay-date">
          <p>{fecha}</p>
        </div>
      </div>
      <img src={images(`${imageUrl}`)} alt="" />
      <div className="info">
        <button className="close-btn" onClick={toggle}>
          <i className="fas fa-times" />
        </button>
        <p className="info-title">{desc}</p>
        <p>
          <span>Fecha:</span> {fecha}
        </p>
        <p>
          <span>Lugar:</span>
          {lugar}
        </p>
        <p>
          <span>Organizadores:</span>
          {organizadores}
        </p>
        <p>
          <span>Contacto:</span>
          {contacto}
        </p>
      </div>
    </div>
  );
};

export default EventosItem;
