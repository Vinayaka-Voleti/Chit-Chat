import Header from './Comonents/Header';
import './App.css';
import ChatInput from './Comonents/ChatInput/ChatInput'; 
import React, { Component } from 'react';
import { sendMsg } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };

    // Bind send method to this
    this.send = this.send.bind(this);
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
