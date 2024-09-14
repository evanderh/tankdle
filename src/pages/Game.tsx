import { useEffect, useState } from 'react';
import { useSearchParams  } from 'react-router-dom';

import ImageDisplay from '../components/ImageDisplay';
import TankInput from '../components/TankInput';
import GuessesList from '../components/GuessesList';
import Header from '../components/Header';
import { GameStatus } from '../core/types';
import { getTankImage, getDaysSinceStart, getGuesses, getGuessKey, getGameStatus } from '../core/game';
import { tanks } from '../core/tanks';

const tankNames = tanks.map(tank => tank.name);

const Game = () => {
  const [searchParams, ] = useSearchParams();
  const tankNumber = searchParams.get('tank');

  const tankImage = getTankImage(tankNumber);
  const guessesKey = getGuessKey(tankNumber || getDaysSinceStart()+1);

  const [guesses, setGuesses] = useState<string[]>(getGuesses(guessesKey));
  const [status, setStatus] = useState<GameStatus>(getGameStatus(guesses, tankImage));

  const handleGuessSubmit = (guess: string) => {
    if (guess && guess in tankNames) {
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
