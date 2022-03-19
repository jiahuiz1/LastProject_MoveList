import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlockedMovie(props){
    const item = props.item;
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const id = item.id;

    const handleBlockMovie = (e)=>{
        item.block=false;
        if(e.target.innerHTML === "Delete"){
            props.loadedData.forEach((e1) => {
                e1.results.forEach((e2) => {
                    if(e2.id === id){
                        e2.block = false;
                    }
                });
            });
            props.deleteBlockedMovie(props.index);
        }
        else if (e.target.innerHTML === "Like"){
             // set the current movie's like field in movieList to true
            item.like = true;
            // loop through the loaded data to find the current movie
            // then set like field to true
            props.loadedData.forEach((e1) => {
                e1.results.forEach((e2) => {
                    if(e2.id === id){
                        e2.like = true;
                        e2.block=false;
                    }
                });
            });
            props.likeBlockedMovie(props.index);
            props.likeMovie(item);
        }
        
        //console.log(props.likedList);
        //need to add like function 
    }
    console.log(item);

    return(
        <div className="blockedMovie">
            <Image className="image" src={IMGPATH + item.poster_path}/>
            <Button className="Button" variant="warning" onClick={handleBlockMovie}>Delete</Button>
            <Button className="Button" variant="danger" onClick={handleBlockMovie}>Like</Button>
        </div>
    );
}

export default BlockedMovie;