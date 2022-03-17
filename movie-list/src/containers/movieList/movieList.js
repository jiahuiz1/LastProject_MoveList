import {Button, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';
import Movie from '../../components/movie';
import {useState, useEffect} from 'react';

function MovieList(){
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f207dd93db6d0bd617a7ee5e6e6edee&page=${pageNumber}&append_to_response=production_companies`)
        .then((result) => {
            return result.json();
        })
        .then((d)=>{
            //console.log(d);
            const temp = d.results;
            setData([...data, ...temp]);
            setPageNumber(d.page);
            setTotalResults(d.total_results);
            setTotalPage(d.total_pages);
        })
    }, []);

    console.log(data);
    return(
        <div className="MovieListPage">
            <h2>Movies List Page</h2>
            <main>
                <div className="sortButtons">
                    <Button size="lg">Title</Button>
                    <Button size="lg">Vote Count</Button>
                    <Button size="lg">Vote Average</Button>
                    <Button size="lg">Release Date</Button>
                </div>
                {data.length===0 && <Spinner animation="border" variant="primary"/>}
                <div className="pageNav">
                    <Button variant="dark">Prev</Button>
                    <div className="pageInfo">Page {pageNumber}/Total {totalPage} pages of {totalResults} results</div>
                    <Button variant="dark">Next</Button>
                </div>
                <div className="movieBlock">
                    {data.length > 0 && data.map((item) => {
                        return (
                            <Movie item={item}/>
                        )
                    })}
                </div>
            </main>

        </div>
    )
}

export default MovieList;