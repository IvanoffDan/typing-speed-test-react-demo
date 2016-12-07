import {TRY_LOGIN_SUCCESS} from '../actions/index';

const INITIAL_STATE = {username: "guest", loggedIn: false, bestResults: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TRY_LOGIN_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                username: action.email
            }
        }

        default:
            return state;
    }
}