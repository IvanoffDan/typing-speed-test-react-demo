export const FETCH_TEXT = 'FETCH_TEXT';
export const FETCH_TEXT_SUCCEEDED = 'FETCH_TEXT_SUCCEEDED';
export const CLEAR_TEXT = 'CLEAR_TEXT';

export const TRY_LOGIN = 'TRY_LOGIN';
export const TRY_LOGOUT = 'TRY_LOGOUT';
export const TRY_LOGIN_SUCCESS = 'TRY_LOGIN_SUCCESS';
export const TRY_LOGIN_FAILURE = 'TRY_LOGIN_FAILURE';
export const CHECK_IF_LOGGEDIN = 'CHECK_IF_LOGGEDIN';
export const CHECK_IF_LOGGEDIN_SUCCESS = 'CHECK_IF_LOGGEDIN_SUCCESS';
export const TRY_LOGOUT_SUCCESS = 'TRY_LOGOUT_SUCCESS';
export const SET_RESULT = 'SET_RESULT';


/*----------------------Text Reducer-------------------*/
export function fetchText() {
    return {
        type: FETCH_TEXT
    }
}

export function fetchTextSucceeded(text) {
    return {
        type: FETCH_TEXT_SUCCEEDED,
        text
    }
}

export function clearText() {
    return {
        type: CLEAR_TEXT
    }
}



/*-----------------User Reducer----------------------------*/

export function tryLogin(email, pass){
    return {
        type: TRY_LOGIN,
        email,
        pass,
    }
}

export function tryLoginSuccess(email) {
    return {
        type: TRY_LOGIN_SUCCESS,
        email
    }
}

export function checkIfLoggedIn(){
    return {
        type: CHECK_IF_LOGGEDIN
    }
}

export function tryLogout(){
    return {
        type: TRY_LOGOUT
    }
}

export function tryLogoutSuccess(){
    return {
        type: TRY_LOGOUT_SUCCESS
    }
}


export function setResult(avgSpeed){
    return {
        type: SET_RESULT,
        avgSpeed
    }
}


