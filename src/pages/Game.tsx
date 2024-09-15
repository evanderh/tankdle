import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ImageDisplay from '../components/ImageDisplay';
import TankInput from '../components/TankInput';
import GuessesList from '../components/GuessesList';
import Header from '../components/Header';
import { GameStatus } from '../core/types';
import { getTankImage, getGuesses, getGuessKey, getGameStatus } from '../core/game';
import { tankNames } from '../core/tanks';

const Game = () => {
  const [searchParams, ] = useSearchParams();
  const date = searchParams.get('date');

  const tankImage = getTankImage(date);
  const guessesKey = getGuessKey(date);

  const [guesses, setGuesses] = useState<string[]>(getGuesses(guessesKey));
  const [status, setStatus] = useState<GameStatus>(getGameStatus(guesses, tankImage));

  const handleGuessSubmit = (guess: string) => {
    if (guess && tankNames.includes(guess)) {
      setGuesses([...guesses, guess]);
    }
  };

  const clearGuesses = () => setGuesses([]);

  useEffect(() => {
    setGuesses(getGuesses(guessesKey));
  }, [guessesKey]);

  useEffect(() => {
    setStatus(getGameStatus(guesses, tankImage));
    localStorage.setItem(guessesKey, JSON.stringify(guesses));
  }, [guesses]);

  return (
    <>
      <Header clearGuesses={clearGuesses} />
      <ImageDisplay
        imageUrl={tankImage.url}
        attribution={tankImage.attribution}
        status={status}
      />
      {status === GameStatus.win &&
        <h1>Correct!</h1>
      }
      {status === GameStatus.loss &&
        <h1>Better luck next time!</h1>
      }
      {status !== GameStatus.playing &&
        <h4>
          The answer was:
          {' '}
          <a href={tankImage.tank.url}>{tankImage.tank.name}</a>
        </h4>
      }

      <TankInput
        onGuessSubmit={handleGuessSubmit}
        numGuesses={guesses.length}
        isPlaying={status === GameStatus.playing}
      />

      <GuessesList
        guesses={guesses}
        tank={tankImage.tank}
      />
    </>
  );
};

export default Game;
