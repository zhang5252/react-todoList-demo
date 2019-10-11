import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  onRef = (ref) => {
    this.background = ref
  }

  render() {
    return (
      <div className='App'>
        <Background onRef={this.onRef} />
        <Header
          onClick={
            () => {
              this.background.onChange && this.background.onChange()
            }
          }
        />
        <TodoApp />
        <Footer />
      </div>
    );
  }
}

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageNum: 1,
    }
  }
  onChange = () => {
    let index = this.state.imageNum + 1
    if (index > 3) {
      index = 1
    }
    this.setState({
      imageNum: index
    })
  }

  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }

  render() {
    const image = require("./images/" + this.state.imageNum + ".jpg")
    const bgStyle = {
      width: '100%',
      high: '400px',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };
    return (
      <div className='cover' style={bgStyle}>
      </div>
    )
  }
}

export default App;
