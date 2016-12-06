import {combineReducers} from 'redux';
import TextReducer from './reducer-text';

const rootReducer = combineReducers({
    texts: TextReducer
});

export default rootReducer;