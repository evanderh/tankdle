import Game from './Game';
import { getDailyTank } from '../core/tanks';

const tank = getDailyTank();

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Tankdle</h1>
      <Game tank={tank} />
    </div>
  );
};

export default App;