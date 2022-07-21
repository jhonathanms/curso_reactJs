import React from 'react'

const Fragments = ({compPai}) => {
    return (
        // Com as tags vazias, o react entende que esse componente deverá ser embutido no componente pai que originou a chamada. Esse conceito é chamado de fragments.
        // Essa metodologia resolve a obrigação do react que determina que todo componentes deve ser criado dentro de uma <div pai.
        <> 
            <hr />
            <h3>Trabalhando com Props.</h3>
            <h2>Fragmento embutido no componente PAI {compPai}</h2>
            
        </>
    )
}

export default Fragments