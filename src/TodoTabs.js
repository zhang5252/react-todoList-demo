import React, { Component } from 'react';

class TodoTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: ["all", "active", "completed"],
    }
  }
  render() {
    return (
      <div className="helper">
        <span className="left" style={{color:'#f50057'}}>
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
        <span className="clear" > Clear Completed</span >
      </div >
    )
  }
}

export default TodoTabs;