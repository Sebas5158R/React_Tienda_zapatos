import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/registro.css";
import RegistroEmpresa from "../components/RegistroEmpresa";




const Registro = () => {

    useEffect(() => {
        const btnSignUpEmpresa = document.getElementById("signUp-Empresa");
        const btnSignUpUsuario = document.getElementById("signUp-Usuario");
        const formRegisterUser = document.querySelector(".registerUser");
        const formRegisterCompany = document.querySelector(".registerCompany");
    
        if (btnSignUpEmpresa && btnSignUpUsuario && formRegisterUser && formRegisterCompany) {
          btnSignUpEmpresa.addEventListener("click", () => {
            formRegisterUser.classList.add("hidden");
            formRegisterCompany.classList.remove("hidden");
          });
    
          btnSignUpUsuario.addEventListener("click", () => {
            formRegisterCompany.classList.add("hidden");
            formRegisterUser.classList.remove("hidden");
          });
        }
      }, []);

    return(
        <body className="body_registro">
            <div className="container-form registerUser">
            <div className="information">
                <div className="info-childs">
                    <div className="link">
                    </div>
                    <h2>Bienvenido</h2>
                    <p>Para unirte a nuestra comunidad debes de crear una cuenta</p>
                    <input type="button" value={"Registrarme como empresa"} id="signUp-Empresa"></input>
                </div>
            </div>
            <div className="form-information">
                <div className="form-information-childs">
                    <h2>Crear una cuenta</h2>
                    <div className="icons">
                        <FontAwesomeIcon icon="fa-brands fa-google" className="i" />
                        <FontAwesomeIcon icon="fa-brands fa-github" className="i" />
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className="i" />
                    </div>
                    <p>o usa tu email para registrarte</p>
                    <form className="form">
                        <label>
                            <FontAwesomeIcon icon="fa-solid fa-user" className="i"/>
                            <input type="text" placeholder="Nombre completo"/>
                        </label>
                        <label>
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className="i"/>
                            <input type="email" placeholder="Correo Electronico"/>
                        </label>
                        <label>
                            <FontAwesomeIcon icon="fa-solid fa-lock" className="i"/>
                            <input type="password" placeholder="Contraseña"/>
                        </label>
                        <input type="submit" value={"Registrarse"}/>
                    </form>
                </div>
            </div>
        </div>

        <RegistroEmpresa/>
        </body>
    );
}

export default Registro;