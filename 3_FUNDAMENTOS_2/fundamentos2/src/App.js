import './App.css';
import { useState } from 'react';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Props from './components/Props';
import PropsDestructuring from './components/PropsDestructuring';
import TrabalhandoComImagens from "./components/TrabalhandoComImagens"
import PropsComLooping from './components/PropsComLooping';
import Fragments from './components/Fragments';
import Childrens from './components/Childrens';
import PropsComFuncao from './components/PropsComFuncao';
import StateLif from './components/StateLif_RenderizaOEstado';
import StateLifAlteraOEstado from './components/StateLif_AlteraOEstado';
import UserDatails from './components/UserDatails';


function App() {
  const [nomeUseState] = useState("Laura");
  const nome = "Maria";
  const props = {
    nameValorDireto: "TesteDeProps",
    nomaVariavel: nome,
    nomeUseState: nomeUseState
  };

  const listaProdutos = [
    { id: '0001', nome: "Feijão", valor: 10.50 },
    { id: '0002', nome: "Arroz", valor: 12.99 },
    { id: '0003', nome: "Macarrão", valor: 4.00 },
    { id: '0004', nome: "Farinha", valor: 6.99 }
  ];

  const imprimirProdutos = () => {
    return listaProdutos.map((produto, i) => (
      <PropsComLooping
        key={i}
        id={produto.id}
        nome={produto.nome}
        valor={produto.valor} />
    ))
  }

  // Exemplo para stateLift
  const [mensagem, setMensagem] = useState("");
  const alterarMensagem = (msg) => { setMensagem(msg) };

  return (
    <div className="App">
      <TrabalhandoComImagens />
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <Props objs={props} />

      <hr />
      <h3>Reaproveitamento de componentes com props.</h3>
      <PropsDestructuring filha='Laura' esposa='Wingles' idade={26} familiaCrista={true} />
      <PropsDestructuring filha='Priscila' esposa='Uilma' idade={47} familiaCrista={true} />
      <PropsDestructuring filha='Fulana' esposa='Cicrana' idade={70} familiaCrista={false} />

      <hr />
      <h3>Reaproveitamento de componentes com props e looping</h3>
      {imprimirProdutos()}

      <Fragments compPai='div-App' />

      <Childrens>
        <p>testando filho.</p>
      </Childrens>

      <PropsComFuncao myFunction={() => console.log("Reaproveitamento de função. Props.")} />

      {/* Componente que renderiza o estado na tela. */}
      <StateLif msg={mensagem} />

      {/* Componente que altera o estado. */}
      <StateLifAlteraOEstado functionAlteraMensagem={alterarMensagem} />
      
      {/* Atividade*/}
    
      <UserDatails />

    </div>
  );
}

export default App;
