import { useSearchParams  } from 'react-router-dom';
import Game from '../components/Game';
import { getTankImage } from '../core/tanks';


const Home: React.FC = () => {
  const [searchParams, ] = useSearchParams();
  const tankImage = getTankImage(searchParams.get('tank'));

  return <Game tankImage={tankImage} />;
};

export default Home;
