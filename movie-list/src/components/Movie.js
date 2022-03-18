import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react'

function Movie(props){
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const item = props.item;
    let movieId= props.movieId;

    const [disabledLike, setDisabledLike] = useState(false)

    function handleLike(e) {
        setDisabledLike(true)
        //adding selected movie id to like list 
        props.fetchLikeMovies(movieId);
        console.log.apply(props.likedList);
    }
    function handleBlock() {
        
    }

    return(
        <div className="movie">
        <Image className="image"src={IMGPATH + item.poster_path} alt="Image not available"/>
        <div>
            <Button variant="danger" disabled={disabledLike} onClick={handleLike}>Like</Button>
            <Button variant="secondary" onClick={handleBlock}>Block</Button>
        </div>
        <div className="movieInfo">
            <p>{item.original_title}</p>
            <p>Release Date: {item.release_date}</p>
            <p>Average Score: {item.vote_average} | Vote Count: {item.vote_count}</p>
            <p>{item.overview}</p>
        </div>
    </div>
    );
}

export default Movie;