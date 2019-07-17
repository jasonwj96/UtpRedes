import React from "react";
import "./materias.scss";
import { Link } from "react-router-dom";
const Materias = props => {
  return (
    <div className="materias-container">
      <div className="mat-container">
        <div className="mat-info">
          <p className="mat-title">Licenciatura en redes</p>
          
         <table width="498">
            <tbody>
              <tr><td colspan="9" width="354"><strong>Primer Semestre</strong></td></tr>
              <tr>
                <td colspan="3" width="219"><strong>Asignatura</strong></td>
                <td colspan="2" width="50"><strong>Horas de clase</strong></td>
                <td colspan="2" width="50"><strong>Horas de lab.</strong></td>
                <td colspan="2" width="34"><strong>Créditos</strong></td>
              </tr>
              <tr>
                <td colspan="3" width="219">Tecnología de Información y Comunicación</td>
                <td colspan="2" width="50">5</td>
                <td colspan="2" width="50">5</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Desarrollo Lógico y Algoritmos</td>
                <td colspan="2" width="50">5</td>
                <td colspan="2" width="50">5</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Fundamentos De Electricidad</td>
                <td colspan="2" width="50">5</td>
                <td colspan="2" width="50">5</td>
                <td colspan="2" width="34">4</td>
                </tr>            
              </tbody>
          </table>

          <table width="498">
            <tbody>
              <tr><td colspan="9" width="354"><strong>Segundo Semestre</strong></td></tr>
              <tr>
                <td colspan="3" width="219"><strong>Asignatura</strong></td>
                <td colspan="2" width="50"><strong>Horas de clase</strong></td>
                <td colspan="2" width="50"><strong>Horas de lab.</strong></td>
                <td colspan="2" width="34"><strong>Créditos</strong></td>
              </tr>
              <tr>
                <td colspan="3" width="219">Programación Aplicada I</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Sistemas Colaborativos</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">1</td>
                <td colspan="2" width="34">3</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Organización Y Arquitectura De Computación I</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Circuitos Lógicos</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>             
              </tbody>
          </table>

          <div className="mat-footer">
            <div className="icon">
              <i className="fas fa-clock" />
              <p>
                Duración: <br /> 4 años
              </p>
            </div>
            <div className="icon">
              <i className="fas fa-building" />
              <p>Gran oportunidad laboral</p>
            </div>
            
            <div className="icon">
            <Link className="menu-link" to="/inicio/Segundo año">
              <i class="fas fa-arrow-right"></i>
              <p>Segundo Año</p>
            </Link>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias;

