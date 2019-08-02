import React from "react";
import "./acerca.scss";
import AboutItem from "../components/aboutItem";

const Acerca = props => {
  const info = [
    {
      imageUrl: "./slide1.jpg",
      desc:
      <p align="justity">La Universidad Tecnológica de Panamá brinda a todos sus estudiantes las mejores instalaciones para su vida universitaria. Como por ejemplo, acceso inalámbrico a internet mediante Wi-Fi, biblioteca con amplias áreas de trabajo, áreas recreativas, gimnasio, estacionamientos para estudiantes, entre otros.</p>,
      overlayText: "Instalaciones"
    },
    {
      imageUrl: "./slide2.jpg",
      desc:
      <p align="justify">Administrar sistemas en la red de acuerdo a los criterios establecidos para garantizar la calidad de operaciones.
      Evaluar y seleccionar el hardware y software para determinar las necesidades operacionales de una red de comunicaciones de una organización.</p>,
      overlayText: "Oportunidad laboral"
    },
    {
      imageUrl: "./slide3.jpg",
      desc:
      <p align="justify">La Universidad Tecnológica de Panamá es la única universidad panameña en el QS World University Rankings, manteniéndose en el rango de 801 a 1,000 universidades. En los dos últimos años la UTP ha recibido a 320 estudiantes de Europa, América Latina y Asia y ha enviado a más de 280 estudiantes a través de los Programas de Internacionalización estudiantil que desarrolla esta institución.</p>,
      overlayText: "Reconocimiento internacional"
    },
    {
      imageUrl: "./slide4.jpg",
      desc:
      <p align="justify">La Universidad Tecnológica de Panamá cuenta con los educadores más experimentados en diversas áreas de la enseñanza, dispuestos a atender todas las necesidades que tengan sus estudiantes.</p>,
      overlayText: "Cuerpo docente"
    },
    {
      imageUrl: "./slide5.jpg",
      desc:
      <p align="justify">El graduado de la carrera de Licenciatura en Redes Informáticas estará preparado para:<br/><br/>
      <ul>
      <li>Instalar, configurar y administrar sistemas operativos en servidores, estaciones de trabajo y otros periféricos.</li><br/>
      <li>Desarrollar e implantar políticas de seguridad en las redes de computadoras.</li><br/>
      <li>Analizar y diseñar redes para aplicaciones tales como videoconferencia, televisión IP, voz sobre IP, entre otras.</li><br/>
      <li>Aplicar tecnologías móviles e inalámbricas que permitan a los usuarios interconectarse.</li><br/>
      <li>Evaluar y seleccionar el hardware y software para determinar las necesidades operacionales de una red de comunicaciones de una organización.</li><br/>
      <li>Administrar sistemas en la red de acuerdo a los criterios establecidos para garantizar la calidad de operación.</li></ul></p>,
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
