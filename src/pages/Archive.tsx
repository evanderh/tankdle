import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { tankImages } from '../core/tanks';

const Archive = () => {
  return (
    <div>
      <h3>Play any tank</h3>
      {
        tankImages.map((tankImage, ix) => (
          <MuiLink
            component={RouterLink}
            to={`/?tank=${ix+1}`}
            key={tankImage.tank.name}
            style={{ margin: '1rem' }}
          >{ix+1}</MuiLink>
        ))
      }
    </div>
  );
};

export default Archive;
