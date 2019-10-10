import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <h1>TodoList</h1>
        <button onClick={this.props.onClick}>Change</button>
      </div>
    )
  }
}

export default Header;