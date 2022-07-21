import React from 'react'

const PropsComLooping = ({id, nome, valor }) => {
    return (
        <div>
            <ul>
                <li>
                    <p>
                        <strong>Código: </strong> {id}
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Cescrição: </strong> {nome}
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Valor: </strong> {valor}
                    </p>
                </li>
            </ul>
            <br />
        </div>
    )
}

export default PropsComLooping