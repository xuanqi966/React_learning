import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    users : [
      {username: 'Alice', password : '12345'},
      {username: 'Ben', password: '678910'}
    ]
  }
  
  userNameEditor = (event) => {
    this.setState({
      users : [
        {username: event.target.value, password : '12345'},
        {username: 'Ben', password: '678910'}
      ]
    })
  }

  render() {
    const style = {
      'text-align' : 'center'
    }
    
    return (
      <div className="App">
        <UserInput
        style = {style}
          changed = {this.userNameEditor}
          name = {this.state.users[0].username}></UserInput>
        <UserOutput
          style = {style}
          username = {this.state.users[0].username}
          password = {this.state.users[0].password}></UserOutput>
      </div>
    );
  }
}

export default App;
