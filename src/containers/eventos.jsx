import React from "react";
import "./eventos.scss";
import { Link } from "react-router-dom";
import evento1 from "../img/assets/evento1.jpeg";

const Eventos = props => {
  return (
    <div className="materias-container">
      <div className="mat-container">
        <div className="mat-info">
          <table>
            <tr>
              <td />
              <center>
                <h3>
                  <td>DESCRIPCIÓN</td>
                </h3>
              </center>
            </tr>
            <tr>
              <td>
                <img src={evento1} alt="" />
              </td>
              <td>
                <p>
                  <strong>Fecha:</strong>
                  <br />
                  Lunes, Septiembre 30 hasta Octubre 3 del 2019
                  <br />
                  <strong>Lugar:</strong>
                  <br />
                  Hotel Wyndham Albrook Mall - Ciudad de Panamá
                  <br />
                  <strong>
                    Organizadores:
                    <br />
                  </strong>
                  Universidad Tecnológica de Panamá. Universidad de Panamá.
                  Universidad Autónoma de Chiriquí
                  <br />
                  <strong>Contacto:</strong>
                  <br />
                  www.clei2019.utp.ac.pa
                  <br />
                  <strong>
                    Descripción:
                    <br />
                  </strong>
                  La conferencia latinoamericana de informatica CLEI 2019,
                  incluye 9 simposios, 4 eventos asociados y un evento invitado.
                </p>
              </td>
            </tr>
          </table>
          <div className="mat-footer">
            <Link className="menu-link" to="/inicio/Segundo año">
              <i className="fas fa-arrow-right" />
              <p>Siguiente Evento</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eventos;
