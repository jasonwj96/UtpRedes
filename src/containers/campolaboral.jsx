import React from "react";
import "./campolaboral.scss";
import { Link } from "react-router-dom";
const CampoLaboral = props => {
  return (
    <main id="Accordion">
      <section id ="Item 1">
        <a href="#Item 1"><h1>Administrador de redes informáticas</h1></a>
        <p>
        Los administradores de redes informáticas desarrollan, soportan y mantienen a las redes informáticas 
        de las empresas. Una red es un grupo de ordenadores conectados entre sí, por lo general, a través de un 
        ordenador potente llamado servidor central.<p>Salario aproximado: $1500.00</p>
         </p>
      </section>
      <section id ="Item 2">
        <a href="#Item 2"><h1>Ingeniero de telecomunicaciones</h1></a>
        <p>
       Los ingenieros de telecomunicaciones son expertos en tecnología de las comunicaciones. Se encargan del diseño, 
         investigación y desarrollo de sistemas de comunicaciones por cable y satélite, teléfonos móviles, 
         ondas de radio, Internet y correo electrónico.<p>Salario aproximado: $1500.00 </p>
         </p>
      </section>
      <section id ="Item 3">
        <a href="#Item 3"><h1>Técnico informático de servicios de soporte</h1></a>
        <p>
        Los técnicos informáticos de servicios de soporte trabajan en colaboración con ingenieros informáticos y ayudan a 
        los clientes o compañeros de trabajo a hacer funciona equipamientos informáticos. 
        <p>Salario aproximado: $ 1200.00</p>
         </p>
      </section>
      <section id ="Item 4">
        <a href="#Item 4"><h1>Especialista en ciberseguridad</h1></a>
        <p>
        El especialista en ciberseguridad es el encargado de la privacidad y protección de datos de las empresas y las 
        organizaciones para hacer frente a los ciberataques.<p>Salario aproximado: $2500.00</p>
         </p>
      </section>
      <section id ="Item 5">
        <a href="#Item 5"><h1>Ingeniero informático de hardware</h1></a>
        <p>
        Los ingenieros informáticos de hardware trabajan en el diseño, desarrollo y fabricación de equipamientos 
        informáticos. Se especializan en áreas tales como las comunicaciones, los sistemas de control, la robótica,
         los microprocesadores o los dispositivos semiconductores. <p>Salario aproximado: $2000.00</p>
         </p>
      </section>
      <section id ="Item 6">
        <a href="#Item 6"><h1>Montador de ordenadores</h1></a>
        <p>
        Los montadores de ordenadores construyen ordenadores a partir de sus piezas, tales 
        como tableros de circuitos, unidades de disco, cables e interruptores. Cuando ya han 
        ensamblado el ordenador, ponen a prueba el equipo y detectan posibles errores.<p>Salario aproximado: $2500.00</p>
         </p>
      </section>
    </main>
  );
};

export default CampoLaboral;
