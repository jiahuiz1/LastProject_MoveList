import Actions from './constants';

const likeMovie = (payload) => ({
    type: Actions.LIKE,
    payload //movie
})

const blockMovie = (payload) => ({
    type: Actions.BLOCK,
    payload
})

const setMovies = (payload) => ({
    type: Actions.SET_MOVIES,
    payload
});

// thunk
// fetch data based on the sort-by type and page number
const fetchMovies = (fetchName, pageNumber,order) => {
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=${fetchName}.${order}&api_key=0f207dd93db6d0bd617a7ee5e6e6edee&page=${pageNumber}&append_to_response=production_companies`;
        fetch(url).
        then((res) => {return res.json()}).
        then((data) => {
            console.log(data);
            dispatch(setMovies(data))
        });
    }
}
const fetchLikeMovies=(movieId)=>{
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ec90af707a599c7b1267e264bad8a7b7&language=en-US`;
        fetch(url).
        then((res) => {return res.json()}).
        then((data) => {
            console.log(data);
            dispatch(likeMovie(data))
        });
    }
}

export const actions = {
    likeMovie,
    blockMovie,
    fetchMovies,
    fetchLikeMovies
};