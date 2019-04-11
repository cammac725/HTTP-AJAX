import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addNewFriend = (e, newFriend) => {
    e.preventDefault();
    console.log(this.state.friends)
    this.setState({
      friends: [...this.state.friends, newFriend],
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <div className="App">
        <FriendsList
          friends={this.state.friends}
          addNewFriend={this.addNewFriend} />
      </div>
    );
  }
}

export default App;
