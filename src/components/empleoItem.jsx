import React, { useEffect, useState } from "react";
import "./empleoItem.scss";

const EmpleoItem = props => {
  const [className, setClassName] = useState("empleoItem-container");
  const [toggleItem, setToggleItem] = useState(false);
  const { salario, title, desc } = props;

  useEffect(() => {
    if (toggleItem) setClassName("empleoItem-container expandEmpleo");
    else setClassName("empleoItem-container");
  }, [toggleItem]);

  const toggle = () => setToggleItem(!toggleItem);

  return (
    <div className={className}>
      <div className="header">
        <p className="title">{title}</p>
        <div className="toggle" onClick={toggle}>
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
