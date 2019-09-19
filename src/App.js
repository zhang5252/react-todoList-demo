import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Background />
        <Header />
        <TodoApp/>
        <Footer />
      </div>
    );
  }
}

const Background = () => {
  const imageNmu = 3;
  const image = require("./images/" + imageNmu + ".jpg")
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

export default App;
