import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './containers/home/home';
import MovieList from './containers/movieList/movieList';
import MovieLikeList from './containers/movieLikeList/movieLikeList';
import MovieBlockList from './containers/movieBlockList/movieBlockList';
import NavMenu from './components/navMenu';
import {actions} from './actionCreators';
import {connect} from 'react-redux';


function App(props) {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="fst-italic">Top Rated Movies List</h1>
        </header>
        <div className="nav-container-menu">
          <NavMenu></NavMenu>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movieList" element={<MovieList {...props}/>}/>
          <Route path="/movieBlockList" element={<MovieBlockList {...props}/>}/>
          <Route path="/movieLikeList" element={<MovieLikeList {...props}/>}/>
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
  blockedList: state.blockedList,
  loadedPages: state.loadedPages,
  loadedData: state.loadedData,
  pageNumber: state.pageNumber,
  sortByName: state.sortByName,
  order: state.order
});

const mapDispatchToProps = (dispatch) => {
  return {
      // click sorting buttons will change the fetchName parameter
      // click pageNumber will change the page Number
      // After changing , call this function
      likeMovie: (movie) => dispatch(actions.likeMovie(movie)),
      blockMovie: (movie) => dispatch(actions.blockMovie(movie)),
      fetchMovies: (name, number, order) => dispatch(actions.fetchMovies(name, number, order)),
      loadData: (number) => dispatch(actions.loadData(number)),
      deleteLikedMovie: (index) => dispatch(actions.deleteLikedMovie(index)),
      deleteBlockedMovie: (index) => dispatch(actions.deleteBlockedMovie(index)),
      blockLikedMovie:(index)=> dispatch(actions.blockLikedMovie(index)),
      likeBlockedMovie: (index) => dispatch(actions.likeBlockedMovie(index)),
      fetchSortMovies: (name, number, order) => dispatch(actions.fetchSortMovies(name, number, order))
      
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
