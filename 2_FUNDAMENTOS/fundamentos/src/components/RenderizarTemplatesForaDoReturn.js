const RenderizarTemplatesForaDoReturn = () => {

    const funcaoTeste = (x) => {
        if (x) {
            return <h1>Renderização verdadeira</h1>
        } else {
            return <h1>Renderização falsa</h1>
        }
    }

    return (
        <div>
            {funcaoTeste(true)}
            {funcaoTeste(false)}
            <hr />
        </div>
    );
}
export default RenderizarTemplatesForaDoReturn;