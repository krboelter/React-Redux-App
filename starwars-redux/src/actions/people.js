import axios from "axios";

export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START";
export const FETCH_PEOPLE_END = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPEL_ERROR = "FETCH_PEOPLE_ERROR";

export function fetchPeople() {
    return dispatch => {
        dispatch({ type: FETCH_DOG_START })
        
        axios.get(`http://swapi.co/api/people`)
            .then(res => {
                dispatch({ type: FETCH_DOG_SUCCESS, payload: res })
            })
            .catch(err => {
                dispatch({ type: FETCH_DOG_ERROR, payload: err})
            })
    }

}