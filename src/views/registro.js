import React from "react";
import { Link } from "react-router-dom";


const Registro = () => {

    return(
        <div>
            <h1>Registrar</h1>
            <p>acá se puede registrar una empresa, vendedor, cliente</p>

            <h3>
                <Link to={"/"}>Volver al index</Link>
            </h3>
        </div>
    );
}

export default Registro;