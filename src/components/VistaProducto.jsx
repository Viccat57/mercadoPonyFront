import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../scss/styles.scss';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

function VistaProducto() {
    const { id } = useParams(); // Obtener el parámetro id de la URL
    const [producto, setProducto] = useState(null); // Estado para los datos del producto
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        // Realizar la solicitud a la API usando el id de la URL
        fetch(`http://172.235.40.140/api/productos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProducto(data); // Guardar los datos del producto en el estado
                setLoading(false);  // Cambiar el estado de carga
            })
            .catch((error) => {
                console.error('Error al obtener el producto:', error);
                setLoading(false); // Cambiar el estado de carga
            });
    }, [id]);

    // Mensaje mientras los datos se están cargando
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Mensaje si no se encontró el producto
    if (!producto) {
        return <div>No se encontró el producto</div>;
    }

    // Construir la ruta de la imagen de manera dinámica
    const imagen = `/img/producto${id}.png`; // Asignar la imagen según el ID

    // Renderizar los detalles del producto si se obtuvo exitosamente
    return (
        <>
            <HeaderComponent />
            <div className="container-fluid" style={{ backgroundColor: '#222222', minHeight: '100vh' }}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade"
                                             data-bs-ride="carousel">
                                            <div className="carousel-inner" style={{ height: '400px' }}>
                                                <div className="carousel-item active">
                                                    <img src={imagen} className="d-block w-100" alt="Imagen del producto"
                                                         style={{ objectFit: 'cover', height: '100%' }} />
                                                </div>
                                                {/* Agregar más imágenes si es necesario */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="card-title">{producto.nombreProducto}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">${producto.precio}</h6>
                                        <p className="card-text">{producto.descripcion}</p>
                                    </div>
                                </div>
                                <p className="card-text mt-auto">Vendedor: Usuario {producto.idUsuario}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <button type="button" className="btn btn-primary btn-lg mb-3">Comprar</button>
                                <h5 className="card-title">Métodos de Pago:</h5>
                                <p className="card-text">
                                    Depósito<br />
                                    Transferencia<br />
                                    PayPal<br />
                                    Tarjeta de crédito<br />
                                    Tarjeta de débito
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default VistaProducto;
