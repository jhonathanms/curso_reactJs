import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Jhonathan", "Wingles", "Laura", "Teste"]);

    const [listObjetos, setListObjetos] = useState([
        { id: 1, nome: "Jhonathan", idade: 26 },
        { id: 2, nome: "Wingles", idade: 26 },
        { id: 3, nome: "Laura", idade: 5 }
    ]);

    const deletarItem = () => {
        var indexAleatorio = Math.floor(Math.random() * 4);

        setListObjetos((prevListObjetos) => {
            return prevListObjetos.filter((item) => indexAleatorio !== item.id);
        })
    }

    return (
        <div>
            <hr />
            <h3>Hooks/UseState/ Renderizando listas</h3>

            <div>
                <h4>Lista sem key, é gerado erro no console, mais renderiza</h4>
                <ul>
                    {list.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h4>Lista com Key sendo o index do array, não é gerado erro no console, porém não é a melhor pratica.</h4>
                <div>
                    <ul>
                        {list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h4>Lista com Key sendo o index do array, não é gerado erro no console, porém não é a melhor pratica.</h4>
                <ul>
                    {listObjetos.map(item => (
                        <li key={item.id}>
                            {item.nome} | {item.idade}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4>Hooks/UseState/ Removendo itens e renderizando os componentes que possuem vinculo com a lista de objetos</h4>
                <button onClick={deletarItem}>deletar aleatoriamente</button>
            </div>
        </div>
    )
}

export default ListRender