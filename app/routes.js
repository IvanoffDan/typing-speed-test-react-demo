import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Main from './containers/Main';
import Login from './containers/Login';
import auth from './api/auth';

function checkAuth(nextState, replace){
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="challenge" component={Main} onEnter={checkAuth}/>
    </Route>
);