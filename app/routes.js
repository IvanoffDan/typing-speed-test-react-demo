import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Main from './containers/Main';
import Completed from './containers/Completed';
import Login from './containers/Login';
import auth from './api/auth';

function checkAuth(nextState, replace){
    if (!auth.loggedIn()) {
        replace({
            pathname: '/',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="main" component={Main}  onEnter={checkAuth}/>
        <Route path="completed" component={Completed}/>
    </Route>
);