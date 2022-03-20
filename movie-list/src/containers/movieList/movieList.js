import {Button, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';
import Movie from '../../components/movie';
import {useEffect} from 'react';

function MovieList(props){
    let pageNumber = props.pageNumber;
    let loadedPages = Array.from(props.loadedPages);

    // initially load the first page of movie list
    useEffect(() => {
        // if first time mounts, fetch data
        // if not, get data from previous loaded data
        if(pageNumber === 0) props.fetchMovies("popularity", 1, "desc");
        else{
            if(loadedPages.includes(pageNumber)){
                props.loadData(pageNumber);
            }
            else{
                props.fetchMovies("popularity", pageNumber,"desc");
            }
        }
    }, []);

    // Page Nav, avoid refetching data by storing fetched data into a loadedData array
    const handlePageNav = (e) => {
        if(e.target.innerHTML === "Next"){
            pageNumber += 1;
            if (loadedPages.includes(pageNumber)){
                props.loadData(pageNumber)
            }
            else props.fetchMovies("popularity", pageNumber,"desc");
        }   

        else if(e.target.innerHTML === "Prev"){
            pageNumber -= 1;
            if (loadedPages.includes(pageNumber)){
                props.loadData(pageNumber)
            }
            else props.fetchMovies("popularity", pageNumber,"desc");
        }      
    }

    //console.log(props.movieList);
    console.log(props.loadedData);
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
                            <Movie key={index} {...props} item={item}/>
                        )
                    })}
                </div>
            </main>

        </div>
    )
}
export default MovieList;