import React from "react";
import "./materias.scss";
import { Link } from "react-router-dom";

const Materias = props => {
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
                  <td colSpan="9">
                    <strong>Primer Semestre</strong>
                  </td>
                </tr>
                <tr className="titles">
                  <td colSpan="3">
                    <strong>Asignatura</strong>
                  </td>
                  <td colSpan="2" className="credits">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colSpan="2" className="credits">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colSpan="2" className="credits">
                    <strong>Créditos</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Tecnología de Información y Comunicación</td>
                  <td colSpan="2" className="credits">
                    5
                  </td>
                  <td colSpan="2" className="credits">
                    5
                  </td>
                  <td colSpan="2" className="credits">
                    4
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Desarrollo Lógico y Algoritmos</td>
                  <td colSpan="2" className="credits">
                    5
                  </td>
                  <td colSpan="2" className="credits">
                    5
                  </td>
                  <td colSpan="2" className="credits">
                    4
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Fundamentos De Electricidad</td>
                  <td colSpan="2" className="credits">
                    5
                  </td>
                  <td colSpan="2" className="credits">
                    5
                  </td>
                  <td colSpan="2" className="credits">
                    4
                  </td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <tr className="semesters">
                  <td colSpan="9">
                    <strong>Segundo Semestre</strong>
                  </td>
                </tr>
                <tr className="titles">
                  <td colSpan="3">
                    <strong>Asignatura</strong>
                  </td>
                  <td colSpan="2" className="credits">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colSpan="2" className="credits">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colSpan="2" className="credits">
                    <strong>Créditos</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Programación Aplicada I</td>
                  <td colSpan="2" className="credits">
                    3
                  </td>
                  <td colSpan="2" className="credits">
                    2
                  </td>
                  <td colSpan="2" className="credits">
                    4
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Sistemas Colaborativos</td>
                  <td colSpan="2" className="credits">
                    3
                  </td>
                  <td colSpan="2" className="credits">
                    1
                  </td>
                  <td colSpan="2" className="credits">
                    3
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    Organización Y Arquitectura De Computación I
                  </td>
                  <td colSpan="2" className="credits">
                    3
                  </td>
                  <td colSpan="2" className="credits">
                    2
                  </td>
                  <td colSpan="2" className="credits">
                    4
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Circuitos Lógicos</td>
                  <td colSpan="2" className="credits">
                    3
                  </td>
                  <td colSpan="2" className="credits">
                    2
                  </td>
                  <td colSpan="2" className="credits">
                    4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mat-footer">
            <Link className="menu-link" to="/presentacion/Segundo año">
              <i className="fas fa-arrow-right" />
              <p>Segundo año</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias;
