import './MyComponent.css';
import { useState } from 'react';

const MyComponent = () => {
  const valor = 19;

  const [nome, setNome] = useState("Jhonathan");

  return (
    <div>
      {/* CSS normal importando arquivo externo.*/}
      <p>Testando css por componente.</p>

      {/* CSS inline. */}
      {/* Propriedades css que border-top, é escrito em JS borderTop, em cameoCase. */}
      <p style={{ color: "yellow", padding: "25px", backgroundColor: "black" }}>Testando CSS inline</p>

      {/* CSS inline dinamico a partir de uma condição. */}
      <p style={valor < 5
        ? { backgroundColor: "aqua" }
        : { backgroundColor: "pink" }
      }>Testando CSS inline</p>

      {/* CSS com className dinamica. */}
      <p className = {nome === 'Jhonathan'
        ? 'paragrafo-dinamico1'
        : 'paragrafo-dinamico2'
      }>
        Testando css com className dinamica
      </p>

      <button onClick={() => setNome("Wingles")}>Alterar cor</button>

    </div>
  )
}

export default MyComponent