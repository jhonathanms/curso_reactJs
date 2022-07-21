import React from 'react'

const Childrens = ({children}) => {
  return (
      <div>
          <hr />
          <h2>Trabalhando com componentes filhos</h2>
          <p>Propriedades embutido no componente Children.</p>
          {children}
    </div>
  )
}

export default Childrens