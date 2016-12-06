import {fetchTexts} from '../api/textApi';
import {put, take, call} from 'redux-saga/effects';
import {fetchTextsSucceeded, selectRandomText, FETCH_TEXTS} from '../actions/index';

export function* watchForLoadTexts(){
    while(true){
        yield take('FETCH_TEXTS');
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