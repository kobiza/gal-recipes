'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {initDB} from './utils/DAL.js';
import makeStore from './utils/makeStore.js';

import App from './components/App.jsx';

const store = makeStore();

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

var fbConfig = {
    apiKey: "AIzaSyBfRrwXia76gzwZyafvJXStJIokMRE0Oss",
    authDomain: "redux-fb-boilerplate.firebaseapp.com",
    databaseURL: "https://redux-fb-boilerplate.firebaseio.com",
    projectId: "redux-fb-boilerplate",
    storageBucket: "redux-fb-boilerplate.appspot.com",
    messagingSenderId: "616926593216"
};


initDB(fbConfig);

render(<AppWrapper/>, document.getElementById('app'));
