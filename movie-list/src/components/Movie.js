import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "../containers/movieLikeList/movieLikeList.css";
import PropTypes from 'prop-types';


function Movie({info, item}){
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    //const item = props.item;
    const id = item.id;

    function handleLike() {
        // set the current movie's like field in movieList to true
        item.like = true;
        

        // loop through the loaded data to find the current movie
        // then set like field to true
        info.loadedData.forEach((e1) => {
            e1.results.forEach((e2) => {
                if(e2.id === id){
                    e2.like = true;
                }
            });
        });
        //adding selected movie id to like list 
        info.likeMovie(item);
    }
    function handleBlock() {
        item.block = null;   
        // loop through the loaded data to find the current movie
        // then set like field to true
        info.loadedData.forEach((e1) => {
            e1.results.forEach((e2) => {
                if(e2.id === id){
                    e2.like = false;
                    e2.block = null;
                }
            });
        });
        info.blockMovie(item);
    }

    return(
        <div className="movie">
            <Image className="movie-image"src={IMGPATH + item.poster_path} alt="Image not available"/>
            <div>
                <Button variant="danger" disabled={item.like ? true : false} onClick={handleLike}>{item.like ? "Liked" : "Like"}</Button>
                <Button variant="secondary" disabled={item.like ? true : false} onClick={handleBlock}>Block</Button>
            </div>
            <div className="movie-Info">
                <p>{item.original_title}</p>
                <p>Release Date: {item.release_date}</p>
                <p>Vote Count: {item.vote_count}  | Average Score:{item.vote_average}</p>
                <p>{item.overview}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    info: PropTypes.shape({
        movieList: PropTypes.arrayOf(PropTypes.object),
        likedList: PropTypes.arrayOf(PropTypes.object),
        blockedList: PropTypes.arrayOf(PropTypes.object),
        loadedPages: PropTypes.object,
        loadedData: PropTypes.arrayOf(PropTypes.object)
    }),
    item: PropTypes.object
}

export default Movie;