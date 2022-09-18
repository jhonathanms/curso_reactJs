import React, { useContext, useState, ChangeEvent } from 'react';
import { AppContext } from '../App'

// Não precisará desta interface pq não usarei as props.
interface IAppProps {
}

export default function App() {

  const detalhes = useContext(AppContext);
  const [id, setId] = useState<string | null>(null);
  const [nome, setNome] = useState<string | null>(null);
  const [idade, setIdade] = useState<number | null>(null);

  return (
    <>
      {detalhes && (
        <div>
          <hr />
          <h1>Contex api</h1>
          <h2>Linguagem: {detalhes.language}</h2>
          <h3>Framework: {detalhes.framework}</h3>
          <h4>Projects: {detalhes.projects}</h4>
          <div>
            <span>Detalhes do aluno: </span>
            <ul>
              <li><h4>Id: {detalhes.aluno?.id}</h4>
                <input type="text" value={id?id:""} onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)} />
              </li>
              <li><h4>Nome: {detalhes.aluno?.nome}</h4>
              <input type="text" value={nome?nome:""} onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
              </li>
              <li><h4>Idade: {detalhes.aluno?.idade}</h4>
              <input type="text" value={idade?idade:1} onChange={(e:ChangeEvent<HTMLInputElement>) => setIdade(parseInt(e.target.value))} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
