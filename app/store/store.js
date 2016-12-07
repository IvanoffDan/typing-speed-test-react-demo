import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import {watchForLoadTexts, watchForLogin} from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
}

export const store = configureStore();

sagaMiddleware.run(watchForLoadTexts);
sagaMiddleware.run(watchForLogin);
