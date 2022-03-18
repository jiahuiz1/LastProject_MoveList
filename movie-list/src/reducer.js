import Actions from './constants';

const initialState = {
    initialPageNumber: 0,
    initialTotalResults: 0,
    initialTotalPages: 0,
    movieId:0,
    movieList: [],
    likedList: [],
    blockedList: []
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case Actions.LIKE:
            return{
                // add the movie to the liked list
                ...state,
                movieId:action.payload.results.id,
                likedList: [...action.payload.results]
            }
        
        case Actions.BLOCK:
            return{
                // add the movie to the blocked list
                
            }
        // initialize the movieList
        case Actions.SET_MOVIES:
            return {
                ...state,
                initialPageNumber: action.payload.page,
                initialTotalResults: action.payload.total_results,
                initialTotalPages: action.payload.total_pages,
                movieList: [...action.payload.results]
            };

        default:
            return {...state};
    }
}

export default reducer;