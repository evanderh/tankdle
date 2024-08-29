import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tanks from './pages/Tanks';

const App = () => {
  return (
    <div className="App">
      <h1>Tankdle</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tanks" element={<Tanks />} />
      </Routes>
    </div>
  );
};

export default App;
