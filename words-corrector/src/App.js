import React, { Component } from 'react';
import './App.css';

import AutocorrectTextarea from './components/AutocorrectTextarea';
const title = "Autocorrection App";

class App extends Component {
  render() {
    const { corrections } = this.props;
    return (
      <div>
        <div className="App">
          <AutocorrectTextarea corrections={corrections} />
        </div>
      </div>
    );
  }
}

export default App;
