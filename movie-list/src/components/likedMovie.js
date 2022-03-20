
import {Button, Image, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkGenre from '../checkGenre';


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

            <Image className="likedMovie-image" src={IMGPATH + item.poster_path}/>
            <Button className="likedMovie-Button" variant="warning" onClick={handleLikeMovie}>Delete</Button>
            <Button className="likedMovie-Button" variant="secondary" onClick={handleLikeMovie}>Block</Button>
            <Stack className="likedMovie-genres" gap={2}>
                {item.genre_ids.length > 0 && item.genre_ids.map((genre) => {
                    const result = checkGenre(genre);
                    return (<span style={{backgroundColor: result.color}}>{result.name}</span>)
                })}
            </Stack>

        </div>
    );
}

export default LikedMovie;