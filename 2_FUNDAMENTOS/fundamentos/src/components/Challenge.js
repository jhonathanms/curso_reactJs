const Challenge = () => {
    let valor1 = 10;
    let valor2 = 40;
    let total = 0;

    const calcular = () => {
        total = valor1 + valor2
        return console.log(`valor total é: ${total}`)
    }

    return (
        <div>
            <h1>Atividade 2</h1>
            <h4>Soma dos Valores e impressão na tela após o click do botão.</h4>
            <hr />
            <p>Valor1: {valor1}</p>
            <p>Valor2: {valor2}</p>
            <br />
            <button onClick={calcular}>Calcular</button>
            <hr />
        </div>
    )
}
export default Challenge;