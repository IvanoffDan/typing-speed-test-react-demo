import {fetchText} from '../api/textApi';
import {put, take, call} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import {fetchTextSucceeded, FETCH_TEXT} from '../actions/index';
import {TRY_LOGIN, tryLoginSuccess, CHECK_IF_LOGGEDIN, TRY_LOGOUT, tryLogoutSuccess} from '../actions/index'
import auth from '../api/auth';


/*-----------------------TextLoading-----------------------------------------------*/
export function* watchForLoadTexts() {
    while (true) {
        yield take(FETCH_TEXT);
        yield loadTexts();
    }
}

export function* loadTexts() {
    try {
        const text = yield call(fetchText);
        yield put(fetchTextSucceeded(text));
    } catch (err) {
        console.log(err);
    }
}

/*-----------------------Auth------------------------------------------------------*/

export function* watchForLogin() {
    while (true) {
        const {email, pass} = yield take(TRY_LOGIN);
        yield callLoginApi(email, pass);
    }
}

export function* callLoginApi(email, pass) {
    try {
        yield call(auth.login, {email, pass});
        yield put(tryLoginSuccess(email))
    }
    catch(err){
        console.log('You have entered a wrong username or passsword!');
    }
}


export function* watchForCheckLogin() {
    while (true) {
        yield take(CHECK_IF_LOGGEDIN);
        yield checkIfTokenExists();
    }
}

export function* checkIfTokenExists() {

    const res = yield call(auth.loggedIn);
    if (!res) {
        console.log('You are not logged in!');
    } else {
        yield put(tryLoginSuccess(res.email))
    }
}


export function* watchForLogout() {
    while (true) {
        yield take(TRY_LOGOUT);
        yield callLogoutApi();
    }
}

export function* callLogoutApi() {

    const res = yield call(auth.logout);
    if (!res) {
        console.log('Something went wrong!');
    } else {
        yield put(tryLogoutSuccess())
    }
}


