import React from "react";
import LikedMovie from "../../components/likedMovie";
import "./movieLikeList.css"

function MovieLikeList(props){
  //console.log(props.likedList);
  //console.log(props.blockedList);
  return (
    <div className="likedListPage">
      <header>
        <h2>Movie Like List</h2>
      </header>
      <main>
        <div className="likedMovieBlock">
          {props.likedList.map((item, index) => {
            return <LikedMovie key={index} {...props} item={item} index={index}/>
          })}
        </div>
      </main>
    </div>
  );
};

export default MovieLikeList;
