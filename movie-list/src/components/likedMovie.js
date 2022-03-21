import {Button, Image, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkGenre from '../checkGenre';
import PropTypes from 'prop-types';

// structure of each liked movie
function LikedMovie({info, item, index}){
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    const handleLikeMovie = (e)=>{
        if(e.target.innerHTML === "Delete"){
            info.deleteLikedMovie(index);
        }
        //console.log(props.likedList);
        else if(e.target.innerHTML === "Block") {
            info.blockLikedMovie(index);
            info.blockMovie(item);
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

LikedMovie.propTypes = {
    info: PropTypes.shape({
        movieList: PropTypes.arrayOf(PropTypes.object),
        likedList: PropTypes.arrayOf(PropTypes.object),
        blockedList: PropTypes.arrayOf(PropTypes.object),
        loadedPages: PropTypes.object,
        loadedData: PropTypes.arrayOf(PropTypes.object)
    }),
    item: PropTypes.object,
    index: PropTypes.number
  }

export default LikedMovie;