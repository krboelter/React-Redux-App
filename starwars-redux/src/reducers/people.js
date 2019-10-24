import {
    FETCH_PEOPLE_START,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_ERROR
} from "../actions/people";

const initialState = {
    person: null,
    isLoading: false,
    error: null
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PEOPLE_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                person: action.payload,
                isLoading: false
            }
        case FETCH_PEOPLE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            state
    }
}