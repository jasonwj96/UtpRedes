import React from "react";
import "./App.scss";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Materias from "./containers/materias";
import Materias2 from "./containers/materiasaño2";
import Materias3 from "./containers/materiasaño3";
import Materias4 from "./containers/materiasaño4";
import CampoLaboral from "./containers/campolaboral";
import Navbar from "./components/navbar";
import Acerca from "./containers/acerca";
import Eventos from "./containers/eventos";
import PerfilEgresado from "./containers/perfilEgresado";

import Ayuda from "./containers/ayuda";

import creditos from "./containers/creditos";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/presentacion" />
        <div className="screen-container">
          <Breadcrumbs />
          <Navbar />

          <Route exact path="/presentacion" component={Home} />
          <Route path="/presentacion/Acerca de la carrera" component={Acerca} />
          <Route path="/presentacion/Primer año" component={Materias} />
          <Route path="/presentacion/Segundo año" component={Materias2} />
          <Route path="/presentacion/Tercer año" component={Materias3} />
          <Route path="/presentacion/Cuarto año" component={Materias4} />
          <Route path="/presentacion/Eventos" component={Eventos} />
          <Route path="/presentacion/Ayuda" component={Ayuda} />

          <Route
            path="/presentacion/Perfil de egresado"
            component={PerfilEgresado}
          />
          <Route path="/presentacion/Campo laboral" component={CampoLaboral} />
          <Route path="/presentacion/creditos" component={creditos} />
        </div>
      </Router>
    </div>
  );
};

export default App;
