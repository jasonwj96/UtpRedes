import React, { useState, useEffect } from "react";
import "./slideCircle.scss";
import slide1 from "../img/slide1.jpg";

const SlideCircle = () => {
  const [show, setShow] = useState(false);

  const showMore = e => {
    show
      ? (e.target.className = "expand")
      : (e.target.className = "slideCircle-container");

    setShow(!show);
  };

  useEffect(() => {
    console.log("toggled");
  }, [show]);

  return (
    <div className="slideCircle-container" onClick={showMore}>
      <img src={slide1} alt="" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vitae
        dolorum nisi? Id similique molestias facilis asperiores tempore itaque,
        neque quia aliquid quos doloribus unde, odit sed animi! Facilis esse
        numquam ut? Consequuntur distinctio sed, totam eum assumenda ab nobis
        ipsa quisquam corporis fugiat qui explicabo cupiditate doloremque
        expedita cumque eligendi fugit necessitatibus et. Eveniet dolores
        voluptatibus repellendus animi ipsum nostrum ipsam! Tenetur neque quod
        rem voluptatem suscipit? Nostrum iusto culpa, ad ab voluptatem,
        accusantium illo ratione molestias iure consequuntur sed, exercitationem
        sit. Accusamus eveniet necessitatibus numquam inventore quidem, quae
        recusandae reiciendis vero sit perspiciatis tempore officiis nam, minus
        quis.
      </p>
    </div>
  );
};

export default SlideCircle;
