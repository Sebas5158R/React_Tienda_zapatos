import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Novedades from "../components/Novedades";

const Index = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to={"#!"} role="button">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </Link>

        <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to={"#!"} role="button">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
        </Link>

        <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to={"#!"} role="button">
          <FontAwesomeIcon icon="fa-brands fa-google" />
        </Link>

        <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to={"#!"} role="button">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </Link>

        <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to={"#!"} role="button">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </Link>


        <div className="container-fluid d-block">
          <div className="collapse d-block" id="navbarSupportedContent">
            <div className="d-flex flex-column align-items-center">
              <p className="mb-0 fs-4">Bienvenido a la tienda de zapatos, los mejores...</p>
            </div>
          </div>
        </div>

        <button className="btn btn-outline-success w-25" type="submit">Obtener una cuenta</button>
      </nav>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link text-decoration-underline" to={"/login"} style={{ color: "green" }}>Iniciar sesión</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"#"}>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"#"}>Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"#"}>Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Index</Link>
        </li>
      </ul>

      <Novedades />
    </div>
  );
}

export default Index;
