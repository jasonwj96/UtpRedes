import React from "react";
import "./eventos.scss";
import EventosItem from "../components/eventosItem";

const Eventos = () => {
  const eventosList = [
    {
      imageUrl: "./evento1.jpeg",

      fecha: "Lunes, 30 de septiembre hasta Octubre 3 del 2019",
      lugar: "Hotel Wyndham Albrook Mall, Ciudad de Panamá",
      organizadores:
        "Universidad Tecnológica de Panamá,Universidad de Panamá y Universidad Autónoma de Chiriquí",
      contacto: "www.clei2019.utp.ac.pa",
      desc: "Conferencia Latinoamericana De Informática CLEI 2019"
    },
    {
      imageUrl: "./evento2.jpeg",
      fecha: "Miércoles 11 de septiembre del 2019",
      lugar: "Hotel Movich Pereira. Risaralda, Colombia",
      organizadores: "COMFAMILIAR GITCE SNI",
      contacto:
        "www.redmitic.utp.ac.pa/amitic2019, vladimir.villarreal@utp.ac.pa",
      desc:
        "II Congreso Internacional en Inteligencia Ambiental, Ingeniería de Software, Salud Electrónica y Móvil."
    },
    {
      imageUrl: "./evento3.jpeg",

      fecha: "Martes 13 de agosto de 2019",
      lugar: "Teatro Auditorio de la Universidad Tecnológica de Panamá",
      organizadores: "Dirección General de Recursos Humanos",
      contacto: "560-3036/560-3035",
      desc: "Acto de Entrega de Pines por Reconocimiento de Años de Servicio"
    },
    {
      imageUrl: "./evento4.jpeg",

      fecha: "Sábado 10 de agosto de 2019",
      lugar:
        "Universidad Tecnológica de Panamá, Sótano del Edificio No. 3, FAB LAB UTP.",
      organizadores: "Universidad Tecnológica de Panamá",
      contacto: "www.clei2019.utp.ac.pa",
      desc: "Curso de Robótica Móvil con el Rasberry Pi y Python"
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
