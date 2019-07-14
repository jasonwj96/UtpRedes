import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import Home from "./containers/materias";

// import Postcard from "./components/postcard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/inicio" />
        <Route path="/inicio" component={Home} />
        {/* <Postcard /> */}
      </Router>
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/Materias" />
        <Route path="/Materias" component={Materias} />
        {/* <Postcard /> */}
      </Router>
    </div>
  );
};

export default App;
