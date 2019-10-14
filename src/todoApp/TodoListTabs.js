import React, { Component } from 'react';
import Button from "@material-ui/core/Button"

class TodoListTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: ["all", "active", "completed"],
    }
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  clearCompleted() {
    this.props.clearCompletedItems();
  }

  render() {
    return (
      <div className="helper">
        <span className="left" style={{ color: '#f50057' }}>
          {this.props.items.filter(item => !item.done).length} left
        </span>
        <span className="tabs">
          {this.state.tabs.map((item) =>
            <span
              className={this.props.filter === item ? 'actived' : ''}
              key={item}
              onClick={() => this.props.toggleFilter(item)}
            >
              {item}
            </span>
          )}
        </span>
        <Button size="small" color="secondary" className="clear" onClick={this.clearCompleted}> Clear Completed</Button >
      </div >
    )
  }
}

export default TodoListTabs;