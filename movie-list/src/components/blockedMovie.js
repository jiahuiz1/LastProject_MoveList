import {Button, Image, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkGenre from '../checkGenre';
import PropTypes from 'prop-types';

// structure of blocked Movie
function BlockedMovie({info, item, index}){
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const id = item.id;

    const handleBlockMovie = (e)=>{
        item.block=false;
        if(e.target.innerHTML === "Delete"){
            info.loadedData.forEach((e1) => {
                e1.results.forEach((e2) => {
                    if(e2.id === id){
                        e2.block = false;
                    }
                });
            });
            info.deleteBlockedMovie(index);
        }
        else if (e.target.innerHTML === "Like"){
             // set the current movie's like field in movieList to true
            item.like = true;
            // loop through the loaded data to find the current movie
            // then set like field to true
            info.loadedData.forEach((e1) => {
                e1.results.forEach((e2) => {
                    if(e2.id === id){
                        e2.like = true;
                        e2.block=false;
                    }
                });
            });
            info.likeBlockedMovie(index);
            info.likeMovie(item);
        }
        
        //console.log(props.likedList);
        //need to add like function 
    }

    return(
        <div className="blockedMovie">
            <Image className="blockedMovie-image" src={IMGPATH + item.poster_path}/>
            <Button className="blockedMovie-Button" variant="warning" onClick={handleBlockMovie}>Delete</Button>
            <Button className="blockedMovie-Button" variant="danger" onClick={handleBlockMovie}>Like</Button>
            <Stack className="blockedMovie-genres" gap={2}>
                {item.genre_ids.length > 0 && item.genre_ids.map((genre) => {
                    const result = checkGenre(genre);
                    return (<span style={{backgroundColor: result.color}}>{result.name}</span>)
                })}
            </Stack>
        </div>
    );
}

BlockedMovie.propTypes = {
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

export default BlockedMovie;