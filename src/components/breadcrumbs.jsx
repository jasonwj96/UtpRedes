import React from "react";
import "./breadcrumbs.scss";

const Breadcrumbs = props => {
  const separator = ">";
  const items = [
    "Página principal",
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
              <a key={i} href={itemRoute} className="bc-item link">
                {item}
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
