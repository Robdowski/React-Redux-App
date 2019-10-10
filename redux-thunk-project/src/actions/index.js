import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchRandom = () => dispatch => {
    dispatch({type: START_FETCHING});

    axios
    .get('https://cors-anywhere.herokuapp.com/https://quote-garden.herokuapp.com/quotes/random')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: [res.data]}))
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err.response})
    })
}