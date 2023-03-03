import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import Tv from './components/tv/Tv';
import Actors from './components/actors/Actors';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to='/movies' />} />
            <Route path='/movies' element={<Navigate to='/movies/popular' />} />
            <Route path='/movies/:section' element={<MoviesPage />} />
            <Route path='/tv' element={<Tv />} />
            <Route path='/actors' element={<Actors />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
