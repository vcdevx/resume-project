import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert('Hello!');
  }
  
  render() {
    return (
    <button onClick={this.sayHello}>
      Click me!
    </button>
  );
    }
}

export default App;
