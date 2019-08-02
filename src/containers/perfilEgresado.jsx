import React from "react";
import "./perfilEgresado.scss";
import EgresadoItem from "../components/egresadoItem";

const perfilEgresado = props => {
  const info = [
    {
      imageUrl: "./entrevistas.jpg",
      desc:
        
        <p align="justify">La carrera de Licenciatura de Redes Informáticas es una profesión muy solicitada en todos los rubros de nuestro mercado, pero ante esa necesidad, el nivel de especialización y capacitación es muy exigente; es por ello, que anualmente realizamos un evento con representantes de empresas líderes en distintos rubros para que los miembros puedan proporcionarle a nuestros alumnos asesoría técnica y de esa manera conozcan lo que se requiere o se necesita hoy en día en nuestro país"</p>,

      overlayText: "Entrevistas"
    },
    {
      imageUrl: "./experiencia.jpg",
      desc:
      <p align="justify">El acceso a las nuevas tecnologías comienza a definir nuevos escenarios de aprendizaje complementados con las clases teóricas – prácticas. Desde esta definición conceptual nos encontramos con posibilidades de cambio frente al tradicional, los dispositivos grupales nos permiten un acercamiento eficaz, motivador de aperturas de trabajo en equipo, con objetivos de lograr confianza, alcanzando niveles altos de pertenencia y pertinencia como consecuencia de abrir permanentemente canales de comunicación entre los estudiantes.</p>,
      overlayText: "Experiencias"
    },
    {
      imageUrl: "./recomendacion.jpg",
      desc:
      <p align="justify">En un mercado donde cada vez hay más competencia y exigencias, las empresas comienzan a valorar de mayor forma el talento, la formación y especialización en áreas concretas, es por ello que la Universidad Tecnológica de Panamá realiza anualmente distintos eventos para todas sus carreras con representantes para exponer hacia los estudiantes las cosas que deben afianzar para entrar al mercado laboral</p>,
      overlayText: "Recomendaciones"
    }
  ];

  return (
    <div className="perfilEgresado-container">
      <div className="grid">
        {info.map((item, index) => {
          return (
            <EgresadoItem
              key={index}
              id={index}
              imageUrl={item.imageUrl}
              desc={item.desc}
              overlayText={item.overlayText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default perfilEgresado;
