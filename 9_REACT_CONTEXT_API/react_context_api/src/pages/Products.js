import React from 'react'
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';


function Products() {

    const { counter, setCounter } = useContext(CounterContext);

    const { color } = useTitleColorContext();

    return (
        <div>
            <h1 style={{ color: color }}>Products</h1>
            <p>Valor do contador {counter}</p>
            
            <input type="button" value="Incrementar" onClick={() => setCounter((prevCounter) => prevCounter + 1)} />
        </div>
    )
}

export default Products