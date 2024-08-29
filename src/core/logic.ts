import { Tank } from "./tanks";

const normalizeString = (str: string): string => {
  return str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const checkGuess = (userGuess: string, tank: Tank): string => {
  const normalizedGuess = normalizeString(userGuess);
  const normalizedAnswer = normalizeString(tank.name);

  if (normalizedGuess === normalizedAnswer) {
    return 'Correct!';
  }

  if (tank.aliases) {
    for (const alias of tank.aliases) {
      if (normalizedGuess === normalizeString(alias)) {
        return 'Correct!';
      }
    }
  }

  return 'Try again!';
};
