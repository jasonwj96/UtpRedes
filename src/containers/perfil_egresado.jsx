import React from "react";
import { Link } from "react-router-dom";
import entrevista from "../img/entrevista.jpg";
import experiencia from "../img/experiencia.jpg";
import recomendacion from "../img/recomendacion.jpg";
import "./perfil_egresado.scss"

const Perfil_egresado = props=>{
    return(
<table>
<tr><img src={entrevista} alt="" /></tr>
<tr><img src={experiencia} alt="" /></tr>
<tr><img src={recomendacion} alt="" /></tr>
</table>
    );
};
export default Perfil_egresado;