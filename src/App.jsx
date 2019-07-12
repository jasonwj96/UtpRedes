import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Route path="/Home" exact component={Home} />
      </Router>
    </div>
  );
};

export default App;
