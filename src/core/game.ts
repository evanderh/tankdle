import { tankImages } from './tanks';
import { GameStatus } from './types';
import { TankImage } from "./types";

export const maxGuesses = 6;
export const startDate = new Date('2024-09-01');

export function getGameStatus(guesses: string[], tankImage: TankImage) {
  if (guesses[guesses.length - 1] === tankImage.tank.name) {
    return GameStatus.win;
  } else if (guesses.length >= maxGuesses) {
    return GameStatus.loss;
  }
  return GameStatus.playing;
};

export const getGuessKey = (n: string | number) => `guesses_${n}`;

export function getGuesses(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]') as string[];
};

export const getDaysSinceStart = () => {
  const today = new Date();
  const timeSince = today.getTime() - startDate.getTime();
  return Math.floor(timeSince / (1000 * 60 * 60 * 24));
};

export const getTankImage = (index: string | null): TankImage => {
  if (index) {
    const ix = Number(index) - 1;
    if (!Number.isNaN(ix)) {
      return tankImages[ix % tankImages.length];
    }
  }

  return tankImages[getDaysSinceStart() % tankImages.length];
};

export const getGamesWon = () => {
  let wins = 0;
  for (let day = 0; day < tankImages.length; ++day) {
    const guessesKey = getGuessKey(day+1);
    const guesses = JSON.parse(localStorage.getItem(guessesKey) || '[]');
    const gameStatus = getGameStatus(guesses, tankImages[day]);
    if (gameStatus === GameStatus.win) {
      wins += 1;
    }
  }
  return wins;
};

export const getGamesPlayed = () => {
  const guessKeys = Object.keys(localStorage);
  let played = 0;
  for (const key of guessKeys) {
    const guesses = JSON.parse(localStorage.getItem(key) || '[]');
    if (guesses.length > 0) {
      played += 1;
    }
  }
  return played;
};

export const getDayStreak = () => {
  let streak = 0;
  for (let day = getDaysSinceStart(); day >= 0; day--) {
    const guessesKey = getGuessKey(day+1);
    const guesses = JSON.parse(localStorage.getItem(guessesKey) || '[]');
    const gameStatus = getGameStatus(guesses, tankImages[day]);
    if (gameStatus !== GameStatus.playing) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
};

export const getWinStreak = () => {
  let streak = 0;
  for (let day = getDaysSinceStart(); day >= 0; day--) {
    const guessesKey = getGuessKey(day+1);
    const guesses = JSON.parse(localStorage.getItem(guessesKey) || '[]');
    const gameStatus = getGameStatus(guesses, tankImages[day]);
    if (gameStatus === GameStatus.win) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
};

