import React from "react";
import "./breadcrumbs.scss";

const Breadcrumbs = props => {
  const separator = ">";
  const items = ["Página principal", separator, "Eventos"];

  return (
    <div className="breadcrumbs-container">
      <div className="items">
        {items.map((item, i) => {
          return item === separator ? (
            <i key={i} className="fas fa-chevron-right separator" />
          ) : (
            <a key={i} href={"/" + item} className="bc-item link">
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
