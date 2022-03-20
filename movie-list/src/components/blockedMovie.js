import {Button, Image, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function checkGenre(id){
    if(id === 28){
        return {
            name: "Action",
            color: "red"
        };
    }
    else if(id === 12){
        return {
            name: "Adventure",   
            color: "green"
        };
    }
    else if(id === 16){
        return {
            name: "Animation",
            color: "chocolate"
        };
    }
    else if(id === 35){
        return {
            name: "Comedy",
            color: "coral"
        };
    }
    else if(id === 80){
        return {
            name: "Crime",
            color: "darkkhaki"
        };
    }
    else if(id === 99){
        return {
            name: "Documentary",
            color: "cadetblue"
        };
    }
    else if(id === 18){
        return {
            name: "Drama",
            color: "crimson"
        };
    }
    else if(id === 10751){
        return {
            name: "Family",
            color: "darkcyan"
        };
    }
    else if(id === 14){
        return {
            name: "Fantasy",
            color: "darkblue"
        };
    }
    else if(id === 36){
        return {
            name: "History",
            color: "darkgoldenrod"
        };
    }
    else if(id === 27){
        return {
            name: "Horror",
            color: "darkgray"
        };
    }
    else if(id === 10402){
        return {
            name: "Music",
            color: "darkmagenta"
        };
    }
    else if(id === 9648){
        return {
            name: "Mystery",
            color: "darkolivegreen"
        };
    }
    else if(id === 10749){
        return {
            name: "Romance",
            color: "darkorange"
        };
    }
    else if(id === 878){
        return {
            name: "Science Fiction",
            color: "darksalmon"
        };
    }
    else if(id === 10770){
        return {
            name: "TV Movie",
            color: "darkred"
        }
    }
    else if(id === 53){
        return {
            name: "Thriller",
            color: "darkviolet"
        };
    }
    else if(id === 10752){
        return {
            name: "War",
            color: "gold"
        };
    }
    else if(id === 37){
        return {
            name: "Western",
            color: "hotpink"
        };
    }
}

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
        <div className="likedMovie">
            <Image className="likedMovie-image" src={IMGPATH + item.poster_path}/>
            <Button className="likedMovie-Button" variant="warning" onClick={handleBlockMovie}>Delete</Button>
            <Button className="likedMovie-Button" variant="danger" onClick={handleBlockMovie}>Like</Button>
            <Stack className="likedMovie-genres" gap={2}>
                {item.genre_ids.length > 0 && item.genre_ids.map((genre) => {
                    const result = checkGenre(genre);
                    return (<span style={{backgroundColor: result.color}}>{result.name}</span>)
                })}
            </Stack>
        </div>
    );
}

export default BlockedMovie;