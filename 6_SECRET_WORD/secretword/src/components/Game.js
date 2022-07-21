import './Game.css';
import { useState, useRef } from 'react';


const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters,
    wrongLetters, guesses, score }) => {

    const [letter, setLetter] = useState("");
    /*O hook useRef pega a referência do elemento no DOM e salva numa variavel, este comportamento segue a mesma ideia do querySelector ou getElementById(), $(element) do jquery;*/
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter);

        setLetter("");
        letterInputRef.current.focus();
    }

    return (
        <div className='game'>
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe a palavra:</h1>

            <h3 className='tip'>
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>

            <div className="wordContainer">
                {
                    letters.map((letter, i) => guessedLetters.includes(letter)
                        ? (<span key={i} className="letter">{letter}</span>)
                        : (<span key={i} className="blankSquare"></span>)
                    )
                }
            </div>

            <div className="letterContainer">
                <p>Tente advinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="letter" maxLength='1' required
                        onChange={(e) => setLetter(e.target.value)}
                        ref={letterInputRef}
                        value={letter} />
                    {/* @param ref={} faz referência a variavel letterInputRef, ele se comporta como o getElementBy(), querySelector, no jquery é igual a $(element)*/}
                    <button>Jogar!</button>
                </form>
            </div>

            <div className="wrongLetterContainer">
                <p>Letras já utilizadas: </p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}> {letter},</span>
                ))}
            </div>

        </div>
    )
}

export default Game