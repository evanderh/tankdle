import { Link as RouterLink, useSearchParams  } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import Game from '../components/Game';
import { getTankImage } from '../core/tanks';


const Home: React.FC = () => {
  const [searchParams, ] = useSearchParams();
  const tankImage = getTankImage(searchParams.get('tank'));

  return (
    <>
      <Game tankImage={tankImage} />
      <MuiLink to="/tanks" component={RouterLink}>Play any tank</MuiLink>
    </>
  );
};

export default Home;
