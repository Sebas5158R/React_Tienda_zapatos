import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/registro.css"


const RegistroEmpresa = () => {
    return(
        <div className="container-form registerCompany hidden">
            <div className="information">
                <div className="info-childs">
                    <h2>Bienvenido</h2>
                    <p>Para unirte a nuestra comunidad como empresa debes de crear una cuenta de empresa</p>
                    <input type="button" value={"Registrarme como usuario"} id="signUp-Usuario"></input>
                </div>
            </div>
            <div className="form-information">
                <div className="form-information-childs">
                    <h2>Crear una cuenta de empresa</h2>
                    <div className="icons">
                        <FontAwesomeIcon icon="fa-brands fa-google" className="i" />
                        <FontAwesomeIcon icon="fa-brands fa-github" className="i" />
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className="i" />
                    </div>
                    <p>o usa tu email para registrarte</p>
                    <form className="form">
                        <label>
                            <FontAwesomeIcon icon="fa-solid fa-hashtag" className="i"/>
                            <input type="text" placeholder="Nit de la empresa"/>
                        </label>
                        <label>
                            <FontAwesomeIcon icon="fa-solid fa-building" className="i" />
                            <input type="email" placeholder="Nombre empresa"/>
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
    )
}

export default RegistroEmpresa;