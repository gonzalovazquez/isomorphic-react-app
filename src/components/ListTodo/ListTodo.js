import React from 'react';
import PropTypes from 'prop-types';

const ListTodo = props => (
  <div>
    {props.todos.map(todo => (
      <ul key={todo.id}>
        <li>{todo.title}</li>
      </ul>
    ))}
  </div>
);

ListTodo.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListTodo;
