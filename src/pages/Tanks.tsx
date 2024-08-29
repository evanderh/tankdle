import { tankImages } from '../core/tanks';
import { Link } from 'react-router-dom';

const Tanks = () => {
  return (
    <div>
      <h3>Play any tank</h3>
      {
        tankImages.map((tankImage, ix) => (
          <Link
            to={`/?tank=${ix+1}`}
            key={tankImage.tank.name}
          >{ix+1}</Link>
        ))
      }
    </div>
  );
};

export default Tanks;