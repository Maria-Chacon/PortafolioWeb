import React from "react";

const CallToAction = () => {
  return (
    <div className="conctacto" id="contact">
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
            <span className="fs-2 text-warning ls-md text-uppercase fw-semibold">
              PONTE EN CONTATO
            </span>

            <h2 className="mt-4 mb-3">
              Contrata mis servicios, puedo aportar mucho valor a tú proyecto,
              además estaré encantada de ayudarte y colaborar para que el
              proyecto sea un éxito, ponte en contacto conmigo.
            </h2>

            <p className="lead  px-lg-8 mb-6 text-warning fw-bold">
              Da click en el botón y escríbeme al correo, estaré encantada de
              ayudarte.
            </p>
            <a className="conctact" href="mailto:mariajchm1312@gmail.com" target="_blank">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
