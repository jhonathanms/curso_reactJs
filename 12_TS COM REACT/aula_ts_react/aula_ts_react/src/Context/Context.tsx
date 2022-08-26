import React, { useContext } from 'react';
import {AppContext} from '../App'

interface IAppProps {
}

export default function App(props: IAppProps) {
    
    const detalhes = useContext(AppContext);


  return (
    <>
          {detalhes && (
              <div>
                  <hr />
                  <h1>Contex api</h1>
                  <h2>Linguagem: { detalhes.language }</h2>
                  <h3>Framework: { detalhes.framework }</h3>
                  <h4>Projects: { detalhes.projects }</h4>
              </div>
      )}
    </>
  );
}
