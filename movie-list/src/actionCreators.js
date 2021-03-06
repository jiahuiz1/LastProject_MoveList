import { Action } from 'history';
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


const sortMovies = (payload) => ({
    type: Actions.SORT_MOVIES,
    payload
})


const loadData = (payload) => ({
    type: Actions.LOAD_DATA,
    payload
})

const deleteLikedMovie = (payload) => ({
    type: Actions.DELETE_LIKE,
    payload
})

const blockLikedMovie = (payload) => ({
    type: Actions.BLOCK_LIKE,
    payload
})
const deleteBlockedMovie = (payload) => ({
    type: Actions.DELETE_BLOCK,
    payload
})
const likeBlockedMovie = (payload) => ({
    type: Actions.LIKE_BLOCK,
    payload
})



// thunk
// fetch data based on the sort-by type and page number
const fetchMovies = (fetchName, pageNumber, order) => {
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=${fetchName}.${order}&api_key=0f207dd93db6d0bd617a7ee5e6e6edee&page=${pageNumber}&append_to_response=production_companies`;
        fetch(url).
        then((res) => {return res.json()}).
        then((data) => {
            //console.log(data);

            // if(fetchName === "vote_count"){
            //     dispatch(sortMovies(data));
            // }
            dispatch(setMovies(data))
        }).
        catch((error) => {
            console.log(error);
        })
    }
}

const fetchSortMovies = (fetchName, pageNumber, order) => {
    return (dispatch) => {
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=${fetchName}.${order}&api_key=0f207dd93db6d0bd617a7ee5e6e6edee&page=${pageNumber}&append_to_response=production_companies`;
        fetch(url).
        then((res) => {return res.json()}).
        then((data) => {
            data = {...data, sortByName: fetchName, order: order}
            //console.log(data);
            dispatch(sortMovies(data));

        });
    }
}

export const actions = {
    likeMovie,
    blockMovie,
    fetchMovies,
    loadData,

    deleteLikedMovie,
    blockLikedMovie,
    deleteBlockedMovie,
    likeBlockedMovie,
    fetchSortMovies

};