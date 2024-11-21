import React, { useState } from 'react';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

function VistaFact() {
  const [urlFactura, setUrlFactura] = useState(null);

  const descargarFactura = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/generar-factura/RFC_O_CURP');
      const data = await response.json();
      setUrlFactura(data.url);
    } catch (error) {
      console.error('Error al descargar la factura:', error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">Gracias por tu compra</h2>
        <h3 className="text-lg mt-2">Llega entre el #### y el #### del ####</h3>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYzlgKtZoGqYERewYaZm1dry165UXOx64XQ&s'
          alt="papa" 
          className="top-6 right-6 w-250"
        />
        <section className="bg-gray-300 w-full py-10 text-center">
          <div className="bg-white inline-block px-6 py-4 rounded-md shadow-md">
            <p className="text-lg mb-2">Puede descargar su factura aquí ---</p>
            <div className="flex space-x-4">
              <button
                  onClick={() => window.location.href = 'http://127.0.0.1:8000/compras/2/invoice'}
                  className="text-blue-600 underline"
              >
                Descargar factura
              </button>

              <button
                  onClick={() => window.location.href = 'http://127.0.0.1:8000/compras'}
                  className="text-blue-600 underline"
              >
                PROVISIONAL: CRUD DE COMPRAS
              </button>
            </div>


            {urlFactura && (
                <a href={urlFactura} className="text-blue-600 underline ml-4" download>
                  Link de factura listo

                </a>
            )}
          </div>
        </section>
      </div>
      <FooterComponent/>
    </>
  );
}

export default VistaFact;
