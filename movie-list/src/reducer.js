import { element } from 'prop-types';
import Actions from './constants';

const setPage = new Set([]);

const initialState = {
    initialTotalResults: 0,
    initialTotalPages: 0,
    pageNumber: 0,
    movieList: [],
    likedList: [],
    blockedList: [],
    loadedPages: setPage, // store fetched pages and data

    loadedData: [],
    sortByName: "popularity",
    order: "desc"

}

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case Actions.LIKE:
            return{
                // add the movie to the liked list
                ...state,
                likedList: [...state.likedList, {...action.payload}]
            };
        
        case Actions.BLOCK:
            return{

                ...state,
                blockedList: [...state.blockedList, {...action.payload}]

            };

        // initialize the movieList
        case Actions.SET_MOVIES:
            // add a like field for each movie's info
            action.payload.results.forEach((element, index) => {

                action.payload.results[index] = {...element, like: false, block: false};

            })
            
            //console.log(action.payload.results);

            // fix later

            state.loadedPages.add(action.payload.page);


            return {
                ...state,
                initialTotalResults: action.payload.total_results,
                initialTotalPages: action.payload.total_pages,
                pageNumber: action.payload.page,
                movieList: [...action.payload.results],
                loadedData: [...state.loadedData, {...action.payload}]
            };


        case Actions.SORT_MOVIES:
            // add a like field for each movie's info
            action.payload.results.forEach((element, index) => {
                action.payload.results[index] = {...element, like: false, block: false};
            })    
            
            state.loadedPages.clear();

            state.loadedPages.add(action.payload.page);
            
            
            return{
                ...state,
                initialTotalResults: action.payload.total_results,
                initialTotalPages: action.payload.total_pages,
                pageNumber: action.payload.page,
                movieList: [...action.payload.results],
                loadedData: [{...action.payload}],
                sortByName: action.payload.sortByName,
                order: action.payload.order
            };

        case Actions.LOAD_DATA:
            const number = action.payload;
            const result = state.loadedData.filter((item) => {
                return item.page === number;
            });
            
            return{
                ...state,
                pageNumber: number,
                movieList: result[0].results
            }

        case Actions.DELETE_LIKE:
            const id = state.likedList[action.payload].id;
            
            // remove the clicked movie from the likedList
            state.likedList.splice(action.payload, 1); 

            // update the like field inside movieList
            state.movieList.forEach((e) => {
                if(e.id === id){
                    e.like = false;
                }
            })

            // update the like filed inside loadedData
            state.loadedData.forEach((e1) => {
                e1.results.forEach((e2) => {
                    if(e2.id === id){
                        e2.like = false;
                    }
                })
            })

            return{
                ...state,
                likedList: [...state.likedList], // update likedList after removing
                movieList: [...state.movieList],
                loadedData: [...state.loadedData]
            }


        case Actions.BLOCK_LIKE:
            const id2 = state.likedList[action.payload].id;
            
            // remove the clicked movie from the likedList
            state.likedList.splice(action.payload, 1); 

            // update the like field inside movieList
            state.movieList.forEach((e) => {
                if(e.id === id2){
                    e.like = false;
                    e.block=true;
                }
            })

            // update the like filed inside loadedData
            state.loadedData.forEach((e1) => {
                e1.results.forEach((e2) => {
                    if(e2.id === id2){
                        e2.like = false;
                        e2.block=true;
                    }
                })
            })

        return{
            ...state,
            likedList: [...state.likedList], // update likedList after removing
            movieList: [...state.movieList],
            loadedData: [...state.loadedData],
        }
        case Actions.DELETE_BLOCK:
            // remove the clicked movie from the likedList
            state.blockedList.splice(action.payload, 1); 
        return{
            ...state,
            blockedList: [...state.blockedList]
        }
        case Actions.LIKE_BLOCK:
            state.blockedList.splice(action.payload, 1); 
        return{
            ...state,
             blockedList: [...state.blockedList], //adding the movie to the blockList
        }

        default:
            return {...state};
    }
}

export default reducer;