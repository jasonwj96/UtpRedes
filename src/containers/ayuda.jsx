import React from "react";
import "./ayuda.scss";

import AyudaItem from "../components/help_c.jsx";

const Ayuda = () => {
  const objetivos = [
    {
      title: "¿Cómo Utilizar La Página De Presentación De La Carrera?",
      desc:
        "Contiene un video de presentación que les da la bienvenida a los estudiantes que están interesado en estudiar en la Universidad Tecnológica de Panamá."
    },
    {
      title: "¿Qué Contiene Acerca De La Carrera?",
      desc:
        "Acerca de la carrera describe mediante imágenes desplazable las principales ventajas que te ofrece el estudiar en esta universidad"
    },
    {
      title: "¿Cuáles Son Las Materias Que Contiene La Carrera?",
      desc:
        "la página de materia contiene un listado de las materias que se dan la carrera clasificado por año y semestre que le corresponde puede desplazarse por cada año mediante las flechas que se muestran en la parte de debajo de la pantalla"
    },
    {
      title: "¿Qué Muestra La Página De Evento?",
      desc:
        "Esta página muestra los principales eventos que se vienen aproximando"
    },
    {
      title: "¿Qué Contiene La Página De Perfil De Egresado?",
      desc: ""
    },
    {
      title: "¿Qué Contiene La Página De Campo Laboral?",
      desc:
        "Campo laboral muestra diferentes tipos de empleo que se pueden obtener al terminar la carrera universitaria"
    },
    {
      title: "¿Qué Contiene La Página De Ayuda?",
      desc:
        "La página de Ayuda muestra las principales funcionalidades de la aplicación"
    },
    {
      title: "¿Qué Contiene La Página De Créditos?",
      desc: "Contiene la Información de los desarrolladores de la aplicación"
    }
  ];
  return (
    <div className="ayuda-container">
      <div className="accordion">
        {objetivos.map((item, index) => {
          return <AyudaItem key={index} title={item.title} desc={item.desc} />;
        })}
      </div>
    </div>
  );
};

export default Ayuda;
