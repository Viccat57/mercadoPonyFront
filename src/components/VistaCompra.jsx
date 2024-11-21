import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import papas from '../assets/img/papa.jpg';
import picom from '../assets/img/pico.png';
import pomni from '../assets/img/pomni.png';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

function VistaCompra() {
    const [producto, setProducto] = useState(null); // Estado para el producto
    const [loading, setLoading] = useState(true); // Estado para la carga

    useEffect(() => {
        // Realiza la solicitud a la API
        fetch('http://172.235.40.140/api/productos/2')
            .then((response) => response.json())
            .then((data) => {
                setProducto(data); // Guarda los datos del producto en el estado
                setLoading(false);  // Deja de mostrar el cargando
            })
            .catch((error) => {
                console.error('Error al obtener el producto:', error);
                setLoading(false); // Deja de mostrar el cargando
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>; // Muestra mensaje mientras se cargan los datos
    }

    if (!producto) {
        return <div>No se encontró el producto</div>; // Muestra mensaje si no hay producto
    }

    return (
        <>
            <HeaderComponent />
            <div className="container-fluid" style={{ backgroundColor: '#222222', minHeight: '35vh' }}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card h-70">
                            <div className="card-body d-flex flex-column">
                                <div>
                                    <h5 className="card-title">Enviar a Domicilio</h5> {/* Nombre del producto */}
                                    <p className="card-text">Dirección Generica</p> {/* Descripción */}
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        <a href="">Editar Dirección</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="card h-30">
                            <div className="card-body d-flex flex-column">
                                <div>
                                    <h5 className="card-title">Recoger en punto de entrega</h5> {/* Nombre del producto */}
                                    <p className="card-text">A acordar con el vendedor</p> {/* Descripción */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Forma de Pago</h5>
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">Transferencia SPEI</a>
                                    <a href="#" className="list-group-item list-group-item-action">Tarjeta de Crédito/Débito</a>
                                </div>
                                <p className="card-text">Resumen de Compra</p> {/* Descripción */}
                                <p className="card-text">Producto: $100</p> {/* Descripción */}
                                <p className="card-text">Envio: $50</p> {/* Descripción */}
                                <p className="card-text">Total: $150</p> {/* Descripción */}
                                <button type="button" className="btn btn-primary btn-lg mb-3">Confirmar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </>
    );
}
export default VistaCompra;
