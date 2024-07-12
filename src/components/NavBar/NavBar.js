import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';

function NavBar() {

  const [activeItem, setActiveItem] = useState('Validador de Certificados');

  const handleClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-top">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-bottom">
          <NavItem name="Acceso" isActive={activeItem === 'Acceso'} onClick={handleClick} />
          <NavItem name="Fechas de Examen" isActive={activeItem === 'Fechas de Examen'} onClick={handleClick} />
          <NavItem name="Horarios de Cursadas" isActive={activeItem === 'Horarios de Cursadas'} onClick={handleClick} />
          <NavItem name="Validador de Certificados" isActive={activeItem === 'Validador de Certificados'} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

function NavItem({ name, isActive, onClick }) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

export default NavBar;