import { Link as RouterLink } from 'react-router-dom';
import { Grid2, Link as MuiLink, Paper, Typography } from '@mui/material';
import { tankImages } from '../core/tanks';
import { startDate } from "../core/game";
import Header from '../components/Header';

const Archive = () => {
  return (
    <>
      <Header />
      <Typography variant='h6' sx={{ margin: '1rem' }}>
        Archive
      </Typography>
      <Grid2 container spacing={2}>
      {tankImages.map((tankImage, ix) => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + ix);
        const dateString = date.toLocaleDateString();

        return (
          <Grid2
            size={{ xs: 4, sm: 3 }}
            key={tankImage.tank.name}
          >
            <Paper
              sx={{
                paddingY: '1em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              elevation={12}
            >
              <MuiLink
                component={RouterLink}
                to={`/?date=${encodeURIComponent(dateString)}`}
              >
                {dateString}
              </MuiLink>
            </Paper>
          </Grid2>
        )
      })}
      </Grid2>
    </>
  );
};

export default Archive;
