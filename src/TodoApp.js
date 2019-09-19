import React, { Component } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


class TodoApp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

export default TodoApp;