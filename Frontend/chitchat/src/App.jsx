import Header from './Comonents/Header';
import './App.css';
import ChatInput from './Comonents/ChatInput/ChatInput'; 
import React, { Component } from 'react';
import { connect,sendMsg } from './api';
// import Message from './Comonents/Message';
import ChatHistory from './Comonents/ChatHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };

    // Bind send method to this
    this.send = this.send.bind(this);
  }

  componentDidMount(){
    connect((msg)=>{
      console.log("NEw message rom user");
      this.setState(prevState =>({
        chatHistory:[...prevState.chatHistory, msg]

      }))
      console.log(this.state);
    })
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
        <ChatHistory chatHistory={this.state.chatHistory}/>
        
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
