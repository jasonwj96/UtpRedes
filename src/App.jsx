import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./containers/home";
import Postcard from "./components/postcard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/Inicio" />
        <Route path="/Inicio" component={Home} />
        {/* <Postcard /> */}
      </Router>
    </div>
  );
};

export default App;
