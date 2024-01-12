import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css"


const Login = () => {

    return(
        <div class="container-fluid">
    <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>

        

        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                            <h3 class="display-4">Bienvenido de nuevo!</h3>
                            <p class="text-muted mb-4">Para poder continuar debes de iniciar sesión.</p>
                            <form>
                                <div class="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Correo electrónico" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Contraseña" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div class="custom-control custom-checkbox mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label for="customCheck1" class="custom-control-label">Recordad contraseña</label>
                                </div>
                                <button type="submit" class="w-100 btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm">Iniciar sesión</button>
                            </form>
                            <Link to={"/"} className="w-100 btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm" role="button" data-bs-toggle="button">Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>


    );
}

export default Login;