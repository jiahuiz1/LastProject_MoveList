import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './movie';

function LikedMovie(props){
    const item = props.item;
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    const handleLikeMovie = (e)=>{
        if(e.target.innerHTML === "Delete"){
            props.deleteLikedMovie(props.index);
        }
        //console.log(props.likedList);
        else if(e.target.innerHTML === "Block") {
            props.blockLikedMovie(props.index);
            props.blockMovie(item);
        }
    }

    return(
        <div className="likedMovie">
            <Image className="image" src={IMGPATH + item.poster_path}/>
            <Button className="Button" variant="warning" onClick={handleLikeMovie}>Delete</Button>
            <Button className="Button" variant="secondary" onClick={handleLikeMovie}>Block</Button>
        </div>
    );
}

export default LikedMovie;