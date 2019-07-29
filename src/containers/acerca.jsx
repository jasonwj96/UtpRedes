import React from "react";
import "./acerca.scss";
import AboutItem from "../components/aboutItem";

const Acerca = () => {
  return (
    <div className="acerca-container">
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
