import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Materias from "./containers/materias";
// import Postcard from "./components/postcard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/inicio" />
        <Route path="/inicio" component={Home} />
        <Route path="/materias" component={Materias} />
        {/* <Postcard /> */}
      </Router>
    </div>
  );
};

export default App;
