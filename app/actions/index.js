export const FETCH_TEXTS = 'FETCH_TEXTS';
export const FETCH_TEXTS_SUCCEEDED = 'FETCH_TEXTS_SUCCEEDED';
export const SELECT_RANDOM_TEXT = 'SELECT_RANDOM_TEXT';

export const TRY_LOGIN = 'TRY_LOGIN';
export const TRY_LOGOUT = 'TRY_LOGOUT';
export const TRY_LOGIN_SUCCESS = 'TRY_LOGIN_SUCCESS';
export const TRY_LOGIN_FAILURE = 'TRY_LOGIN_FAILURE';
export const CHECK_IF_LOGGEDIN = 'CHECK_IF_LOGGEDIN';
export const CHECK_IF_LOGGEDIN_SUCCESS = 'CHECK_IF_LOGGEDIN_SUCCESS';
export const TRY_LOGOUT_SUCCESS = 'TRY_LOGOUT_SUCCESS';


/*----------------------Text Reducer-------------------*/
export function fetchTexts() {
    return {
        type: FETCH_TEXTS
    }
}

export function fetchTextsSucceeded(texts) {
    return {
        type: FETCH_TEXTS_SUCCEEDED,
        texts
    }
}

export function selectRandomText(text) {
    return {
        type: SELECT_RANDOM_TEXT,
        text
    }
}

/*-----------------Auth Reducer----------------------------*/

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



