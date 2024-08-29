export const checkGuess = (userGuess: string, correctAnswer: string): string => {
  if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
    return 'Correct!';
  }
  return 'Try again!';
};
