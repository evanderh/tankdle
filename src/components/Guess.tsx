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
      <h3 style={{ paddingTop: '0.5em', paddingBottom: '1em' }}>{guess}</h3>
      <Grid2 container spacing={1}>
        <GuessTile field="type" guess={guessTank} correct={answerTank} />
        <GuessTile field="year" guess={guessTank} correct={answerTank} />
        <GuessTile field="origin" guess={guessTank} correct={answerTank} />
        <GuessTile field="count" guess={guessTank} correct={answerTank} />
        <GuessTile field="mass" guess={guessTank} correct={answerTank} />
        <GuessTile field="engine" guess={guessTank} correct={answerTank} />
        <GuessTile field="range" guess={guessTank} correct={answerTank} />
        <GuessTile field="speed" guess={guessTank} correct={answerTank} />
      </Grid2>
    </div>
  );
};

export default GuessFeedback;
