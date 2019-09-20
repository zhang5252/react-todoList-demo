import React, { Component } from 'react';
import TodoTabs from './TodoTabs';
import classNames from 'classnames';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    }
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter(item) {
    this.setState({ filter: item })
  }

  render() {
    const list = this.props.items.map((item, index) => {
      return (
        <Item
          key={item.id}
          text={item.text}
          done={item.done}
          index={index}
          removeItem={this.props.deleteClick}
          doneItem={this.props.doneClick}
        />
      );
    })
    return (
      <div>
        {list}
        <TodoTabs
          items={this.props.items}
          toggleFilter={this.toggleFilter}
          ontoggle={this.toggleFilter}
          filter={this.state.filter}
        />
      </div>

    )
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteClick = this.deleteClick.bind(this);
    this.doneClick = this.doneClick.bind(this);
  }

  deleteClick() {
    const index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  doneClick() {
    const index = parseInt(this.props.index);
    this.props.doneItem(index)
  }

  render() {
    const isDone = classNames(
      'todo-item',
      { 'todo-item completed': this.props.done }
    )
    return (
      <div className={isDone}>
        <input className='toggle' onClick={this.doneClick} type="checkbox" />
        <label>{this.props.text}</label>
        <button className='destory' onClick={this.deleteClick}></button>
      </div>
    )
  }

}

export default TodoList;