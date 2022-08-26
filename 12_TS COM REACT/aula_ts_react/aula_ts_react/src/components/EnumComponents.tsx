import React from 'react'

type Props = {
    categorias: CategoriasEnum;
}

export enum CategoriasEnum {
    JS = "javaScript", TS = "TypeScript", P = "Python",
}

const EnumComponents = ({categorias}:Props) => {
  return (
      <div>
          <h1>Usando Enums</h1>
          <h3>CategoriaEnum: {categorias}</h3>
    </div>
  )
}

export default EnumComponents