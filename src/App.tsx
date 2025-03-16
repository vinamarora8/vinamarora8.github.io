import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Publications from './components/Publications';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <div className="container">
        <FontLoader>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Profile />
                  <Publications />
                </>
              }
            />
            <Route path="/career" element={<Career />} />
          </Routes>
          <Footer />
        </FontLoader>
      </div>
    </Router>
  );
}

export default App;
