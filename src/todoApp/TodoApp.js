import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
    this.text = React.createRef();
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
  }

  addItem(item) {
    const newItem = {
      text: item.text,
      id: Date.now(),
      done: false
    }

    this.setState((state) => ({
      items: state.items.concat(newItem)
    }));
  }

  deleteItem(index) {
    this.state.items.splice(index, 1)
    this.setState((state) => ({
      items: state.items
    }));
  }

  clearCompletedItems() {
    this.setState((state) => ({
      items: state.items.filter(item => !item.done)
    }))
  }

  doneItem(index) {
    const items = this.state.items;
    const todo = items[index];
    items.splice(index, 1);
    todo.done = !todo.done;
    todo.done ? items.unshift(todo) : items.push(todo);
    this.setState({ items });
  }

  render() {
    return (
      <div className='wrapper'>
        <TodoInput
          items={this.state.items}
          addItem={this.addItem}
        />
        <TodoList
          items={this.state.items}
          deleteClick={this.deleteItem}
          doneClick={this.doneItem}
          clearCompletedItems={this.clearCompletedItems}
        />
      </div>
    )
  }
}

export default TodoApp;