import {TRY_LOGIN_SUCCESS, CHECK_IF_LOGGEDIN_SUCCESS, TRY_LOGOUT_SUCCESS} from '../actions/index';

const INITIAL_STATE = {username: "", loggedIn: false, bestResults: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TRY_LOGIN_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                username: action.email
            }
        }

        case TRY_LOGOUT_SUCCESS: {
            return {
                ...state,
                loggedIn: false,
                username: ""
            }
        }

        default:
            return state;
    }
}