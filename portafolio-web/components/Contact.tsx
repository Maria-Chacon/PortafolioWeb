import React from "react";
import { Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="py-14 p-3 mb-2  bg-light text-black" id="contact">
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
            <span
              className="fs-4 text-warning ls-md text-uppercase fw-semibold"
            >
              PONTE EN CONTATO 
            </span>

            <h2 className="display-3 mt-4 mb-3  fw-bold">
                Contra mis servicios, puedo aportar mucho valor a tú proyecto, 
                además estaré encantada de ayudarte y colaborar para que el proyecto 
                sea un éxito, ponte en contacto conmigo. 
            </h2>

            <p className="lead  px-lg-8 mb-6 text-white">
            Da click en el botón y escríbeme al correo, estaré encantada de ayudarte.
            </p>
            <Button variant="primary" size="lg" href="mailto:mariajchm1312@gmail.com" target="_blank">Contacto</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
