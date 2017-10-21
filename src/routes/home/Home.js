/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Main Page</h1>
          {this.props.todos.length ?
          {this.props.todos.map(todo =>
            <ul key={todo.key}>
              <li>{todo}</li>
            </ul>
          )}: null}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapState = state => ({
  todos: state.todo.todos,
});

export default connect(mapState)(Home);
