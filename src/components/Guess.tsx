import { Grid2 } from "@mui/material";
import GuessTile from "./GuessTile";
import { tanks } from "../core/tanks";
import { Tank } from "../core/types";

interface Props {
  guess: string;
  answerTank: Tank;
};

const GuessFeedback = ({ guess, answerTank }: Props) => {
  const guessTank = tanks.find(t => t.name === guess);
  if (!guessTank) {
    return;
  }

  return (
    <div>
      <h3>{guess}</h3>
      <Grid2 container spacing={1}>
        <GuessTile
          field="type"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="year"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="origin"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="count"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="mass"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="engine"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="range"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <GuessTile
          field="speed"
          guessTank={guessTank}
          answerTank={answerTank}
        />
      </Grid2>
    </div>
  );
};

export default GuessFeedback;
