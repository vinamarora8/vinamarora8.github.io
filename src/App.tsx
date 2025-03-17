import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Publications from './components/Publications';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';
import Career from './components/Career';
import TailwindTest from './components/TailwindTest';

function App() {
  return (
    <Router>
      <div className="px-5 md:px-8">
        <div className="mx-auto my-8 w-full max-w-[900px]">
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
      </div>
    </Router>
  );
}

export default App;
