import { useState } from "react"


const CondicionalRender = () => {
    const [x] = useState(false);

    const [usuario, setUsuario] = useState(
        { nome: 'JhonathanTeste', idade: 26 }
    );

    return (
        <div>
            <hr />
            <h4>Hooks/UseState/Renderizando Condicionais</h4>
            <div>
                <h5>Condicional simples.</h5>
                {x && <p>Se x é igual TRUE, então será exibido o valor VERDADEIRO.</p>}
                {!x && <p>Se x é igual FALSE, então será exibido o valor FALSO.</p>}
            </div>
            <div>
                <h5>Condicional if ternário</h5>
                {usuario.nome === 'Jhonathan'
                    ? (
                        <p>O usuário encontrado é Jhonathan.</p>
                    )
                    : (
                        <p>O usuário encontrado não é Jhonathan, encontramos o usuário: {usuario.nome}.</p>
                    )}

                <button onClick={() => setUsuario(
                    {nome: 'Wingles', idade: 26 })}>
                    Alterar nome de usuário</button>
            </div>
        </div>
    )
}

export default CondicionalRender