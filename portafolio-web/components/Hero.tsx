import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-black d-flex flex-column align-items-center 
        justify-content-between bg-light p-3 p-3 mb-0 bg-dark text-white"
    >
      <div className="row w-100">
        <div className="col d-flex align-items-center justify-content-center">
          <header className="bg-black py-5 bg-success p-2 bg-opacity-50 text-center mt-0">
            <h2 className="text-uppercase font-weight-normal display-1">
              Mi nombre es
            </h2>
            <h1 className="text-uppercase font-weight-bold display-1">
              María Chacón
            </h1>
            <div className="hero">
              <h2 className="text-uppercase font-weight-normal p-2 mb-0 small display-1">
                Soy programadora
              </h2>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Hero;
