const FirstComponent = () => {

    // templateExpression
    const nome = "Jhonathan";

    const data = {
        idade: 26,
        funcao: 'Programador'
    }

    return (
        <div>
            <hr />
            <h1>Teste com templateExpression</h1>
            <h3>Meu nome é {nome}</h3>
            <h3>Minha idade é {data.idade}</h3>
            <h3>Minha profissão é {data.funcao}</h3>
            <h3>Soma de 4 mais 4 é: { 4 + 4 }</h3>
            <h3>{console.log("teste")}</h3>
        </div>
    );
}

export default FirstComponent;