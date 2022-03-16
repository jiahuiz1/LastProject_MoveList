import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './containers/home/home';
import MovieList from './containers/movieList/movieList';
import MovieLikeList from './containers/movieLikeList/movieLikeList';
import MovieBlockList from './containers/movieBlockList/movieBlockList';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Top Rated Movies List</h1>
        </header>
        <div className="nav-container-menu">
          <nav className="nav-container-menu-items">
              <Link className="btn btn-primary btn-lg" role="button" to="/">
                Home
              </Link>
              <Link
                className="btn btn-primary btn-lg"
                role="button"
                to="/movieList"
              >
                Movie List
              </Link>
              <Link
                className="btn btn-primary btn-lg"
                role="button"
                to="/movieBlockList"
              >
                Movie Block List
              </Link>
              <Link
                className="btn btn-primary btn-lg"
                role="button"
                to="/movieLikeList"
              >
                Movie Like List
              </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movieList" element={<MovieList/>}/>
          <Route path="/movieBlockList" element={<MovieBlockList/>}/>
          <Route path="/movieLikeList" element={<MovieLikeList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
