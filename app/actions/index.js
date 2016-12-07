export const FETCH_TEXTS = 'FETCH_TEXTS';
export const FETCH_TEXTS_SUCCEEDED = 'FETCH_TEXTS_SUCCEEDED';
export const SELECT_RANDOM_TEXT = 'SELECT_RANDOM_TEXT';

export const TRY_LOGIN = 'TRY_LOGIN';
export const TRY_LOGIN_SUCCESS = 'TRY_LOGIN_SUCCESS';
export const TRY_LOGIN_FAILURE = 'TRY_LOGIN_FAILURE';


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

