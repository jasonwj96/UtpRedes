import React, { useEffect, useState } from "react";
import "./help_items.scss";

const AyudaItem = props => {
  const [className, setClassName] = useState("ayudaItem-container");
  const [toggleItem, setToggleItem] = useState(false);
  const {  title, desc } = props;

  useEffect(() => {
    if (toggleItem) setClassName("ayudaItem-container expandEmpleo");
    else setClassName("ayudaItem-container");
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
     
    </div>
  );
};

export default AyudaItem;
