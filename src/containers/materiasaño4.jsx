import React from "react";
import { Link } from "react-router-dom";
import "./materias.scss";

const Materias4 = props => {
  return (
    <div className="materias-container">
      <div className="mat-container">
        <div className="mat-info">
          <p className="mat-title">Licenciatura en redes</p>
          <div className="tables">
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
                <td colspan="3" width="219">Política Y Legislación Informática</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">0</td>
                <td colspan="2" width="34">3</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Seguridad Y Privacidad En Redes II</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>    
              <tr>
                <td colspan="3" width="219">Sistemas De Información</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>   
              <tr>
                <td colspan="3" width="219">Tópicos Especiales II</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">3</td>
              </tr>      
              <tr>
                <td colspan="3" width="219">Administración De Sistemas Operativos</td>
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
                <td colspan="3" width="219">Análisis Y Diseño De Redes</td>
                <td colspan="2" width="50">4</td>
                <td colspan="2" width="50">1</td>
                <td colspan="2" width="34">4</td>
              </tr>
              <tr>
                <td colspan="3" width="219">Gerencia De Proyectos Informáticos</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>    
              <tr>
                <td colspan="3" width="219">Calidad De Servicios En Redes</td>
                <td colspan="2" width="50">4</td>
                <td colspan="2" width="50">1</td>
                <td colspan="2" width="34">4</td>
              </tr>   
              <tr>
                <td colspan="3" width="219">Administración De Redes</td>
                <td colspan="2" width="50">3</td>
                <td colspan="2" width="50">2</td>
                <td colspan="2" width="34">4</td>
              </tr>                 
              </tbody>
          </table>
        </div>

          <div className="mat-footer">
            <Link className="menu-link" to="/inicio/Tercer año">
            <div className="icon">
              <i class="fas fa-arrow-left"></i>
              <p>Tercer año</p>
            </div>
          </Link>   
            <div className="icon">
              <i className="fas fa-building" />
              <p>Gran oportunidad laboral</p>
            </div>
            <div className="icon">
              <i className="fas fa-graduation-cap" />
              <p>1000+ egresados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias4;

