import {Button, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';
import Movie from '../../components/movie';
import {useEffect} from 'react';
import PropTypes from 'prop-types';

function MovieList({data}){
    let pageNumber = data.pageNumber;
    let sortByName = data.sortByName; // replace sortByName with popularity
    let order = data.order;
    let loadedPages = Array.from(data.loadedPages);

    // initially load the first page of movie list
    useEffect(() => {
        // if first time mounts, fetch data
        // if not, get data from previous loaded data
        if(pageNumber === 0) data.fetchMovies(sortByName, 1, order);
        else{
            if(loadedPages.includes(pageNumber)){
                data.loadData(pageNumber);
            }
            else{
                data.fetchMovies(sortByName, pageNumber, order);
            }
        }
    }, []);

    // Page Nav, avoid refetching data by storing fetched data into a loadedData array
    const handlePageNav = (e) => {
        if(e.target.innerHTML === "Next"){
            pageNumber += 1;
            if (loadedPages.includes(pageNumber)){
                data.loadData(pageNumber)
            }
            else data.fetchMovies(sortByName, pageNumber, order);
        }   

        else if(e.target.innerHTML === "Prev"){
            pageNumber -= 1;
            if (loadedPages.includes(pageNumber)){
                data.loadData(pageNumber)
            }
            else data.fetchMovies(sortByName, pageNumber, order);
        }      
    }

    // every time you click one of the sort buttons, it will clear the loadedDat
    // load the first page of the sorted list of movies
    const handleSort = (e) => {
        console.log(pageNumber);
         if(e.target.innerHTML === "Title ↓"){
            data.fetchSortMovies("original_title", 1, "desc");
            e.target.innerHTML = "Title ↑";
        }
        else if(e.target.innerHTML === "Title ↑"){
            data.fetchSortMovies("original_title", 1, "asc");
            e.target.innerHTML = "Title ↓";
        }
        else if(e.target.innerHTML === "Vote Count ↓"){
            data.fetchSortMovies("vote_count", 1, "desc");
            e.target.innerHTML = "Vote Count ↑";
        }
        else if(e.target.innerHTML === "Vote Count ↑"){
            data.fetchSortMovies("vote_count", 1, "asc");
            e.target.innerHTML = "Vote Count ↓";
        }
        else if(e.target.innerHTML === "Vote Average ↓"){
            data.fetchSortMovies("vote_average", 1, "desc");
            e.target.innerHTML = "Vote Average ↑";
        }
        else if(e.target.innerHTML === "Vote Average ↑"){
            data.fetchSortMovies("vote_average", 1, "asc");
            e.target.innerHTML = "Vote Average ↓";
        }
        else if(e.target.innerHTML === "Release Date ↓"){
            data.fetchSortMovies("release_date", 1, "desc");
            e.target.innerHTML = "Release Date ↑";
        }
        else if(e.target.innerHTML === "Release Date ↑"){
            data.fetchSortMovies("release_date", 1, "asc");
            e.target.innerHTML = "Release Date ↓";
        }
        
    }

    //console.log(data.movieList);
    //console.log(data.loadedData);
    return(
        <div className="MovieListPage">
            <header>
                <h2>Movies List Page</h2>
            </header>
            <main>
                <div className="sortButtons">
                    <Button size="lg" variant="outline-success" onClick={handleSort}>Title ↓</Button>
                    <Button size="lg" variant="outline-success" onClick={handleSort}>Vote Count ↓</Button>
                    <Button size="lg" variant="outline-success" onClick={handleSort}>Vote Average ↓</Button>
                    <Button size="lg" variant="outline-success" onClick={handleSort}>Release Date ↓</Button>
                </div>
                {data.movieList.length===0 && <Spinner animation="border" variant="primary"/>}
                <div className="pageNav">
                    <Button variant="dark" onClick={handlePageNav} disabled={pageNumber === 1 ? true : false}>Prev</Button>
                    <div className="pageInfo">Page {pageNumber}/Total {data.initialTotalPages} pages of {data.initialTotalResults} results</div>
                    <Button variant="dark" onClick={handlePageNav}>Next</Button>
                </div>

                <div className="movieBlock">
                    {data.movieList.length > 0 && data.movieList.map((item, index) => {
                        if(item.block===true){
                            if(item.like===true){
                                item.like=false;
                                return null;
                            }   
                        } 
                        else if(item.block===false){
                            return <Movie key={index} info={data} item={item}/>;
                        }
                    })}
                </div>

            </main>

        </div>
    )
}

MovieList.propTypes = {
    data: PropTypes.shape({
        initialTotalResults: PropTypes.number,
        initialTotalPages: PropTypes.number,
        pageNumber: PropTypes.number,
        movieList: PropTypes.arrayOf(PropTypes.object),
        likedList: PropTypes.arrayOf(PropTypes.object),
        blockedList: PropTypes.arrayOf(PropTypes.object),
        loadedPages: PropTypes.object,
        loadedData: PropTypes.arrayOf(PropTypes.object),
        sortByName: PropTypes.string,
        order: PropTypes.string
    })
}

export default MovieList;