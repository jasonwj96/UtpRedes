import React from "react";
import "./materias.scss";
import { Link } from "react-router-dom";

const Materias2 = props => {
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
                <td colspan="3" width="219">Estructura De Datos</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Programación Aplicada II</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Sistemas Operativos I</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>         
              <tr>
                <td colspan="3" width="219">Comunicación De Datos</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>  
              <tr>
                <td colspan="3" width="219">Organización Y Arquitectura De Computación II</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
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
                <td colspan="3" width="219">Redes De Área Local</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Sistemas Operativos II</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>       
              </tbody>
          </table>

          <div className="mat-footer">
            
            <Link className="menu-link" to="/inicio/Primer año">
            <div className="icon">
              <i class="fas fa-arrow-left"></i>
              <p>Primer año</p>
            </div>
            </Link>
            
            <div className="icon">
              <i className="fas fa-building" />
              <p>Gran oportunidad laboral</p>
            </div>

            <Link className="menu-link" to="/inicio/Tercer año">
            <div className="icon">
              <i class="fas fa-arrow-right"></i>
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

