import { tankImages } from './tanks';
import { GameStatus } from './types';
import { TankImage } from "./types";

export const maxGuesses = 6;
export const startDate = new Date('2024-09-01');
startDate.setHours(0);

export function getGameStatus(guesses: string[], tankImage: TankImage) {
  if (guesses[guesses.length - 1] === tankImage.tank.name) {
    return GameStatus.win;
  } else if (guesses.length >= maxGuesses) {
    return GameStatus.loss;
  }
  return GameStatus.playing;
};

export function getGameStatusByDate(date: Date) {
  const dateString = date.toLocaleDateString();
  const guessesKey = getGuessKey(dateString);
  const guesses = JSON.parse(localStorage.getItem(guessesKey) || '[]');
  const tankImage = getTankImage(dateString)
  return getGameStatus(guesses, tankImage);
}

export function getGuesses(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]') as string[];
};

export function getGuessKey(date: string | null) {
  return `guesses_${date || (new Date()).toLocaleDateString()}`;
}

export function getDaysSince(dateString: string | null) {
  const date = dateString ? new Date(dateString) : new Date();
  const timeSince = date.getTime() - startDate.getTime();
  return Math.floor(timeSince / (1000 * 60 * 60 * 24));
}

export function getTankImage(dateString: string | null): TankImage {
  return tankImages[getDaysSince(dateString) % tankImages.length];
};

export function getGamesWon() {
  let wins = 0;
  const date = new Date();
  while (date >= startDate) {
    const gameStatus = getGameStatusByDate(date);
    if (gameStatus === GameStatus.win) {
      wins += 1;
    }
    date.setDate(date.getDate() - 1);
  }
  return wins;
};

export function getGamesPlayed() {
  const guessKeys = Object.keys(localStorage);
  console.log(guessKeys)
  let played = 0;
  for (const key of guessKeys) {
    console.log(key, localStorage.getItem(key))
    try {
      const guesses = JSON.parse(localStorage.getItem(key) || '[]');
      if (guesses.length > 0) {
        played += 1;
      } 
    } catch (error) {
      console.warn(error);
    }
    
  }
  return played;
};

export function getDayStreak() {
  let streak = 0;
  const date = new Date();
  while (date >= startDate) {
    const gameStatus = getGameStatusByDate(date);
    if (gameStatus !== GameStatus.playing) {
      streak += 1;
    } else {
      break;
    }
    date.setDate(date.getDate() - 1);
  }
  return streak;
};

export function getWinStreak() {
  let streak = 0;
  const date = new Date();
  while (date >= startDate) {
    const gameStatus = getGameStatusByDate(date);
    if (gameStatus === GameStatus.win) {
      streak += 1;
    } else {
      break;
    }
    date.setDate(date.getDate() - 1);
  }
  return streak;
};
