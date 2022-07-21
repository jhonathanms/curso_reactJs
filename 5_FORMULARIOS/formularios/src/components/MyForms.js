import React, { useState } from 'react'
import '../index.css'

const MyForms = ({ user }) => {

    // Gerenciamento de entrada de dados:
    const [login, setLogin] = useState(user ? user.login : '');
    const [senha, setSenha] = useState(user ? user.senha : '');
    const [obs, setObs] = useState(user ? user.obs : '');
    const [estado, setEstado] = useState();

    const handleChange = (e) => setLogin(e.target.value);
    console.log(login);

    // Chamada inline
    console.log(senha);

    // Enviando um formulario
    // Adicionar onSubmit na tag de forme passar uma função que realizará o envio. Adicionar preventDefault para retirar o carregamento da página.

    const handlerSubmit = (e) => {
        e.preventDefault(); // Remove a atualização da pagina.
        console.log("Enviando fomulário");
        console.log("login: " + login + " " + "senha: " + senha)
        console.log(obs)
        console.log(estado) 
        setLogin('');
        setSenha('');
        setObs('');
        setEstado('');
        document.getElementById('estado').selectedIndex = 0;
    }

    // Controlled Inputs:
    // Deve criar uma prop Que simulará os dados retornados de uma api
    // Inicializa o hooks, useState() com os valores da prop.
    // Adiciona o atributo value nos inputs.

    return (
        <div>
            <h1>Trabalhando com formulários</h1>
            <form className='formulario' onSubmit={handlerSubmit}>
                <div>
                    <h2>Login</h2>
                    <div className='login'>
                        <label htmlFor="nome">Login: </label>
                        <input type="text" name="nome" id="nome" placeholder='exempo@gmail.com'
                            onChange={handleChange}
                            value={login} autoFocus/>
                    </div>

                    <div className='senha'>
                        <label>
                            <span>Senha:</span>
                            <input type='password' name="senha" id="senha" placeholder='********'
                                onChange={(e) => setSenha(e.target.value)}
                                value={senha} />
                            {/* Chamada inline */}

                        </label>
                    </div>

                    <div>
                        <textarea name="obs" placeholder='Observações' onChange={(e) => setObs(e.target.value)} value={obs}></textarea>
                    </div>

                    {/* Utilizando SELECT (DropDown)*/}
                    <select name="Estado" id='estado' onChange={(e) => setEstado(e.target.value)}>
                        <option value="BA">Bahia</option>
                        <option value="SE">Sergipe</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                    </select>

                    <div id='btn-login'>
                        <input type="submit" value="Entrar"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyForms