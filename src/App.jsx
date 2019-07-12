import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Breadcrumbs />
    </div>
  );
};

export default App;
