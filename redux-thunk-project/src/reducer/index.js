import { START_FETCHING, FETCH_FAILURE, FETCH_SUCCESS, PAGE_UP, PAGE_DOWN } from '../actions'

const initialState = {
    quotes:[],
    isFetching: false,
    error: '',
    page: 0,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: '',
        quotes: []
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        quotes: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case PAGE_UP:
        return{
            ...state,
            page: state.page === 500 ? state.page : state.page += 1
        }

    case PAGE_DOWN:
        return{
            ...state,
            page: state.page === 0 ? state.page : state.page -= 1
        }

    default:
        return state
    }
}