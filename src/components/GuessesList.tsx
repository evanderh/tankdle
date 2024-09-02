import { Divider, Stack } from "@mui/material";
import { Tank } from "../core/types";
import GuessGrid from "./GuessGrid";

interface Props {
  guesses: string[];
  tank: Tank;
}

const GuessesList = ({ guesses, tank }: Props) => {
  return (
    <Stack
      divider={<Divider flexItem />}
      spacing={1}
    >
      {guesses.slice().reverse().map(guess => (
        <GuessGrid
          key={guess}
          guess={guess}
          answerTank={tank}
        />
      ))}
    </Stack>
  );
};

export default GuessesList;