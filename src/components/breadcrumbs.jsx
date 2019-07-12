import React from "react";
import "./breadcrumbs.scss";
import { Link } from "react-router-dom";

const Breadcrumbs = props => {
  const separator = ">";
  const items = [
    "Home",
    separator,
    "Eventos",
    separator,
    "2019",
    separator,
    "Julio",
    separator,
    "Feria de empleo"
  ];

  return (
    <div className="breadcrumbs-container">
      <div className="items">
        {items.map((item, i) => {
          if (item === separator)
            return <i key={i} className="fas fa-chevron-right separator" />;
          else {
            let itemRoute = "/";

            for (let j = 0; j <= i; j++) {
              //skip the separators
              if (!(j % 2 === 1)) {
                itemRoute += items[j] + "/";
              }
            }

            return (
              <Link key={i} to={itemRoute} className="bc-item link">
                {item}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
