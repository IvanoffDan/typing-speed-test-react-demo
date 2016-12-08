import {TRY_LOGIN_SUCCESS, SET_RESULT, TRY_LOGOUT_SUCCESS} from '../actions/index';

const INITIAL_STATE = {username: "", loggedIn: false, results: []};

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

        case SET_RESULT: {
            return {
                ...state,
                results: [
                    action.avgSpeed,
                    ...state.results
                ]
            }
        }

        default:
            return state;
    }
}