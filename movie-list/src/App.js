import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './containers/home/home';
import MovieList from './containers/movieList/movieList';
import MovieLikeList from './containers/movieLikeList/movieLikeList';
import MovieBlockList from './containers/movieBlockList/movieBlockList';
import {actions} from './actionCreators';
import {connect} from 'react-redux';

function App(props) {
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
          <Route path="/movieList" element={<MovieList {...props}/>}/>
          <Route path="/movieList" element={<MovieList/>}/>
          <Route path="/movieBlockList" element={<MovieBlockList/>}/>
          <Route path="/movieLikeList" element={<MovieLikeList/>}/>
        </Routes>
      </Router>
    </div>
  );
}


const mapStateToProps = (state) => ({
  initialPageNumber: state.initialPageNumber,
  initialTotalResults: state.initialTotalResults,
  initialTotalPages: state.initialTotalResults,
  movieList: state.movieList,
  likedList: state.likedList,
  blockedList: state.blockedList
});

const mapDispatchToProps = (dispatch) => {
  return {
      // click sorting buttons will change the fetchName parameter
      // click pageNumber will change the page Number
      // After changing , call this function
      likeMovie: (movie) => dispatch(actions.likeMovie(movie)),
      blockMovie: (movie) => dispatch(actions.blockMovie(movie)),
      fetchMovies: (name, number) => dispatch(actions.fetchMovies(name, number))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
