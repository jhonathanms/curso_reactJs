import React from 'react'

type Props = {
    name: string
}

const SegunComponent = (props: Props) => {
  return (
      <div>
          <h3>Meu segundo Component</h3>
          <p>O Nome da props é: <strong>{ props.name }</strong></p>
    </div>
  )
}

export default SegunComponent