import React from "react";
import "./App.scss";
// import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Breadcrumbs from "./components/breadcrumbs";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Menu />
      <Breadcrumbs />
    </div>
  );
};

export default App;
