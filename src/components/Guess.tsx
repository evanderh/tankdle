import { Grid2, Paper } from "@mui/material";
import { Tank, tanks } from "../core/tanks";

interface TileProps {
  field: keyof(Tank),
  guessTank: Tank,
  answerTank: Tank,
};

const Tile = ({ field, guessTank, answerTank }: TileProps) => {
  return (
    <Grid2 size="grow">
      <Paper
        elevation={4}
        style={{
          backgroundColor:
            guessTank[field] === answerTank[field] ? 'green' : 'red',
          height: '3em',
          lineHeight: '3em',
        }}
      >
        {guessTank[field]}
      </Paper>
    </Grid2>
  );
};

interface Props {
  guess: string;
  answerTank: Tank;
};

const Guess = ({ guess, answerTank }: Props) => {
  const guessTank = tanks.find(t => t.name === guess);
  if (!guessTank) {
    return;
  }

  return (
    <div>
      <h3>{guess}</h3>
      <Grid2 container spacing={1}>
        <Tile
          field="built"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <Tile
          field="type"
          guessTank={guessTank}
          answerTank={answerTank}
        />
        <Tile
          field="origin"
          guessTank={guessTank}
          answerTank={answerTank}
        />
      </Grid2>
    </div>
  );
};

export default Guess;
