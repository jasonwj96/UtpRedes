import React from "react";
import JasonA from "../img/assets/JasonA.jpg";
import JasonW from "../img/assets/JasonW.jpg";
import JosephM from "../img/assets/JosephM.jpg";
import IrvingD from "../img/assets/IrvingD.jpg";
import "./creditos.scss";

const creditos = props => {
    return (
        <div>
            <div>
                <br/>
                <br/>
                <table cellspacing="15" cellpadding="5">
                <tr>
                <tr><td></td>
                <td></td>
                <td></td><td></td><td></td>
                </tr>
                <td><img src={JasonA} alt="" width="200" height="200"/></td>
                <div>
                    <strong>Jason, Arrocha</strong><br/>
                    Encargado de:
                    <ul>
                    <li>StoryBoards</li>
                    <li>Documento</li>
                    <li>Diagramas</li>
                    <li>Pantallas</li>
                    <ul><li>Eventos</li>
                    <li>Perfil Egresados</li>
                    <li>Créditos</li></ul>
                    </ul>
                    
                </div>
                <td><img src={JasonW} alt="" width="200" height="200"/></td>
                <div>
                    <strong>Jason,Wedderburn</strong><br/>
                    Encargado de:
                    <ul>
                    <li>StoryBoards</li>
                    <li>Documento</li>
                    <li>Brindo apoyo sobre la página</li>
                    <li>Pantallas</li>
                    <ul><li>Presentación</li>
                    <li>Acerca de la carrera</li></ul>
                    </ul>
                    
                </div>
                </tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr>
                <td></td>
                <td><img src={JosephM} alt="" width="200" height="200"/></td>
                <div>
                    <strong>Joseph, Miranda</strong><br/>
                    Encargado de:
                    <ul>
                    <li>StoryBoards</li>
                    <li>Documento</li>
                    <li>Diagramas</li>
                    <li>Pantallas:</li>
                    <ul><li>Materias</li>
                    <li>Ayuda</li></ul>
                    </ul>
                    
                </div>
                <td><img src={IrvingD} alt="" width="200" height="200"/></td>
                <div>
                    <strong>Irving, Dominguez</strong><br/>
                    Encargado de:
                    <ul>
                    <li>Encargado de dar las directrices del proyecto</li>
                    <li>StoryBoards</li>
                    <li>Documento</li>
                    <li>Diagramas</li>
                    <li>Pantallas</li>
                    <ul><li>Campo Laboral</li></ul>
                    </ul>
                </div>
                </tr>
                </table>
            </div>
        </div>
);
};

export default creditos;