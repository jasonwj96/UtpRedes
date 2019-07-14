import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
<<<<<<< HEAD
import Materias from "./containers/materias"; 
=======
import Materias from "./containers/materias";
>>>>>>> ae8110df50e61db5ef6bee6d7b5f7982b9c69979
// import Postcard from "./components/postcard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrumbs />
        <Redirect from="/" to="/inicio" />
        <Route path="/inicio" component={Home} />
<<<<<<< HEAD
         {/* <--- ahi puse una nota */}    
         <Route path="/inicio/materias" component={Materias} />
        {/* <Postcard /> */}
      </Router>

=======
        <Route path="/materias" component={Materias} />
        {/* <Postcard /> */}
      </Router>
>>>>>>> ae8110df50e61db5ef6bee6d7b5f7982b9c69979
    </div>
  );
};

export default App;
