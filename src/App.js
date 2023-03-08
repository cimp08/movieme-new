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
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Navbar />
        <div className='grow'>
          <Routes>
            <Route path='/' element={<Navigate to='/movies' />} />
            <Route path='/movies' element={<Navigate to='/movies/popular' />} />
            <Route path='/movies/:section' element={<MoviesPage />} />
            <Route
              path='/movies/details/:id'
              element={<MoviePage type='movie' />}
            />
            <Route path='/tv' element={<Tv />} />
            <Route path='/actors' element={<Actors />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
