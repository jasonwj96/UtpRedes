import React from "react";
import "./materias.scss";
import { Link } from "react-router-dom";

const Materias2 = props => {
  return (
    <div className="materias-container">
      <div className="mat-container">
        <div className="mat-info">
          <p className="mat-title">
            Materias de la Licenciatura en Redes Informáticas
          </p>
          <div className="tables">
            <table>
              <tbody>
                <tr className="semesters">
                  <td colspan="9">
                    <strong>Primer Semestre</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Asignatura</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colspan="2">
                    <strong>Créditos</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Estructura De Datos</td>
                  <td colspan="2">3</td>
                  <td colspan="2">2</td>
                  <td colspan="2">4</td>
                </tr>
                <tr>
                  <td colspan="3">Programación Aplicada II</td>
                  <td colspan="2">3</td>
                  <td colspan="2">2</td>
                  <td colspan="2">4</td>
                </tr>
                <tr>
                  <td colspan="3">Sistemas Operativos I</td>
                  <td colspan="2">3</td>
                  <td colspan="2">2</td>
                  <td colspan="2">4</td>
                </tr>
                <tr>
                  <td colspan="3">Comunicación De Datos</td>
                  <td colspan="2">3</td>
                  <td colspan="2">2</td>
                  <td colspan="2">4</td>
                </tr>
                <tr>
                  <td colspan="3">
                    Organización Y Arquitectura De Computación II
                  </td>
                  <td colspan="2">3</td>
                  <td colspan="2">2</td>
                  <td colspan="2">4</td>
                </tr>
              </tbody>
            </table>

            <table width="498">
              <tbody>
                <tr className="semesters">
                  <td colspan="9" width="354">
                    <strong>Segundo Semestre</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" width="219">
                    <strong>Asignatura</strong>
                  </td>
                  <td colspan="2" width="50">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colspan="2" width="50">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colspan="2" width="34">
                    <strong>Créditos</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" width="219">
                    Redes De Área Local
                  </td>
                  <td colspan="2" width="50">
                    3
                  </td>
                  <td colspan="2" width="50">
                    2
                  </td>
                  <td colspan="2" width="34">
                    4
                  </td>
                </tr>
                <tr>
                  <td colspan="3" width="219">
                    Sistemas Operativos II
                  </td>
                  <td colspan="2" width="50">
                    3
                  </td>
                  <td colspan="2" width="50">
                    2
                  </td>
                  <td colspan="2" width="34">
                    4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mat-footer">
            <Link className="menu-link" to="/presentacion/Primer año">
              <div className="icon">
                <i class="fas fa-arrow-left" />
                <p>Primer año</p>
              </div>
            </Link>

            <Link className="menu-link" to="/presentacion/Tercer año">
              <div className="icon">
                <i class="fas fa-arrow-right" />
                <p>Tercer Año</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias2;
