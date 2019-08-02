import React, { useState, useEffect } from "react";
import "./breadcrumbs.scss";
import { Link, withRouter } from "react-router-dom";

const Breadcrumbs = props => {
  const [currentPath, setCurrentPath] = useState(props.location.pathname);
  const [items, setItems] = useState(["presentacion"]);

  useEffect(() => {
    const splitPath = () => {
      let path = currentPath.split("/");
      const newPath = [];
      //starts at 1 to avoid the first null value
      for (let i = 1; i < path.length; i++) {
        if (path[i] !== "Inicio") {
          newPath.push(path[i]);

          //Only add separators for more than 2 links
          if (path.length > 2 && path[i + 1] != null) {
            newPath.push("/");
          }
        }
      }
      return newPath;
    };

    setItems(splitPath());
    setCurrentPath(props.location.pathname);
  }, [props.location.pathname, items, currentPath]);

  const buildItemRoute = i => {
    let itemRoute = "/";

    for (let j = 0; j <= i; j++) {
      //skip the separators
      if (!(j % 2 === 1)) {
        itemRoute += items[j] + "/";
      }
    }

    //Delete last separator
    if (itemRoute[itemRoute.length - 1] === "/") {
      itemRoute = itemRoute.substring(0, itemRoute.length - 1);
    }
    return itemRoute;
  };

  return (
    <div className="breadcrumbs-container">
      <div className="items">
        {items.map((item, i) => {
          if (item === "/")
            return <i key={i} className="fas fa-chevron-right separator" />;
          if (item === "presentacion")
            return (
              <Link key={i} to="/presentacion" className="bc-item link home">
                <i className="fas fa-home" />
              </Link>
            );
          else {
            return (
              <Link key={i} to={buildItemRoute(i)} className="bc-item link">
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
