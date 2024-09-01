import { Divider, Stack } from "@mui/material";
import { Tank } from "../core/types";
import { GameStatus } from "./Game";
import GuessFeedback from "./Guess";

interface Props {
  guesses: string[];
  status: GameStatus;
  tank: Tank;
}

const Feedback = ({ guesses, status, tank }: Props) => {
  return (
    <div className="feedback">
      {status === 'win' &&
        <p>Correct!</p>
      }
      {status === 'loss' &&
        <p>Better luck next time!</p>
      }
      {status !== 'playing' &&
        <p>The answer was: {tank.name}</p>
      }

      <Stack
        divider={<Divider flexItem />}
        spacing={1}
      >
        {guesses.slice().reverse().map(guess => (
          <GuessFeedback
            key={guess}
            guess={guess}
            answerTank={tank}
          />
        ))}
      </Stack>

      <br />
    </div>
  );
};

export default Feedback;