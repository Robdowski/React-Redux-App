import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const PAGE_UP = 'PAGE_UP'
export const PAGE_DOWN = 'PAGE_DOWN'
export const HANDLE_CHANGES = 'HANDLE_CHANGES'
export const RANDOM_PAGE = 'RANDOM_PAGE'
export const PAGE_SELECT = 'PAGE_SELECT'

export const fetchRandom = () => dispatch => {
    dispatch({type: START_FETCHING});

    axios
    .get('https://cors-anywhere.herokuapp.com/https://quote-garden.herokuapp.com/quotes/random')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: [res.data]}))
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    })
}

export const fetchAll = () => dispatch => {
    dispatch({type: START_FETCHING});

    axios
    .get('https://cors-anywhere.herokuapp.com/https://quote-garden.herokuapp.com/quotes/all')
    .then(res => dispatch({type: FETCH_SUCCESS, payload:res.data.results}))
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    })
}

export const pageUp = () => dispatch => {
    dispatch({type: PAGE_UP})
}

export const pageDown = () => dispatch => {
    dispatch({type: PAGE_DOWN})
}

export const handleChanges = e => dispatch => {
    dispatch({type: HANDLE_CHANGES, payload: e.target.value})
}

export const randomPage = () => dispatch => {
    dispatch({type: RANDOM_PAGE })
}

export const handlePageChanges = e => dispatch => {
    dispatch({type: PAGE_SELECT, payload: (e.target.value && e.target.value < 1356) ? e.target.value - 1 : 0})
}