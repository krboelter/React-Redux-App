import axios from "axios";

export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_ERROR = "FETCH_PEOPLE_ERROR";

export function fetchPeople() {
    return dispatch => {
        dispatch({ type: FETCH_PEOPLE_START })
        
        axios.get(`https://swapi.co/api/people/1/`)
            .then(res => {
                console.log('success', res.data)
                dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_PEOPLE_ERROR, payload: err.response})
            })
    }

}