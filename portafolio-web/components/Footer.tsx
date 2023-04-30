import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white" id="contact">
      <div className="container p-4 pb-0">
        <section className="mb-4">

        <li className="list-inline-item">
                <a href="https://www.facebook.com/mariajose.chaconmora?mibextid=ZbWKwL"><i className="bi bi-facebook"></i></a>
        </li>
        <li className="list-inline-item">
                <a href="https://github.com/Maria-Chacon"><i className="bi bi-github"></i></a>
        </li>
        <li className="list-inline-item">
                <a href="https://instagram.com/ksmaria13?igshid=ZDdkNTZiNTM="><i className="bi bi-instagram"></i></a>
        </li>
        <li className="list-inline-item">
                <a href="www.linkedin.com/in/maría-chacón-0b570a274"><i className="bi bi-linkedin"></i></a>
        </li>

        
        </section>
      </div>

      <div
        className="text-center p-3">
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          María Chacón 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
