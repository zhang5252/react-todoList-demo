import React, { Component } from 'react';
import classNames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox'

class TodoListItem extends Component {
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
                <Checkbox
                    checked={this.props.done}
                    onChange={this.doneClick}
                    className='toggle'
                />
                <label>{this.props.text}</label>
                <button className='destory' onClick={this.deleteClick}></button>
            </div>
        )
    }

}
export default TodoListItem;