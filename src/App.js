import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';


class App extends Component {
constructor() {
  super();
  this.change = this.change.bind(this);
}

  change() {
    console.log('changed');
  }
  render() {
    return (
      <div className="App container">
      <h2> Note Editor</h2>
        <div className="row">
          <Sidebar />
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
