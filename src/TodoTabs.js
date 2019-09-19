import React, { Component } from 'react';

class TodoTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      states: ["all", "active", "completed"]
    }
  }
  render() {
    return (
      <div className="helper">
        <span className="left">2 items left</span>
        <span className="tabs">
          {this.state.states.map(item =>
            <span>{item}</span>
          )}
        </span>
        <span className="clear" > Clear Completed</span >
      </div >
    )
  }
}

export default TodoTabs;