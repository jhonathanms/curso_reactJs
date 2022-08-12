import React from 'react'

// Comentado porque foi refatorado, criando um hook customizado useCounterContext
// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';

import { useCounterContext } from '../hooks/useCounterContext';

import { useTitleColorContext } from '../hooks/useTitleColorContext';

function Home() {
  // Comentado porque foi refatorado, criando um hook customizado useCounterContext 
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  // Usando o context api mais complexo, forma ideal.
  const { color, dispatch } = useTitleColorContext();
  
  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador {counter}</p>

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home