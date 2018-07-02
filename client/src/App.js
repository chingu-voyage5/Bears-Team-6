import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    gradeLevel: '',
    text:
      'I will build a great, great wall on our southern border and I will have Mexico pay for that wall.',
  };

  componentDidMount() {
    axios
      .post('/api/readability', {
        text: this.state.text,
      })
      .then(res => this.setState({ ...res.data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Basic Setup</h1>
        <h3>
          The grade level of "{this.state.text}" is: {this.state.gradeLevel}
        </h3>
      </div>
    );
  }
}

export default App;
