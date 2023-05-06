import React from "react";
import styles from "../src/styles/Home.module.css";
import Profile from "/public/profile.png";
import Image from "next/image";

const SectionAbout = () => {
  return (
    <div className=" aboutMe row align-items-center p-3 mb-2 text-black mt-0">
      <div className="col-md-6 order-md-1">
        <figure>
          <Image
            src={Profile}
            alt="Header Image"
            placeholder="blur"
            className="img-fluid"
          />
        </figure>
      </div>
      <div className="col-md-6 order-md-2 align-self-center" id="about">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-sm-10 col-md-12">
            <h2 className="mb-3 font-weight-bold">
              Soy María Chacón, estudio Ingeniería en Sistemas en la Universidad
              Nacional de Costa Rica. Me encantaría trabajar en tu próximo
              proyecto
            </h2>
            <p className="mb-3 fs-5">
              Me encanta trabajar con otros para crear buenas soluciones de
              desarrollo. Me considero una persona apasionada y siempre estoy
              abierta a aprender nuevas tecnologías. He hecho proyectos en
              lenguajes como C++, Python y Java, y he trabajado con bases de
              datos NoSQL y SQL. Gracias a mi formación especializada, creo que
              puedo aportar valor y seguir desarrollándome profesionalmente en
              una compañía que coincida con mis valores y expectativas. Como
              persona organizada y motivada, soy capaz de adaptarme a cualquier
              circunstancia y dar siempre lo mejor de mí en cualquier proyecto,
              al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar
              valores como el compañerismo.
            </p>
            <div className="mt-5">
              <a
                className="aboutButton"
                href="https://www.linkedin.com/in/mar%C3%ADa-chac%C3%B3n-0b570a274/"
              >
                Ver perfil de LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
