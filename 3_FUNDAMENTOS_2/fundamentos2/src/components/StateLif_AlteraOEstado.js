import React from 'react'

const StateLif_AlteraOEstado = ({ functionAlteraMensagem }) => {
  const mensagem = ["oi", "Olá", "Oi tudo bem?"];

  return (
    <div>
      <button onClick={() => functionAlteraMensagem(mensagem[0])}>Oi</button>
      <button onClick={() => functionAlteraMensagem(mensagem[1])}>Olá</button>
      <button onClick={() => functionAlteraMensagem(mensagem[2])}>Olá Tudo bem?</button>
    </div>
  )
}

export default StateLif_AlteraOEstado