import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.text.current.value) return
    this.props.addItem({text: this.text.current.value})
    this.text.current.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.text}
          className="todoList-input"
          type="text"
          placeholder="接下来做什么？"
          // 加载页面时聚焦
          autoFocus='autoFocus'
        />
      </form>
    )
  }
}

export default TodoInput;