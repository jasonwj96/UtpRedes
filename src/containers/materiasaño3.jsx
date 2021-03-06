import React from "react";
import { Link } from "react-router-dom";
import "./materias.scss";

const Materias3 = props => {
  return (
    <div className="materias-container">
      <div className="mat-container">
        <div className="mat-info">
          <p className="mat-title">
            Materias de la Licenciatura en Redes Informáticas
          </p>
          <div className="tables">
            <table width="498">
              <tbody>
                <tr className="semesters">
                  <td colspan="9" width="354">
                    <strong>Primer Semestre</strong>
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
                    Redes De Área Amplia
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
                    Arquitectura De Protocolos
                  </td>
                  <td colspan="2" width="50">
                    1
                  </td>
                  <td colspan="2" width="50">
                    4
                  </td>
                  <td colspan="2" width="34">
                    3
                  </td>
                </tr>
                <tr>
                  <td colspan="3" width="219">
                    Auditoría De Redes
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
                    Sistemas Operativos III
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
                    Redes Para Multimedios
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
                    Tecnología De Base De Datos
                  </td>
                  <td colspan="2" width="50">
                    1
                  </td>
                  <td colspan="2" width="50">
                    4
                  </td>
                  <td colspan="2" width="34">
                    3
                  </td>
                </tr>
                <tr>
                  <td colspan="3" width="219">
                    Redes Móviles E Inalámbricas
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
                    Seguridad Y Privacidad En Redes I
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
                    Tópicos Especiales I
                  </td>
                  <td colspan="2" width="50">
                    2
                  </td>
                  <td colspan="2" width="50">
                    2
                  </td>
                  <td colspan="2" width="34">
                    3
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mat-footer">
            <Link className="menu-link" to="/presentacion/Segundo año">
              <div className="icon">
                <i class="fas fa-arrow-left" />
                <p>Segundo año</p>
              </div>
            </Link>

            <Link className="menu-link" to="/presentacion/Cuarto año">
              <div className="icon">
                <i class="fas fa-arrow-right" />
                <p>Cuarto Año</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias3;
