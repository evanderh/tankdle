import { useEffect, useState } from 'react';
import { useSearchParams  } from 'react-router-dom';

import ImageDisplay from '../components/ImageDisplay';
import TankInput from '../components/TankInput';
import GuessesList from '../components/GuessesList';
import { getTankImage } from '../core/tanks';
import { TankImage } from '../core/types';
import Header from '../components/Header';

export const maxGuesses = 6;
export enum GameStatus { playing, win, loss };

function getStatus(guesses: string[], tankImage: TankImage) {
  if (guesses[guesses.length-1] === tankImage.tank.name) {
    return GameStatus.win;
  } else if (guesses.length >= maxGuesses) {
    return GameStatus.loss;
  }
  return GameStatus.playing;
}

function getGuesses(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]') as string[];
}

const Game = () => {
  const [searchParams, ] = useSearchParams();
  const tankNumber = searchParams.get('tank');
  const guessesKey = `tank_guesses_${tankNumber}`;

  const tankImage = getTankImage(tankNumber);
  const [guesses, setGuesses] = useState<string[]>(getGuesses(guessesKey));
  const [status, setStatus] = useState<GameStatus>(getStatus(guesses, tankImage));

  const handleGuessSubmit = (guess: string) => setGuesses([...guesses, guess]);
  const clearGuesses = () => setGuesses([]);

  useEffect(() => {
    setGuesses(getGuesses(guessesKey))
  }, [guessesKey]);

  useEffect(() => {
    setStatus(getStatus(guesses, tankImage));
    localStorage.setItem(guessesKey, JSON.stringify(guesses))
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
