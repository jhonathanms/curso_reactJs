import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function SearchForm() {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handlerSubmit = (e) => {
        e.preventDefault();
        navigate("/search?q=" + query);
    }


    return (
        <form onSubmit={handlerSubmit}>

            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="buscar" />

        </form>
    )
}

export default SearchForm