import React from "react";
import "./acerca.scss";
import AboutItem from "../components/aboutItem";

const Acerca = () => {
  return (
    <div className="acerca-container">
      <p className="title">Puede pulsar en cualquier elemento para saber más</p>
      <div className="grid">
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
      </div>
    </div>
  );
};

export default Acerca;
