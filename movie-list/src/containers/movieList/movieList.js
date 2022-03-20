import {Button, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';
import Movie from '../../components/movie';
import {useEffect} from 'react';

function MovieList(props){
    let pageNumber = props.pageNumber;
    let sortByName = props.sortByName; // replace sortByName with popularity
    let order = props.order;
    let loadedPages = Array.from(props.loadedPages);

    // initially load the first page of movie list
    useEffect(() => {
        // if first time mounts, fetch data
        // if not, get data from previous loaded data
        if(pageNumber === 0) props.fetchMovies(sortByName, 1, order);
        else{
            if(loadedPages.includes(pageNumber)){
                props.loadData(pageNumber);
            }
            else{
                props.fetchMovies(sortByName, pageNumber, order);
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
            else props.fetchMovies(sortByName, pageNumber, order);
        }   

        else if(e.target.innerHTML === "Prev"){
            pageNumber -= 1;
            if (loadedPages.includes(pageNumber)){
                props.loadData(pageNumber)
            }
            else props.fetchMovies(sortByName, pageNumber, order);
        }      
    }

    // every time you click one of the sort buttons, it will clear the loadedDat
    // load the first page of the sorted list of movies
    const handleSort = (e) => {
        console.log(pageNumber);
         if(e.target.innerHTML === "Title ↓"){
            props.fetchSortMovies("original_title", 1, "desc");
            e.target.innerHTML = "Title ↑";
        }
        else if(e.target.innerHTML === "Title ↑"){
            props.fetchSortMovies("original_title", 1, "asc");
            e.target.innerHTML = "Title ↓";
        }
        else if(e.target.innerHTML === "Vote Count ↓"){
            props.fetchSortMovies("vote_count", 1, "desc");
            e.target.innerHTML = "Vote Count ↑";
        }
        else if(e.target.innerHTML === "Vote Count ↑"){
            props.fetchSortMovies("vote_count", 1, "asc");
            e.target.innerHTML = "Vote Count ↓";
        }
        else if(e.target.innerHTML === "Vote Average ↓"){
            props.fetchSortMovies("vote_average", 1, "desc");
            e.target.innerHTML = "Vote Average ↑";
        }
        else if(e.target.innerHTML === "Vote Average ↑"){
            props.fetchSortMovies("vote_average", 1, "asc");
            e.target.innerHTML = "Vote Average ↓";
        }
        else if(e.target.innerHTML === "Release Date ↓"){
            props.fetchSortMovies("release_date", 1, "desc");
            e.target.innerHTML = "Release Date ↑";
        }
        else if(e.target.innerHTML === "Release Date ↑"){
            props.fetchSortMovies("release_date", 1, "asc");
            e.target.innerHTML = "Release Date ↓";
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
                    <Button size="lg" onClick={handleSort}>Title ↓</Button>
                    <Button size="lg" onClick={handleSort}>Vote Count ↓</Button>
                    <Button size="lg" onClick={handleSort}>Vote Average ↓</Button>
                    <Button size="lg" onClick={handleSort}>Release Date ↓</Button>
                </div>
                {props.movieList.length===0 && <Spinner animation="border" variant="primary"/>}
                <div className="pageNav">
                    <Button variant="dark" onClick={handlePageNav}>Prev</Button>
                    <div className="pageInfo">Page {pageNumber}/Total {props.initialTotalPages} pages of {props.initialTotalResults} results</div>
                    <Button variant="dark" onClick={handlePageNav}>Next</Button>
                </div>

                <div className="movieBlock">
                    {props.movieList.length > 0 && props.movieList.map((item, index) => {
                        if(item.block===true){
                            if(item.like===true){
                                item.like=false;
                                return null;
                            }   
                        } 
                        else if(item.block===false){
                            return <Movie key={index} {...props} item={item}/>;
                        }
                    })}
                </div>

            </main>

        </div>
    )
}
export default MovieList;