import React from 'react';
import { Link } from 'react-router-dom';

const ProductoCard = ({ id, nombre, precio, descripcion, imagen }) => {
    console.log('ID recibido en ProductoCard:', id);
    return (
        <Link to={`/productos/${id}`} className="max-w-xs bg-white rounded-xl overflow-hidden m-5 cursor-pointer">
            <div>
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-40 object-contain"
                />
                <div className="p-4 bg-indigo-950 text-white">
                    <h3 className="text-lg font-semibold">{nombre}</h3>
                    <p className="text-sm text-green-400">${precio}</p>
                    <p className="text-sm">{descripcion}</p>
                </div>
            </div>
        </Link>     
    );
};

export default ProductoCard;
