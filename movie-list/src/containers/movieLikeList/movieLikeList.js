import React from "react";
import LikedMovie from "../../components/likedMovie";
import "./movieLikeList.css"

// Loop through the likedList in global store
// print all the liked movies
function MovieLikeList(props){
  //console.log(props.likedList);
  return (
    <div>
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
