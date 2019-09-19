import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <form>
        <div className='comment-field-input'>
          <input className="todoList-input" type="text" placeholder="接下来做什么？" />
        </div>
      </form>
    )
  }
}

export default TodoInput;