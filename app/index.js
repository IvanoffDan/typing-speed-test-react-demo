import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import {store} from './store/store';
import {Provider} from 'react-redux';

import './styles/styles.css';
import './styles/slider-styles.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>
    , document.querySelector('.container'));


