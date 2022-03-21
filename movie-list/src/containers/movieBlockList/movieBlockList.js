import React from "react";
import BlockedMovie from "../../components/blockedMovie";
import "./movieBlockList.css";
import PropTypes from 'prop-types';

// Blocked List component, loop through the blockedList to show all the blocked movies
function MovieBlockList({data}){
  return (
    <div className="blockListPage">
      <header>
        <h2>Movie Block List</h2>
      </header>
      <main>
        <div className="blockMovieBlock">
          {data.blockedList.map((item, index) => {
            return <BlockedMovie key={index} info={data} item={item} index={index}/>
          })}
        </div>
      </main>
    </div>
  );
};

MovieBlockList.propTypes = {
  data: PropTypes.shape({
      movieList: PropTypes.arrayOf(PropTypes.object),
      likedList: PropTypes.arrayOf(PropTypes.object),
      blockedList: PropTypes.arrayOf(PropTypes.object),
      loadedPages: PropTypes.object,
      loadedData: PropTypes.arrayOf(PropTypes.object)
  })
}

export default MovieBlockList;
