import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductosRegistrados = () => {

    const productos = [
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 1, imagen: 'https://www.tumodacreativa.com/wp-content/uploads/2021/06/azul-25.jpg', titulo: 'Zapatos deportivos para Caballero', descripcion: 'Zapatos deportivos, para hombre capellada elaborada en sintético, suela tipo espanso liviana, plantilla confort.', color: 'Color: Negro, Azul, Café, Miel', precio: '$100.390' },
        { id: 2, imagen: 'https://http2.mlstatic.com/D_NQ_NP_871209-MCO54718156279_032023-O.webp', titulo: 'Zapatos Colegio Schooly C', descripcion: 'Para Niño Y Niña Croydon.', color: 'Color: Negro', precio: '$99.900' },

    ];

    return (
        <div className="container mt-5">
          <h2>Productos</h2>
          <br/>
          <div className="row">
            {productos.map(producto => (
              <div key={producto.id} className="col-md-4 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">{producto.color}</p>
                    <p className="card-text flex-grow-1"><small className="text-muted">{producto.precio}</small></p>
                    <a href="#" class="btn btn-primary">Más detalles</a>
                    ㅤㅤㅤ
                    <a href="#" class="btn btn-secondary">Agregar al carrito</a>
                    ㅤㅤ
                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

}

export default ProductosRegistrados;