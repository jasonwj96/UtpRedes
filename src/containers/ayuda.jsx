import React from "react";
import "./ayuda.scss";
import { Link } from "react-router-dom";
import teclado from "../img/assets/teclado.jpeg";
import AyudaItem from "../components/help_c.jsx";

const Ayuda = () => {
  const objetivos = [
    {
      title: "¿Cómo Utilizar La Página De Presentación De La Carrera?",
      desc:
        "Contiene un video de presentación que les da la bienvenida a los estudiantes que están interesado en estudiar en la Universidad Tecnológica de Panamá.",
      
    },
    {
      title: "¿Qué Contiene Acerca De La Carrera?",
      desc:
        "Acerca de la carrera describe mediante imágenes desplazable las principales ventajas que te ofrece el estudiar en esta universidad",
     
    },
    {
      title: "¿Cuáles Son Las Materias Que Contiene La Carrera?",
      desc:
        " Los técnicos informáticos de servicios de soporte trabajan en colaboración con ingenieros informáticos y ayudan a los clientes o compañeros de trabajo a hacer funciona equipamientos informáticos.",
     
    },
    {
      title: "¿Qué Muestra La Página De Evento?",
      desc:
        "El especialista en ciberseguridad es el encargado de la privacidad y protección de datos de las empresas y las organizaciones para hacer frente a los ciberataques",
     
    },
    {
      title: "¿Qué Contiene La Página De Perfil De Egresado?",
      desc:
        "Los ingenieros informáticos de hardware trabajan en el diseño, desarrollo y fabricación de equipamientos informáticos. Se especializan en áreas tales como las comunicaciones, los sistemas de control, la robótica, los microprocesadores o los dispositivos semiconductores. ",
      
    },
    {
      title: "¿Qué Contiene La Página De Campo Laboral?",
      desc:
        "Campo laboral muestra diferentes tipos de empleo que se pueden obtener al terminar la carrera universitaria",
     
    },
    {
      title: "¿Qué Contiene La Página De Ayuda?",
      desc:
        "La página de Ayuda muestra las principales funcionalidades de la aplicación",
    
    },
    {
      title: "¿Qué Contiene La Página De Créditos?",
      desc:
        "Contiene la Información de los desarrolladores de la aplicación",
    
    }
  ];
  return (
    <div className="ayuda-container">
   
      <div className="accordion">
        {objetivos.map((item, index) => {
          return (
            <AyudaItem
              key={index}
              title={item.title}
              desc={item.desc}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ayuda;
