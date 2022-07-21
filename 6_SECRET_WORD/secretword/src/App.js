// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Dados
import { wordsList } from './data/words';

// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

const qntTentativas = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(qntTentativas);
  const [score, setScore] = useState(50);


  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(words).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  }, [words]);

  // Inicia o jogo secret word
  const startGame = useCallback(() => {
    // Limpar s estados
    clearLettersStates();
    //  Destructuring, recebe os valores que são retornados encapsulados no array { }
    const { word, category } = pickWordAndCategory();

    // Criar array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);
    console.log(word + " " + category);

    // Preencher os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Processar a letra de entrada.
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Checar se a letra já foi utilizada;
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }
    console.log(guessedLetters);
    console.log(wrongLetters);

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) =>
        [...actualGuessedLetters, normalizedLetter]) // Mesclando os dados do normalizedLetter com o array GuessedLetters; Nome da estrategia, spread operator.
    } else {
      setWrongLetters((actualWrongLetters) =>
        [...actualWrongLetters, normalizedLetter]);
      
      setGuesses((actualGuesses) => actualGuesses - 1)
    }    
  }

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0) {
       // resetar os estados das letras;
    clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // checar vitoria
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)] // Cria um Set de itens unicos.

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore => actualScore += 100))
      startGame();
    }
  }, [guessedLetters, letters, startGame])

  // Reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(qntTentativas);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
