import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('/test').catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Basic Setup</h1>
      </div>
    );
  }
}

export default App;