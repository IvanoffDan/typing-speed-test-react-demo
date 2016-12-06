import {FETCH_TEXTS_SUCCEEDED, SELECT_RANDOM_TEXT} from '../actions/index';
const INITIAL_STATE = {all: {}, selectedText: ""};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TEXTS_SUCCEEDED:
            return {
                ...state,
                all: {...action.texts}
            };
        case SELECT_RANDOM_TEXT:
            return {
                ...state,
                selectedText: action.text
            };
        default:
            return state;
    }
}