import React, { useState, useEffect } from 'react';
import './PerfilUsuario.css';
import defaultProfileImage from './assets/img/profileEmpty.jpg';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

function PerfilUsuario() {
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [user, setUser] = useState(null); // Para guardar la información del usuario

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // Obtener los datos del usuario desde localStorage
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChangeImage = () => {
    const newImage = prompt('Introduce la URL de la nueva imagen de perfil');
    if (newImage) {
      setProfileImage(newImage);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(defaultProfileImage);
  };

  if (!user) {
    return <div>Cargando...</div>; // Mientras se carga el usuario
  }

  return (
    <>
      <HeaderComponent />
      <div className="App">
        <h1 className="EditorP">Bienvenido, {user.username}</h1> {/* Mostrar el nombre del usuario */}
        <div className="profile">
          <img src={profileImage} alt="Imagen de perfil" className="profileImage" />
          <button className="buttonCF" onClick={handleChangeImage}>Cambiar Foto</button>
          <button className="buttonDel" onClick={handleRemoveImage}>Eliminar Foto</button>
        </div>
        <ul className="actions">
          <li><button className="buttonProducts" onClick={() => alert('Ver Productos')}>Ver Productos</button></li>
          <li><button className="buttonFacturas" onClick={() => alert('Ver Facturas')}>Ver Facturas</button></li>
          <li><button className="buttonCompras" onClick={() => alert('Compras Realizadas')}>Compras Realizadas</button></li>
          <li><button className="buttonEliminar" onClick={() => alert('Eliminar Cuenta')}>Eliminar Cuenta</button></li>
        </ul>
      </div>
      <FooterComponent />
    </>
  );
}

export default PerfilUsuario;
