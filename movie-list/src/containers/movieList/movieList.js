import {Button, Spinner} from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';
import Movie from '../../components/movie';
import {useEffect} from 'react';
import React from 'react';

function MovieList(props){
    let pageNumber = props.initialPageNumber;
    //let isAsc=true;
    const [isAsc, setisAsc] = React.useState(false);

    // initially load the first page of movie list
    useEffect(() => {
        props.fetchMovies("popularity", 1);
    }, []);

    const handlePageNav = (e) => {
        if(e.target.innerHTML === "Next"){
            pageNumber += 1;
            props.fetchMovies("popularity", pageNumber,"desc");
        }   

        // problem: need to make go to previous page, no fetching request
        else if(e.target.innerHTML === "Prev"){
            if(pageNumber > 1){
                pageNumber -= 1;
                props.fetchMovies("popularity", pageNumber,"desc");
            }
        }      
    }
    const handleSort=(e)=>{
        console.log("is asc:"+isAsc);
        if(e.target.innerHTML === "Title"){
            if(isAsc === true){
                setisAsc(false);
                props.fetchMovies("original_title", pageNumber,"asc"); 
            }
            else if(isAsc === false){
                setisAsc(true);
                props.fetchMovies("original_title", pageNumber,"desc");   
            }
        }
        else if(e.target.innerHTML === "Vote Count"){
            if(isAsc === true){
                setisAsc(false);
                props.fetchMovies("vote_count", pageNumber,"asc"); 
            }
            else if(isAsc === false){
                setisAsc(true);
                props.fetchMovies("vote_count", pageNumber,"desc");   
            }
        }
        else if(e.target.innerHTML === "Vote Average"){
            if(isAsc === true){
                setisAsc(false);
                props.fetchMovies("vote_average", pageNumber,"asc"); 
            }
            else if(isAsc === false){
                setisAsc(true);
                props.fetchMovies("vote_average", pageNumber,"desc");   
            }
        }
        else if(e.target.innerHTML === "Release Date"){
            if(isAsc === true){
                setisAsc(false);
                props.fetchMovies("release_date", pageNumber,"asc"); 
            }
            else if(isAsc === false){
                setisAsc(true);
                props.fetchMovies("release_date", pageNumber,"desc");   
            }
        }
    }
    return(
        <div className="MovieListPage">
            <header>
                <h2>Movies List Page</h2>
            </header>
            <main>
                <div className="sortButtons">
                    

                    <Button size="lg" onClick={handleSort} >Title</Button>
                    <Button size="lg" onClick={handleSort} >Vote Count</Button>
                    <Button size="lg"onClick={handleSort} >Vote Average</Button>
                    <Button size="lg"onClick={handleSort} >Release Date</Button>
                </div>
                {props.movieList.length===0 && <Spinner animation="border" variant="primary"/>}
                <div className="pageNav">
                    <Button variant="dark" onClick={handlePageNav}>Prev</Button>
                    <div className="pageInfo">Page {pageNumber}/Total {props.initialTotalPages} pages of {props.initialTotalResults} results</div>
                    <Button variant="dark" onClick={handlePageNav}>Next</Button>
                </div>
                <div className="movieBlock">
                    {props.movieList.length > 0 && props.movieList.map((item, index) => {
                        return (
                            <Movie key={index} item={item}/>
                        )
                    })}
                </div>
            </main>

        </div>
    )
}
export default MovieList;