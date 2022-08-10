import './Navbar.css';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
      <nav>
          {/* Forma básica de links:

          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link> 
          */}
      
      {/* Tipo de Link mais completo, possibilida o uso do Active */}
      
      <NavLink to={`/`} // Modelo 01 com active customizado.
        className={({ isActive }) => (isActive ? "ativo" : "nao-ativo")}>Home</NavLink>
      
      {/* Usando o active padrão do NavLink */}
      <NavLink to={`/about`}>Sobre</NavLink>

      
    </nav>
  )
}

export default Navbar