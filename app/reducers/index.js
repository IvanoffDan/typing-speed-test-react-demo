import {combineReducers} from 'redux';
import TextReducer from './reducer-text';
import UserReducer from './reducer-user';

const rootReducer = combineReducers({
    texts: TextReducer,
    user: UserReducer
});

export default rootReducer;