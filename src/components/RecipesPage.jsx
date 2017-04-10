'use strict';

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import fbConnect from '../hoc/fbConnect.jsx';
import {Link} from 'react-router-dom';

function mapStateToProps(state) {
    return {
        recipes: state.fb.recipes
    };
}

class RecipesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const recipesList = _.map(this.props.recipes, (recipe, recipeId) => {
            return (
                <div className="recipe-row" key={recipeId}>
                    <Link to={"/recipe/" + recipeId}>{recipe.title}</Link>
                </div>
            );
        });

        return (
            <div className="recipes-page">
                <div className="recipe-list">
                    {recipesList}
                </div>
            </div>
        );
    }

}

const wrappedWithFb = fbConnect({'recipes': '/recipes'})(RecipesPage);
export default connect(mapStateToProps)(wrappedWithFb);
