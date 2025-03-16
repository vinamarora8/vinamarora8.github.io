import Header from './components/Header';
import Profile from './components/Profile';
import Publications from './components/Publications';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';

function App() {
  return (
    <div className="container">
      <FontLoader>
          <Header />
          <Profile />
          <Publications />
          <Footer />
      </FontLoader>
    </div>
  );
}

export default App;
