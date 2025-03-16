import Header from './components/Header';
import Profile from './components/Profile';
import Publications from './components/Publications';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';
import Gutter from './components/Gutter';

function App() {
  return (
    <div className="app">
      <Gutter />
      <div className="container">
        <FontLoader>
          <Header />
          <Profile />
          <Publications />
          <Footer />
        </FontLoader>
      </div>
      <Gutter />
    </div>
  );
}

export default App;
