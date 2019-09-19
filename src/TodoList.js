import React, { Component } from 'react';
import TodoTabs from './TodoTabs';

class TodoList extends Component {
  render() {
    return (
      <div>
        <Item></Item>
        <TodoTabs></TodoTabs>
      </div>
    )
  }
}

const Item = () => {
  return (
    <div className='todo-item'>
      <input className='toggle' type="checkbox" />
      <label>1111</label>
      <button className='destory'></button>
    </div>
  )
}

export default TodoList;