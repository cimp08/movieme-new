import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/movie/Movies';
import Tv from './components/tv/Tv';
import Actors from './components/actors/Actors';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/actors' element={<Actors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
