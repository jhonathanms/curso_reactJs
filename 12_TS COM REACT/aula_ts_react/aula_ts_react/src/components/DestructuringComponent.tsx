import React from 'react'

type Props = {
    codigo: number;
    descricao: string
    status: boolean
    observacoes: string[];
}

const DestructuringComponent = ({ codigo, descricao, status, observacoes }: Props) => {
    return (
        <div>
            <h1>DestructuringComponent</h1>
            <ul>
                <li>Código: {codigo}</li>
                <li>Descrição: {descricao}</li>
                <li>Ativo: {status}</li>
                <li>
                    <span>Observações:</span>
                    <div>
                        {observacoes.map((obs) => (
                            <ul>
                            <li><span>{ obs }</span></li>
                              </ul>  
                            )) }
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DestructuringComponent