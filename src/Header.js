import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import Loop from '@material-ui/icons/Loop';
export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>TodoList</h1>
        <div className="bg-change-button" onClick={this.props.onClick}>
          <Fab size="medium" color="secondary" title="change background">
            <Loop />
          </Fab>
        </div>
      </div>
    )
  }
}