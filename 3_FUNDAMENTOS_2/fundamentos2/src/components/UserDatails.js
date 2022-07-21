
const UserDatails = () => {
    const pessoas = [
        { id: "000001", nome: "Jhonathan", idade: 26, profissao: "programador" },
        { id: "000002", nome: "Martins", idade: 17, profissao: "Backend" },
        { id: "000003", nome: "Santos", idade: 27, profissao: "FullStack" }
    ];

    const validarEmissaoDeCnh =
        (idade) => idade >= 18
            ? "****Apto para tirar a CNH.*****"
            : "Inapto para tirar a CNH.";

    const carregarlistaTemplate = (pessoa) => {
        return <div>
            <ul>
                <li><strong>Nome:</strong> {pessoa.nome}</li>
                <li><strong>Idade:</strong> {pessoa.idade}</li>
                <li><strong>Profissão:</strong> {pessoa.profissao}</li>
                <p>{validarEmissaoDeCnh(pessoa.idade)}</p>
            </ul>
            <br />
        </div>
    }

    return (
        <div>
            <h2>Desafio 4</h2>
            {
                pessoas.map(pessoa => (
                    carregarlistaTemplate(pessoa)
                ))
            }
        </div>
    )
}

export default UserDatails