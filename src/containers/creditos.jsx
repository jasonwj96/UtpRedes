import React from "react";
import JasonA from "../img/assets/JasonA.jpg";
import JasonW from "../img/assets/JasonW.jpg";
import JosephM from "../img/assets/JosephM.jpg";
import IrvingD from "../img/assets/IrvingD.jpg";
import "./creditos.scss";

const creditos = props => {
  return (
    <div className="creditos-container">
      <div className="creditosItem">
        <img src={JasonA} alt="Jason" />
        <div className="creditosInfo">
          <p className="autorName">Jason Arrocha</p>
          <ul>
            <li>StoryBoards</li>
            <li>Documento</li>
            <li>Diagramas</li>
            <li>Pantallas</li>
            <li>Eventos</li>
            <li>Perfil Egresados</li>
            <li>Créditos</li>
          </ul>
        </div>
      </div>

      <div className="creditosItem">
        <img src={JasonW} alt="Jason" />
        <div className="creditosInfo">
          <p className="autorName">Jason Wedderburn</p>
          <ul>
            <li>StoryBoards</li>
            <li>Documento</li>
            <li>Soporte frontend</li>
            <li>Presentación</li>
            <li>Acerca de la carrera</li>
          </ul>
        </div>
      </div>

      <div className="creditosItem">
        <img src={JosephM} alt="Jason" />
        <div className="creditosInfo">
          <p className="autorName">Joseph Miranda</p>
          <ul>
            <li>StoryBoards</li>
            <li>Documento</li>
            <li>Diagramas</li>
            <li>Materias</li>
            <li>Ayuda</li>
          </ul>
        </div>
      </div>

      <div className="creditosItem">
        <img src={IrvingD} alt="Jason" />
        <div className="creditosInfo">
          <p className="autorName">Irving Domínguez</p>
          <ul>
            <li>Lider del equipo</li>
            <li>Storyboards</li>
            <li>Documentos</li>
            <li>Diagramas</li>
            <li>Campo laboral</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default creditos;
