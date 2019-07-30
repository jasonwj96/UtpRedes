import React from "react";
import "./eventos.scss";

const Eventos = props => {
  return (
    <div classname="titulo">
      <p>
        Los eventos a los que puedes asistir relacionados a Licenciatura en
        Redes Informaticas son:
      </p>
      <div classname="calendario" />
      <img
        src="C:\Users\pc\Documents\GitHub\UtpRedes\src\img/evento1.jpg"
        alt=""
      />
      <p>
        <strong>Fecha:</strong>
        <br />
        Lunes, Septiembre 30 hasta Octubre 3 del 2019
        <br />
        <strong>Lugar:</strong>
        <br />
        Hotel Wyndham Albrook Mall - Ciudad de Panamá
        <strong>
          Organizadores:
          <br />
        </strong>
        Universidad Tecnológica de Panamá. Universidad de Panamá. Universidad
        Autónoma de Chiriquí
        <strong>Contacto:</strong>
        www.clei2019.utp.ac.pa
        <br />
        <strong>
          Descripción:
          <br />
        </strong>
        La conferencia latinoamericana de informatica CLEI 2019, incluye 9
        simposios, 4 eventos asociados y un evento invitado.
      </p>
    </div>
  );
};
export default Eventos;
