import React from 'react';
import '../assets/css/novedades.css';

const Novedades = () => {
  const novedades = [
    { id: 1, titulo: 'Nueva Colección de Invierno', fecha: '2024-01-15', contenido: '¡Descubre nuestra última colección para la temporada de invierno!',  imagen: 'https://m.media-amazon.com/images/I/31mQppW7I1L._AC_SX575_.jpg' },
    { id: 2, titulo: 'Ofertas Especiales de Verano', fecha: '2024-02-20', contenido: 'No te pierdas nuestras increíbles ofertas para disfrutar del verano al máximo.', imagen: 'https://m.media-amazon.com/images/I/616R8d3l-ML._AC_SY675_.jpg' },
    { id: 3, titulo: 'Ofertas Especiales de Verano', fecha: '2024-02-20', contenido: 'No te pierdas nuestras increíbles ofertas para disfrutar del verano al máximo.', imagen: 'https://m.media-amazon.com/images/I/51RFfemMaoL._AC_SY575_.jpg' },
  ];

  return (
    <div className="container mt-5">
      <h2>Novedades y Blog</h2>
      <br/>
      <div className="row">
        {novedades.map(novedad => (
          <div key={novedad.id} className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column">
              <img src={novedad.imagen} className="card-img-top" alt={novedad.titulo} />
              <div className="card-body">
                <h5 className="card-title">{novedad.titulo}</h5>
                <p className="card-text">{novedad.contenido}</p>
                <p className="card-text flex-grow-1"><small className="text-muted">{novedad.fecha}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Novedades;
