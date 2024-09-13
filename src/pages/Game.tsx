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

const Game = () => {
  const [searchParams, ] = useSearchParams();
  const tankImage = getTankImage(searchParams.get('tank'));

  const store = JSON.parse(localStorage.getItem('guesses') || '[]')
  const [guesses, setGuesses] = useState<string[]>(store);
  const [status, setStatus] = useState<GameStatus>(getStatus(guesses, tankImage));

  const handleGuessSubmit = (guess: string) => setGuesses([...guesses, guess]);
  const clearGuesses = () => setGuesses([]);

  useEffect(() => {
    setStatus(getStatus(guesses, tankImage));
    localStorage.setItem('guesses', JSON.stringify(guesses))
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
