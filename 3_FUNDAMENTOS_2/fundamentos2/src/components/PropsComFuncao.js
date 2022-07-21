import React from 'react'

const PropsComFuncao = ({myFunction}) => {
  return (
    <div>
      <p>Resultado no console.</p>
          <button onClick={myFunction}> Executar função
          </button>
    </div>
  )
}

export default PropsComFuncao