import React from "react";
import LikedMovie from "../../components/likedMovie";
import "./movieLikeList.css";
import PropTypes from 'prop-types';

// Liked List component, loop through the likedList to show all the liked movies
function MovieLikeList({data}){
  return (
    <div className="likedListPage">

      <header>
        <h2>Movie Like List</h2>
      </header>
      <main>
        <div className="likedMovieBlock">
          {data.likedList.map((item, index) => {
            return <LikedMovie key={index} info={data} item={item} index={index}/>
          })}
        </div>
      </main>
    </div>
  );
};

MovieLikeList.propTypes = {
  data: PropTypes.shape({
      movieList: PropTypes.arrayOf(PropTypes.object),
      likedList: PropTypes.arrayOf(PropTypes.object),
      blockedList: PropTypes.arrayOf(PropTypes.object),
      loadedPages: PropTypes.object,
      loadedData: PropTypes.arrayOf(PropTypes.object)
  })
}

export default MovieLikeList;
