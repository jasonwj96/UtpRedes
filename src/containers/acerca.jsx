import React from "react";
import "./acerca.scss";
import AboutItem from "../components/aboutItem";

const Acerca = props => {
  const info = [
    {
      imageUrl: "./slide1.jpg",
      desc:
        "La Universidad Tecnológica de Panamá brinda a todos sus estudiantes las mejores instalaciones para su vida universitaria. Como por ejemplo, acceso inalámbrico a internet mediante Wi-Fi, biblioteca con amplias áreas de trabajo, áreas recreativas, gimnasio, estacionamientos para estudiantes, entre otros.",
      overlayText: "Instalaciones"
    },
    {
      imageUrl: "./slide2.jpg",
      desc: "Vas a trabajar aqui :D",
      overlayText: "Oportunidad laboral"
    },
    {
      imageUrl: "./slide3.jpg",
      desc:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ea, sapiente similique delectus consequatur architecto aspernatur quia, beatae hic nisi fugiat, voluptas impedit? Reiciendis iusto beatae aliquam esse quam debitis ex et atque est perspiciatis reprehenderit nihil ullam earum exercitationem ipsa facere quasi nesciunt, cupiditate expedita neque minus eum! Assumenda placeat alias, hic eligendi voluptas voluptatum, reiciendis in porro facilis nostrum temporibus repellat perferendis unde! Quisquam quos voluptates maxime rerum voluptatibus minima veritatis dolores, adipisci molestiae tenetur sed, libero ea ullam officiis. Voluptatum sit, unde corporis a nobis, veritatis sed ipsum vero iusto sapiente illum. Repellat aperiam architecto vero est?",
      overlayText: "Reconocimiento internacional"
    },
    {
      imageUrl: "./slide4.jpg",
      desc:
        "La Universidad Tecnológica de Panamá cuenta con los educadores más experimentados.",
      overlayText: "Cuerpo docente"
    },
    {
      imageUrl: "./slide5.jpg",
      desc:
        "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ea, sapiente similique delectus consequatur architecto aspernatur quia, beatae hic nisi fugiat, voluptas impedit? Reiciendis iusto beatae aliquam esse quam debitis ex et atque est perspiciatis reprehenderit nihil ullam earum exercitationem ipsa facere quasi nesciunt, cupiditate expedita neque minus eum! Assumenda placeat alias, hic eligendi voluptas voluptatum, reiciendis in porro facilis nostrum temporibus repellat perferendis unde! Quisquam quos voluptates maxime rerum voluptatibus minima veritatis dolores, adipisci molestiae tenetur sed, libero ea ullam officiis. Voluptatum sit, unde corporis a nobis, veritatis sed ipsum vero iusto sapiente illum. Repellat aperiam architecto vero est?",
      overlayText: "Egresados"
    }
  ];

  return (
    <div className="acerca-container">
      <div className="grid">
        {info.map((item, index) => {
          return (
            <AboutItem
              key={index}
              id={index}
              imageUrl={item.imageUrl}
              desc={item.desc}
              overlayText={item.overlayText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Acerca;
