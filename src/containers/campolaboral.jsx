import React, { useEffect, useState } from "react";
import "./campolaboral.scss";
const CampoLaboral = props => {
  const [toggleItem, setToggleItem] = useState(false);
  const [className, setClassName] = useState("accordionItem");

  useEffect(() => {
    toggleItem
      ? setClassName("accordionItem expand")
      : setClassName("accordionItem");
  }, [toggleItem]);

  return (
    <div className="campolaboral-container">
      <div className="accordion">
        <div className={className}>
          <div className="header" onClick={() => setToggleItem(!toggleItem)}>
            <p className="title">Administrador de redes informáticas</p>
            <div className="toggle">
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="desc">
            <p>
              Los administradores de redes informáticas desarrollan, soportan y
              mantienen a las redes informáticas de las empresas. Una red es un
              grupo de ordenadores conectados entre sí, por lo general, a través
              de un ordenador potente llamado servidor central.
            </p>
          </div>
          <div className="salario">Salario aproximado: $1500.00</div>
        </div>
        {/* <div className="accordionItem">
          <div className="header">
            <p className="title">Ingeniero de telecomunicaciones</p>
            <div className="toggle">
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="desc">
            <p>
              Los ingenieros de telecomunicaciones son expertos en tecnología de
              las comunicaciones. Se encargan del diseño, investigación y
              desarrollo de sistemas de comunicaciones por cable y satélite,
              teléfonos móviles, ondas de radio, Internet y correo electrónico.
            </p>
          </div>
          <div className="salario">Salario aproximado: $1500.00</div>
        </div> */}
        {/*
      <div id="Item 3">
        <h1>Técnico informático de servicios de soporte</h1>

        <p>
          Los técnicos informáticos de servicios de soporte trabajan en
          colaboración con ingenieros informáticos y ayudan a los clientes o
          compañeros de trabajo a hacer funciona equipamientos informáticos.
          <p>Salario aproximado: $ 1200.00</p>
        </p>
      </div>
      <div id="Item 4">
        <h1>Especialista en ciberseguridad</h1>

        <p>
          El especialista en ciberseguridad es el encargado de la privacidad y
          protección de datos de las empresas y las organizaciones para hacer
          frente a los ciberataques.<p>Salario aproximado: $2500.00</p>
        </p>
      </div>
      <div id="Item 5">
        <h1>Ingeniero informático de hardware</h1>
        <p>
          Los ingenieros informáticos de hardware trabajan en el diseño,
          desarrollo y fabricación de equipamientos informáticos. Se
          especializan en áreas tales como las comunicaciones, los sistemas de
          control, la robótica, los microprocesadores o los dispositivos
          semiconductores. <p>Salario aproximado: $2000.00</p>
        </p>
      </div>
      <div id="Item 6">
        <h1>Montador de ordenadores</h1>

        <p>
          Los montadores de ordenadores construyen ordenadores a partir de sus
          piezas, tales como tableros de circuitos, unidades de disco, cables e
          interruptores. Cuando ya han ensamblado el ordenador, ponen a prueba
          el equipo y detectan posibles errores.
          <p>Salario aproximado: $2500.00</p>
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default CampoLaboral;
