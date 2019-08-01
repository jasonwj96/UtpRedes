import React from "react";
import "./acerca.scss";
import AboutItem from "../components/aboutItem";

const Acerca = props => {
  const info = [
    {
      imageUrl: "./slide1.jpg",
      desc:
        "La Universidad Tecnológica de Panamá brinda a todos sus estudiantes las mejores instalaciones para su vida universitaria. Como por ejemplo, acceso inalámbrico a internet mediante Wi-Fi, biblioteca con amplias áreas de trabajo, áreas recreativas, gimnasio, estacionamientos para estudiantes, entre otros.",
      overlayText: "Instalaciones"
    },
    {
      imageUrl: "./slide2.jpg",
      desc: "La Universidad Tecnológica de Panamá, mediante el beneficio de la Bolsa de Trabajo, provee al egresado ofertas de trabajo y pasantías",
      overlayText: "Oportunidad laboral"
    },
    {
      imageUrl: "./slide3.jpg",
      desc:
        "  La Universidad Tecnológica de Panamá es la única universidad panameña en el QS World University Rankings, manteniéndose en el rango de 801 a 1,000 universidades. En los dos últimos años la UTP ha recibido a 320 estudiantes de Europa, América Latina y Asia y ha enviado a más de 280 estudiantes a través de los Programas de Internacionalización estudiantil que desarrolla esta institución.",
      overlayText: "Reconocimiento internacional"
    },
    {
      imageUrl: "./slide4.jpg",
      desc:
        "La Universidad Tecnológica de Panamá cuenta con los educadores más experimentados.",
      overlayText: "Cuerpo docente"
    },
    {
      imageUrl: "./slide5.jpg",
      desc:
        " La Universidad Tecnológica de Panamá coloca a disposición de sus graduados, la Unidad de Egresados, que trabaja en programas de servicios para promover el acercamiento de los exalumnos a su Alma Máter, motivando su pertenencia y permanencia. Entre los beneficios que se ofrecen a los graduados están la bolsa de trabajo, envío de información institucional sobre diferentes actividades programadas en las dependencias académicas, programas de educación continua, artículos nacionales e internacionales referentes a su carrera, entre otros.",
      overlayText: "Egresados"
    }
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

export default Acerca;
