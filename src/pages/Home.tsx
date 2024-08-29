import { Link, useSearchParams } from 'react-router-dom';
import Game from '../components/Game';
import { getTank } from '../core/tanks';


const Home: React.FC = () => {
  const [searchParams, ] = useSearchParams();
  const tank = getTank(searchParams.get('tank'));

  return (
    <>
      <Game tank={tank} />
      <Link to="/tanks">Play any tank</Link>
    </>
  );
};

export default Home;
