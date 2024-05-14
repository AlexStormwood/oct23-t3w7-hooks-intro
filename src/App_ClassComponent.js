import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      message: "Hello world!"
    }
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
