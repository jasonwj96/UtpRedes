import React from "react";
import "./creditos.scss";
import JasonA from "../img/assets/JasonA.jpg";
import JasonW from "../img/assets/JasonW.jpg";
import JosephM from "../img/assets/JosephM.jpg";
import IrvingD from "../img/assets/IrvingD.jpg";

const creditos = props => {
  return (
    <div classname="container">
      <div classname="div-img">
        <img classname="img" src={JasonA} alt="" />
        <div classname="text">
          Jason, Arrocha
          <br />
          Encargado de Storyboards,Documento,Diagramas, y
          Pantallas:Eventos,Perfil egresados y créditos.
        </div>
        <img classname="img" src={JasonW} alt="" />
        <div classname="text">
          Jason, Arrocha
          <br />
          Encargado de Storyboards,Documento y Pantallas:Presentación,Acerca.
          <br />
          Brindo apoyo sobre la página
        </div>
        <img classname="img" src={JosephM} alt="" />
        <div classname="text">
          Jason, Arrocha
          <br />
          Encargado de Storyboards,Documento,Diagramas, y Pantallas:Materias,
          Ayuda.
        </div>
        <img classname="img" src={IrvingD} alt="" />
        <div classname="text">
          Jason, Arrocha
          <br />
          Encargado de Storyboards,Documento,Diagramas, y Pantallas:Campo
          laboral.
          <br />
          Encargado de dar todas las directrices del proyecto
        </div>
      </div>
    </div>
  );
};

export default creditos;
