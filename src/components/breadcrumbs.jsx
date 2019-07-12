import React, { useState, useEffect } from "react";
import "./breadcrumbs.scss";
import { Link, withRouter } from "react-router-dom";

const Breadcrumbs = props => {
  const [currentPath, setCurrentPath] = useState(props.location.pathname);
  const [items, setItems] = useState(["Home"]);
  const separator = ">";

  useEffect(() => {
    let splitPath = currentPath.split("/");
    const newPath = [];

    //starts at 1 to avoid the first null value
    for (let i = 1; i < splitPath.length; i++) {
      newPath.push(splitPath[i]);

      if (splitPath.length > 2 && splitPath[i + 1] != null) {
        newPath.push(separator);
      }
    }

    setItems(newPath);
    setCurrentPath(props.location.pathname);
  }, [props.location.pathname, items, currentPath]);

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

export default withRouter(Breadcrumbs);
