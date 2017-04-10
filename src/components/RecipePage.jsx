'use strict';

require('./recipePage.scss');

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import fbConnect from '../hoc/fbConnect.jsx';

function mapStateToProps(state) {
    return {
        recipe: state.fb.recipe
    };
}

class RecipePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.recipe){
            return <div className="recipe-page"></div>
        }

        const recipe = this.props.recipe;
        const ingredientsList = _.map(recipe.ingredients, (ingredient, index) => {
            return <li key={'ingredient-' + index}>{ingredient}</li>
        });
        const directionsList = _.map(recipe.directions, (direction, index) => {
            return <li key={'direction-' + index}>{direction}</li>
        });

        return (
            <div className="recipe-page">
                <h2 className="recipe-title">{recipe.title}</h2>
                <p className="recipe-description">{recipe.description}</p>
                <ul className="recipe-ingredients">
                    {ingredientsList}
                </ul>
                <ul className="recipe-directions">
                    {directionsList}
                </ul>
            </div>
        );
    }

}

const mapStateToFirebase = (props) => {
    const recipeId = props.match.params.id;

    return {
        'recipe': '/recipes/' + recipeId
    };
};

const wrappedWithFb = fbConnect(mapStateToFirebase)(RecipePage);
export default connect(mapStateToProps)(wrappedWithFb);
