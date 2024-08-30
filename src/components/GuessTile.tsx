import { Grid2, Paper } from "@mui/material";
import { Tank } from "../core/tanks";

function renderField(tank: Tank, field: keyof(Tank)) {
  switch (field) {
    case 'count':
      return `${tank[field]} produced`
    case 'mass':
      return `${tank[field]} tons`
    case 'engine':
      return `${tank[field]} horsepower`
    case 'range':
      return `Range: ${tank[field][0]} km  (${tank[field][1]} mi)`
    case 'speed':
      return `Speed: ${tank[field][0]} km/h  (${tank[field][1]} mi/h)`
    default:
      return tank[field];
  }
}

interface TileProps {
  field: keyof(Tank),
  guessTank: Tank,
  answerTank: Tank,
};

const GuessTile = ({ field, guessTank, answerTank }: TileProps) => {
  return (
    <Grid2 size={3}>
      <Paper
        elevation={4}
        style={{
          border: `2px solid ${guessTank[field] === answerTank[field] ? 'green' : 'red'}`,
          height: '3em',
          lineHeight: '3em',
        }}
      >
        {renderField(guessTank, field)}
      </Paper>
    </Grid2>
  );
};

export default GuessTile;
