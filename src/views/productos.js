import React from "react";

const Productos = () => {

    return (
        <div>
            <h1>Productos</h1>

            <br />

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <img src="https://m.media-amazon.com/images/I/616R8d3l-ML._AC_SY675_.jpg" className="card-img-top" alt="Zapatos Deportivos" />
                        <div className="card-body">
                            <h5 className="card-title">Deportivos</h5>
                            <p className="card-text">Descubre nuestra colección de zapatos deportivos.</p>
                            <Link to="/categoria/deportivos" className="btn btn-primary">Explorar</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <img src="https://m.media-amazon.com/images/I/616R8d3l-ML._AC_SY675_.jpg" className="card-img-top" alt="Zapatos Casuales" />
                        <div className="card-body">
                            <h5 className="card-title">Casuales</h5>
                            <p className="card-text">Encuentra zapatos cómodos para el día a día.</p>
                            <Link to="/categoria/casuales" className="btn btn-primary">Explorar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <Link to="/todos-los-productos" className="btn btn-secondary">Ver Todos los Productos</Link>
            </div>
        </div>
    );

}

export default Productos;