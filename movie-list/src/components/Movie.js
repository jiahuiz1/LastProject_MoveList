import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Movie(props){
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const item = props.item;


    function handleLike() {
        // set the current movie's like field in movieList to true
        item.like = true;
        const id = item.id;

        // loop through the loaded data to find the current movie
        // then set like field to true
        props.loadedData.forEach((e1) => {
            e1.results.forEach((e2) => {
                if(e2.id === id){
                    e2.like = true;
                }
            });
        });

        //adding selected movie id to like list 
        props.likeMovie(item);
    }
    function handleBlock() {
        
    }

    return(
        <div className="movie">
            <div className='image-container'>
                <Image className="movie-image"src={IMGPATH + item.poster_path} alt="Image not available"/>
                </div>
            <div>
                <Button variant="danger" disabled={item.like ? true : false} onClick={handleLike}>{item.like ? "Liked" : "Like"}</Button>
                <Button variant="secondary" onClick={handleBlock}>Block</Button>
            </div>
            <div className="movie-Info">
                <p>{item.original_title}</p>
                <p>Release Date: {item.release_date}</p>
                <p>Average Score: {item.vote_average} | Vote Count: {item.vote_count}</p>
                <p>{item.overview}</p>
            </div>
        </div>
    );
}

export default Movie;