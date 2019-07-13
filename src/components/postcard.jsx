import React, { useEffect, useState } from "react";
import "./postcard.scss";

const Postcard = props => {
  const [userEmail, setUserEmail] = useState("");

  const handleEmailChange = event => {
    setUserEmail(event.target.value);
  };

  useEffect(() => {}, [userEmail]);

  return (
    <div className="postcard-container">
      <p className="postcard-msg">
        Desea obtener más información en su correo? mueva el ratón encima de la
        carta
      </p>
      <div className="mail">
        <div className="cover" />
        <div className="letter">
          <p>Introduzca su correo:</p>
          <form onSubmit={e => e.preventDefault()}>
            <input
              id="emailInput"
              type="email"
              name="userEmail"
              placeholder="utpredes@gmail.com"
              value={userEmail}
              onChange={handleEmailChange}
              onClick={handleEmailChange}
            />
          </form>
        </div>
      </div>
      <div className="buttons">
        <button className="dismiss">
          <i className="fas fa-times" />
        </button>
        <button className="send">
          <i className="fas fa-check" />
        </button>
      </div>
    </div>
  );
};

export default Postcard;
