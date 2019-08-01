import React, { useEffect, useState } from "react";
import "./empleoItem.scss";

const EmpleoItem = props => {
  const { salario, title, desc } = props;

  const [toggleItem, setToggleItem] = useState(false);
  const [className, setClassName] = useState("accordionItem");

  useEffect(() => {
    toggleItem
      ? setClassName("accordionItem expand")
      : setClassName("accordionItem");
  }, [toggleItem]);

  return (
    <div className={className}>
      <div className="header" onClick={() => setToggleItem(!toggleItem)}>
        <p className="title">{title}</p>
        <div className="toggle">
          <i className="fas fa-chevron-down" />
        </div>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
      <div className="salario">Salario aproximado: ${salario}</div>
    </div>
  );
};

export default EmpleoItem;
