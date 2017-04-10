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
    apiKey: "AIzaSyBZPRLMHd7yYDOclfqngj-FQOa6q4XusJg",
    authDomain: "gal-recipes.firebaseapp.com",
    databaseURL: "https://gal-recipes.firebaseio.com",
    projectId: "gal-recipes",
    storageBucket: "gal-recipes.appspot.com",
    messagingSenderId: "300680222201"
};


initDB(fbConfig);

render(<AppWrapper/>, document.getElementById('app'));
