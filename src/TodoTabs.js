import React, { Component } from 'react';

class TodoTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: ["all", "active", "completed"]
    }
  }
  render() {
    return (
      <div className="helper">
        <span className="left">2 items left</span>
        <span className="tabs">
          {this.state.tabs.map((item, index) =>
            <span key={index}>{item}</span>
          )}
        </span>
        <span className="clear" > Clear Completed</span >
      </div >
    )
  }
}

export default TodoTabs;