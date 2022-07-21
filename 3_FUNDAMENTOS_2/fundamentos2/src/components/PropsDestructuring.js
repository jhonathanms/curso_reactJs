import React from 'react'

const Props = ({filha, esposa, idade, familiaCrista}) => {
    return (
        <div>
            <h4>
                Minha filha se chama: {filha}
            </h4>
            <h4>
                Minha esposa se chama: {esposa}
            </h4>
            <h4>
                Minha idade é: {idade}
            </h4>
            {familiaCrista && <p>É uma familia cristã.</p>}
        </div>
    )
}

export default Props