import React from "react";
import "./eventos.scss";
import EventosItem from "../components/eventosItem";

const Eventos = () => {
  const eventosList = [
    {
      imageUrl: "./evento1.jpeg",

      fecha: "Lunes, Septiembre 30 hasta Octubre 3 del 2019",
      lugar: "Hotel Wyndham Albrook Mall - Ciudad de Panamá",
      organizadores:
        "Universidad Tecnológica de Panamá. Universidad de Panamá. Universidad Autónoma de Chiriquí",
      contacto: "www.clei2019.utp.ac.pa",
      desc:
        "La conferencia latinoamericana de informatica CLEI 2019, incluye 9 simposios, 4 eventos asociados y un evento invitado.      "
    },
    {
      imageUrl: "./evento1.jpeg",

      fecha: "Lunes, Septiembre 30 hasta Octubre 3 del 2019",
      lugar: "Hotel Wyndham Albrook Mall - Ciudad de Panamá",
      organizadores:
        "Universidad Tecnológica de Panamá. Universidad de Panamá. Universidad Autónoma de Chiriquí",
      contacto: "www.clei2019.utp.ac.pa",
      desc:
        "La conferencia latinoamericana de informatica CLEI 2019, incluye 9 simposios, 4 eventos asociados y un evento invitado.      "
    },

    {
      imageUrl: "./evento1.jpeg",
      fecha: "Lunes, Septiembre 30 hasta Octubre 3 del 2019",
      lugar: "Hotel Wyndham Albrook Mall - Ciudad de Panamá",
      organizadores:
        "Universidad Tecnológica de Panamá. Universidad de Panamá. Universidad Autónoma de Chiriquí",
      contacto: "www.clei2019.utp.ac.pa",
      desc:
        "La conferencia latinoamericana de informatica CLEI 2019, incluye 9 simposios, 4 eventos asociados y un evento invitado.      "
    }
  ];

  return (
    <div className="eventos-container">
      <div className="grid">
        {eventosList.map((item, index) => {
          return (
            <EventosItem
              key={index}
              imageUrl={item.imageUrl}
              fecha={item.fecha}
              lugar={item.lugar}
              organizadores={item.organizadores}
              contacto={item.contacto}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Eventos;
