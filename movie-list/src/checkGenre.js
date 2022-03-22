// return a color based on the genre id
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

export default checkGenre;