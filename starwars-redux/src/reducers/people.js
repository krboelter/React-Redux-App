import {
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_ERROR
} from "../actions/people";

const initialState = {
    people: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PEOPLE_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                people: action.payload,
                error: null,
                isLoading: false
            }
        case FETCH_PEOPLE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}