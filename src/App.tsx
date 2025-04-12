import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import FontLoader from './components/FontLoader';
import './styles/main.css';
import HomePage from './pages/Home';
import CareerPage from './pages/Career';

function App() {
  return (
    <Router>
      <div className="px-5 md:px-8">
        <div className="mx-auto my-8 w-full max-w-[900px]">
          <FontLoader>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/career" element={<CareerPage />} />
            </Routes>
          </FontLoader>
        </div>
      </div>
    </Router>
  );
}

export default App;
