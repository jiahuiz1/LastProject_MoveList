import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Movie(props){
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const item = props.item;
    return(
        <div className="movie">
        <Image className="image"src={IMGPATH + item.poster_path}/>
        <div>
            <Button variant="danger">Like</Button>
            <Button variant="secondary">Block</Button>
        </div>
        <div className="movieInfo">
            <p>{item.original_title}</p>
            <p>Release Date: {item.release_date}</p>
            <p>Vote Count: {item.vote_average} | Average Score: {item.vote_count}</p>
            <p>{item.overview}</p>
        </div>
    </div>
    );
}

export default Movie;
