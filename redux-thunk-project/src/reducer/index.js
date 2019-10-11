import { START_FETCHING, FETCH_FAILURE, FETCH_SUCCESS, PAGE_UP, PAGE_DOWN, HANDLE_CHANGES, RANDOM_PAGE, PAGE_SELECT } from '../actions'

const initialState = {
    quotes:[],
    isFetching: false,
    error: '',
    page: 0,
    search: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: '',
        quotes: [],
        page: 0,
        search: ''
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
            page: state.page === 1356 ? state.page : state.page += 1
        }

    case PAGE_DOWN:
        return{
            ...state,
            page: state.page === 0 ? state.page : state.page -= 1,
        }

    case RANDOM_PAGE:
        return{
            ...state,
            page: Math.floor(Math.random() * 1356),
            search: '',
        }

    case HANDLE_CHANGES:
        return{
            ...state,
            search: action.payload,
            page: 0
        }
    case PAGE_SELECT:
        return{
            ...state,
            page: action.payload
        }

    default:
        return state
    }
}