import React from "react";
import "./acerca.scss";
import AboutItem from "../components/aboutItem";

const perfilEgresado = props => {
  const info = [
    {
      imageUrl: "./entrevistas.jpg",
      desc:
      <p align="justify">La carrera de Administración de Redes y Comunicaciones es una profesión muy solicitada en todos los rubros de nuestro mercado, pero ante esa necesidad, el nivel de especialización y capacitación es muy exigente; es por ello, que anualmente realizamos un Comité Técnico Consultivo con representantes de empresas líderes en distintos rubros para que los miembros puedan proporcionarle a nuestros alumnos asesoría técnica y de esa manera conozcan lo que se requiere o se necesita hoy en día en nuestro país</p>,
      overlayText: "Entrevistas"
    },
    {
      imageUrl: "./experiencia.jpg",
      desc:
        "La Universidad Tecnológica de Panamá, mediante el beneficio de la Bolsa de Trabajo, provee al egresado ofertas de trabajo y pasantías",
      overlayText: "Experiencias"
    },
    {
      imageUrl: "./recomendacion.jpg",
      desc:
        "La Universidad Tecnológica de Panamá es la única universidad panameña en el QS World University Rankings, manteniéndose en el rango de 801 a 1,000 universidades. En los dos últimos años la UTP ha recibido a 320 estudiantes de Europa, América Latina y Asia y ha enviado a más de 280 estudiantes a través de los Programas de Internacionalización estudiantil que desarrolla esta institución.",
      overlayText: "Recomendaciones"
    },
  ];

  return (
    <div className="acerca-container">
      <div className="grid">
        {info.map((item, index) => {
          return (
            <AboutItem
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
