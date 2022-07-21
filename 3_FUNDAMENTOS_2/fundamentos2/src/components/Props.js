import React from 'react'

const Props = (properties) => {
    return (
        <div>
            <hr />
      <h3>Trabalhando com Props.</h3>
            <p>
                O nameValorDireto recebido do componente pai é: {properties.objs.nameValorDireto}
            </p>
            <p>
                O nomaVariavel recebido do componente pai é: {properties.objs.nomaVariavel}
            </p>
            <p>
                O nomeUseState recebido do componente pai é: {
                    properties.objs.nomeUseState}
            </p>
        </div>
    )
}

export default Props