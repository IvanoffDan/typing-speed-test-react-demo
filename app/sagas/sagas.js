import {fetchTexts} from '../api/textApi';
import {put, take, call} from 'redux-saga/effects';
import {fetchTextsSucceeded, selectRandomText, FETCH_TEXTS} from '../actions/index';
import {TRY_LOGIN, tryLoginSuccess} from '../actions/index'
import auth from '../api/auth';


/*-----------------------TextLoading-----------------------------------------------*/
export function* watchForLoadTexts(){
    while(true){
        yield take(FETCH_TEXTS);
        yield loadTexts();
    }
}

export function* loadTexts(){
    try {
        const texts = yield call(fetchTexts);
        yield put(fetchTextsSucceeded(texts));
        let textIdToSelect = Math.floor((Math.random() * 3) + 1);
        yield put(selectRandomText(texts[textIdToSelect]));
    } catch (err) {
        console.log(err);
    }
}

/*-----------------------Auth------------------------------------------------------*/

export function* watchForLogin(){
    while(true){
        const {email, pass} = yield take(TRY_LOGIN);
        yield callLoginApi(email, pass);
    }
}

export function* callLoginApi(email, pass){

    const res = yield call(auth.login, {email, pass});
    console.log(test);
    if (!res) {
        console.log('You have entered a wrong username or passsword!');
    } else {
        yield put(tryLoginSuccess(email))
    }
}