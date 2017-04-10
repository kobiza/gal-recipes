'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import makeStore from '../utils/makeStore.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AppHeader from './AppHeader.jsx';
import Home from './Home.jsx';
import RecipesPage from './RecipesPage.jsx';
import RecipePage from './RecipePage.jsx';

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
                                <li><Link to="/recipes">Recipes</Link></li>
                            </ul>

                            <hr/>

                            <Route exact path="/" component={Home}/>
                            <Route path="/recipes" component={RecipesPage}/>
                            <Route path="/recipe/:id" component={RecipePage}/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
