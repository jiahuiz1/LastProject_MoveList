import {Button, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';
import Movie from '../../components/movie';
import {useEffect} from 'react';

function MovieList(props){
    let pageNumber = props.initialPageNumber;

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

    return(
        <div className="MovieListPage">
            <header>
                <h2>Movies List Page</h2>
            </header>
            <main>
                <div className="sortButtons">
                    <Button size="lg">Title</Button>
                    <Button size="lg">Vote Count</Button>
                    <Button size="lg">Vote Average</Button>
                    <Button size="lg">Release Date</Button>
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