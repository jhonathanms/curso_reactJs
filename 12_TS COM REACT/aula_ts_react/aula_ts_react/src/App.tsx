import { createContext } from "react";
import DestructuringComponent from "./components/DestructuringComponent";
import EnumComponents, {CategoriasEnum} from "./components/EnumComponents";
import TesteComponent from "./components/PrimeiroComponent";
import SegunComponent from "./components/SegunComponent";
import UseStateComponent from "./components/UseStateComponent";
import Context from "./Context/Context";

// 2- Passo
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

// 3- Passo: Criar o createContext. O contexto precisa ser exportado
export const AppContext = createContext<IAppContext | null> (null);


function App() {

// Variaveis:
  const nome: string = "Jhonathan";
  const idade: number = 27;
  const ehCrente: boolean = true;

  const getNome = (nome: String): String => {
    return "Olá " + nome + ".";
  }

// 1- Passo
  const contextValue:IAppContext = {
    language: "JavaScript",
    framework: "EXpress",
    projects: 5,
  }

  return (
    // 4- Passo
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScriptcom react</h1>
      <h2>Nome { nome }</h2>
      <h2>Idade { idade }</h2>
      {ehCrente && <p>Glória a Deus!!</p>}
      <div>
        <span>Chamada de função: { getNome("jhoanthan") }</span>
      </div>

      <TesteComponent />
      <SegunComponent name="Props_Jhonathan" />
      <DestructuringComponent codigo={123456} descricao="PRODUTO 01" status={true} observacoes={["GELO", "LIMÃO", "SEM AÇUCAR"]} />
      <UseStateComponent />
      <EnumComponents categorias={CategoriasEnum.JS} />
      <Context />
        
      </div>
    </AppContext.Provider>
  );
}

export default App;
