import { tanks } from '../core/tanks';
import { Link } from 'react-router-dom';

const Tanks = () => {
  return (
    <div>
      <h3>Play any tank</h3>
      {
        tanks.map((tank, ix) => (
          <Link
            to={`/?tank=${ix+1}`}
            key={tank.name}
          >{ix+1}</Link>
        ))
      }
    </div>
  );
};

export default Tanks;