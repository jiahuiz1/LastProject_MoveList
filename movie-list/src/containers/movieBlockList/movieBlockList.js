import React from "react";

import BlockedMovie from "../../components/blockedMovie";
import "./movieBlockList.css"

function MovieBlockList(props){
  //console.log(props.likedList);
  //console.log(props.blockedList);
  return (
    <div className="blockListPage">
      <header>
        <h2>Movie Block List</h2>
      </header>
      <main>
        <div className="blockMovieBlock">
          {props.blockedList.map((item, index) => {
            return <BlockedMovie key={index} {...props} item={item} index={index}/>
          })}
        </div>
      </main>

    </div>
  );
};

export default MovieBlockList;
