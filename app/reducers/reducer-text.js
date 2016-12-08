import {FETCH_TEXT_SUCCEEDED, CLEAR_TEXT} from '../actions/index';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TEXT_SUCCEEDED:
            return action.text;

        case CLEAR_TEXT:
            return INITIAL_STATE;

        default:
            return state;
    }
}