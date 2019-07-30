import React, { useState } from "react";
import "./aboutItem.scss";
import slide1 from "../img/slide2.jpg";

const AboutItem = () => {
  const [className, setClassName] = useState("aboutItem-container");
  const [toggleItem, setToggleItem] = useState(false);

  const toggle = () => {
    if (toggleItem) setClassName("aboutItem-container expand");
    else setClassName("aboutItem-container");

    setToggleItem(!toggleItem);
  };

  return (
    <div className={className} onClick={toggle}>
      <div className="overlay">
        <i class="fas fa-university" />
        <p className="overlay-text">Instalaciones</p>
      </div>
      <img src={slide1} alt="" />
      <div className="info">
        <button className="close-btn" onClick={toggle}>
          <i className="fas fa-times" />
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          vitae dolorum nisi? Id similique molestias facilis asperiores tempore
          itaque, neque quia aliquid quos doloribus unde, odit sed animi!
          Facilis esse numquam ut? Consequuntur distinctio sed, totam eum
          assumenda ab nobis ipsa quisquam corporis fugiat qui explicabo
          cupiditate doloremque expedita cumque eligendi fugit necessitatibus
          et. Eveniet dolores voluptatibus repellendus animi ipsum nostrum
          ipsam! Tenetur neque quod rem voluptatem suscipit? Nostrum iusto
          culpa, ad ab voluptatem, accusantium illo ratione molestias iure
          consequuntur sed, exercitationem sit. Accusamus eveniet necessitatibus
          numquam inventore quidem, quae recusandae reiciendis vero sit
          perspiciatis tempore officiis nam, minus quis.
        </p>
      </div>
    </div>
  );
};

export default AboutItem;
