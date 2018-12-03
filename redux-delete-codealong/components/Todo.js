import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    );
  }
};

export default Todo
