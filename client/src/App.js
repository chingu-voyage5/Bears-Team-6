import React, { Component } from 'react';

class App extends Component {
  state = {
    response : ''
  };
  
  componentDidMount() {
    fetch('/test')
    .then(res => {
      res.text()
      .then(text => this.setState({ response: text }))
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Basic Setup</h1>
        <h2>Server Says:</h2>
        <div style={{"border":"2px solid pink"}}>
          { this.state.response }
        </div>
      </div>
    );
  }
}

export default App;
