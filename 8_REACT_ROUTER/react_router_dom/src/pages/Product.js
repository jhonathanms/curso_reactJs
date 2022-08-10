import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

function Product() {

    // Desestrutura o objeto retornado no hook useParams e pega o parametro nomeado como id.
    const { id } = useParams();

    const url = 'http://localhost:3000/products/' + id;

    const { data: product, loading, error } = useFetch(url);


    return (
        <>
            <p>Id do produto: {id}</p>
            {error && <p>Ocorreu um erro.</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <h4>{product.price}</h4>
                    <Link to={`/products/${id}/info`}> Mais informações</Link>
                </div>
            )}
        </>
    )
}

export default Product