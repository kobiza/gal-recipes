'use strict';

require('./todoPage.scss');

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import fbConnect from '../hoc/fbConnect.jsx';

function mapStateToProps(state) {
    return {
        todo: state.fb.todo
    };
}

class TodoPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = _.map(this.props.todo, (todo, todoId) => {
            return <li key={todoId}>{todo.description}</li>
        });

        return (
            <div className="todo-page">
                <h2>Todo</h2>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }

}

const wrappedWithFb = fbConnect({'todo': '/todo'})(TodoPage);
export default connect(mapStateToProps)(wrappedWithFb);
