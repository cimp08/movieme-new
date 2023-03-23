import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import Footer from './components/Footer';
import MoviePage from './pages/MoviePage';
import TvShowsPage from './pages/TvShowsPage';
import TvShowPage from './pages/TvShowPage';
import ActorsPage from './pages/ActorsPage';
import PeoplePage from './pages/PeoplePage';

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
            <Route path='/tv' element=<Navigate to='/tv/popular' /> />
            <Route path='/tv/:section' element={<TvShowsPage />} />
            <Route path='/tv/details/:id' element={<TvShowPage type='tv' />} />
            <Route path='/actors' element={<ActorsPage />} />
            <Route path='/people/:id' element={<PeoplePage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
