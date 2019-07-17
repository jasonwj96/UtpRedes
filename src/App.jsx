import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Materias from "./containers/materias";
import Materias2 from "./containers/materiasaño2";
import Materias3 from "./containers/materiasaño3";
import Materias4 from "./containers/materiasaño4";

// import Postcard from "./components/postcard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/inicio" />
        <Route exact path="/inicio" component={Home} />
        <Route  path="/inicio/Primer año" component={Materias} />
        <Route  path="/inicio/Segundo año" component={Materias2} />
        <Route  path="/inicio/Tercer año" component={Materias3} />
        <Route  path="/inicio/Cuarto año" component={Materias4} />

        {/* <Postcard /> */}
      </Router>
    </div>
  );
};

export default App;
