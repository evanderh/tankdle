import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { tankImages } from '../core/tanks';

const Archive = () => {
  return (
    <div>
      <h3>Play any tank</h3>
      <ul>
      {
        tankImages.map((tankImage, ix) => (
          <li key={tankImage.tank.name}>
            <MuiLink
              component={RouterLink}
              to={`/?tank=${ix+1}`}
              style={{ margin: '1rem' }}
            >{ix+1}</MuiLink>
          </li>
        ))
      }
      </ul>
    </div>
  );
};

export default Archive;
