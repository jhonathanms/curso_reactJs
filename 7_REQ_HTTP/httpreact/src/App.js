import { useState, useEffect } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

const URL = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // [GET] - Resgatar dados:
  /* Bloco comentado para testar requisição de dados com hook externo.
      useEffect(() => {
        async function fetchData() {
          const response = await fetch(URL);
          const data = await response.json();

          setProducts(data);
        }

        fetchData();

      }, []); // => Dependencia [] vazia, significa que este método executára somente 1 vez.
  */

  //Resgatando dados com hook externo
  const { data: items, httpConfig, loading, error } = useFetch(URL);

  // [POST] - Adicionar dados:
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price }; // Desestrutura os dados dos inputs [form].

    /** Bloco comentado para usar a requisição refatorada, linha 51.
       const response = await fetch(URL, {
         method: "POST",
         headers: { "Content-Type": "Application/json" },
         body: JSON.stringify(product)
         })
       
      // Carregamento dinâmico
      // Converte o Json texto para Object.
      const addedProduct = await response.json();
      
      // Seta o novo produto na lista de produtos.
      setProducts((prevProducts) => [...prevProducts, addedProduct])
      **/

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };



  return (
    <div className="App">
      <h1>Tabalhando com Consumo de api.</h1>
      
      {/* usando Loading */}
      {loading && <p>Carregando dados...</p>}

      {/* Exibe o erro */}
      {error && <p>{error}</p>}

      {!loading &&
        <ul>
          {items && items.map(product => (
            <li key={product.id}>{product.name} - R$: {product.price} </li>
          ))}
        </ul>
      }

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={
              (e) => setName(e.target.value)} />
          </label>

          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={
              (e) => setPrice(e.target.value)} />
          </label>

          {loading &&
            <input type="submit" disabled value="Criando..." />
          }
          {!loading &&
            <input type="submit" value="Criar produto" />
          }
        </form>
      </div>
    </div>
  );
}

export default App;
