import Actions from './constants';

const likeMovie = (payload) => ({
    type: Actions.LIKE,
    payload
})

const blockMovie = (payload) => ({
    type: Actions.BLOCK,
    payload
})

const setMovies = (payload) => ({
    type: Actions.SET_MOVIES,
    payload
});

// fetch data based on the sort-by type and page number
const fetchMovies = (fetchName, pageNumber) => {
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=${fetchName}.desc&api_key=0f207dd93db6d0bd617a7ee5e6e6edee&page=${pageNumber}&append_to_response=production_companies`;
        fetch(url).
        then((res) => {return res.json()}).
        then((data) => {
            dispatch(setMovies(data))});
    }
}

export const actions = {
    likeMovie,
    blockMovie,
    fetchMovies
};