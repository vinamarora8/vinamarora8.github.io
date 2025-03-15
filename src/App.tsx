import Header from './components/Header';
import Profile from './components/Profile';
import Publications from './components/Publications';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';

function App() {
    return (
        <FontLoader>
            <div className="container">
                <Header />
                <Profile />
                <Publications />
                <Footer />
            </div>
        </FontLoader>
    );
}

export default App;
