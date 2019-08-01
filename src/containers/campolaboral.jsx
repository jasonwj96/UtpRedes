import React from "react";
import "./campolaboral.scss";
import EmpleoItem from "../components/empleoItem";
const CampoLaboral = props => {
  const empleos = [
    {
      title: "Administrador de redes informáticas",
      desc:
        "Los administradores de redes informáticas desarrollan, soportan y mantienen a las redes informáticas de las empresas. Una red es un grupo de ordenadores conectados entre sí, por lo general, a través de un ordenador potente llamado servidor central.",
      salario: "1500.00"
    },
    {
      title: "Ingeniero de telecomunicaciones",
      desc:
        "Los ingenieros de telecomunicaciones son expertos en tecnología de las comunicaciones. Se encargan del diseño, investigación y desarrollo de sistemas de comunicaciones por cable y satélite, teléfonos móviles, ondas de radio, Internet y correo electrónico.",
      salario: "1500.00"
    },
    {
      title: "Técnico informático de servicios de soporte",
      desc:
        " Los técnicos informáticos de servicios de soporte trabajan en colaboración con ingenieros informáticos y ayudan a los clientes o compañeros de trabajo a hacer funciona equipamientos informáticos.",
      salario: "1200.00"
    },
    {
      title: "Especialista en ciberseguridad",
      desc:
        "El especialista en ciberseguridad es el encargado de la privacidad y protección de datos de las empresas y las organizaciones para hacer frente a los ciberataques",
      salario: "2500.00"
    },
    {
      title: "Ingeniero informático de hardware",
      desc:
        "Los ingenieros informáticos de hardware trabajan en el diseño, desarrollo y fabricación de equipamientos informáticos. Se especializan en áreas tales como las comunicaciones, los sistemas de control, la robótica, los microprocesadores o los dispositivos semiconductores. ",
      salario: "2000.00"
    },
    {
      title: "Montador de ordenadores",
      desc:
        "Los montadores de ordenadores construyen ordenadores a partir de sus piezas, tales como tableros de circuitos, unidades de disco, cables e interruptores. Cuando ya han ensamblado el ordenador, ponen a prueba el equipo y detectan posibles errores.",
      salario: "2500.00"
    }
  ];

  return (
    <div className="campolaboral-container">
      <div className="accordion">
        {empleos.map((item, index) => {
          return (
            <EmpleoItem
              key={index}
              title={item.title}
              desc={item.desc}
              salario={item.salario}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CampoLaboral;
