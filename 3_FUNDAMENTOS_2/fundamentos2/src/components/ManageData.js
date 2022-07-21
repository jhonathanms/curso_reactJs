import {useState} from 'react'

const ManageData = () => {
    
// Este valor não é renderizado em tela quando sofre uma alteração em tempo de execução.
let valorVariavel = 10;
console.log(valorVariavel);

/*  Declaraçao de um hooks de estados. 
@param number = valor da variavel original 
@param setNumber = valor da variavel alterada. (Novo valor);
@function useState = Pode ser inicializada com o parametro de origem, 
ex. o number incializará com 50;
**/
const [number, setNumber] = useState(50);
    console.log("valor do useState inicial: " + number);
    
    return (
        <div>
            <hr />
            <h1>Trabalhando com Hooks</h1>
            <h3>UseState</h3>
            <div>
                <h5>Valor: {valorVariavel}</h5>
                <button onClick={() => (valorVariavel = 10)}>alterar variavel</button>
            </div>
            <div>
                <h5>Valor Usestate: {number}</h5>
                <button onClick={() => setNumber(100)}>alterar useState</button>
            </div>
        </div>
    )
}

export default ManageData