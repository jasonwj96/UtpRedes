import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/Home" />
        <Route path="/Home" component={Home} />
      </Router>
    </div>
  );
};

export default App;
