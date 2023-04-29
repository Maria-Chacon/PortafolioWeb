import React from "react";
import Image from "next/image";
import HeroIma from "/public/hero.jpeg";

const Hero = () => {
  return (
    <div className="bg-black d-flex flex-column align-items-center justify-content-between bg-light p-3 p-3 mb-2 bg-dark text-white">
      <div className="row w-100">
        <div className="col d-flex align-items-center justify-content-center">
          <header className="bg-black py-5 bg-success p-2 bg-opacity-50 text-center mt-0">
            <h2 className="text-uppercase font-weight-normal">Mi nombre es</h2>
            <h1 className="text-uppercase font-weight-bold">María Chacón</h1>
            <h2 className="text-uppercase font-weight-normal bg-warning text-dark p-2 mb-0 shadow small">
              Soy programadora
            </h2>
          </header>
        </div>
        <div className="col d-flex align-items-center">
          <Image
            src={HeroIma}
            alt="Header Image"
            width={700}
            height={300}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;