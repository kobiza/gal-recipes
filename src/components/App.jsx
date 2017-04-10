'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import makeStore from '../utils/makeStore.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AppHeader from './AppHeader.jsx';
import Home from './Home.jsx';
import TodoPage from './TodoPage.jsx';

const store = makeStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppHeader title="Holon football"/>

                    <Router>
                        <div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/todo">Todo</Link></li>
                            </ul>

                            <hr/>

                            <Route exact path="/" component={Home}/>
                            <Route path="/todo" component={TodoPage}/>

                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
