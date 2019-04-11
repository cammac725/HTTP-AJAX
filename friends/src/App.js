import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import Home from './components/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      currentItem: null
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

  addNewFriend = item => {
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friends-list')
      })
      .catch(err => console.log(err))
  }

  setupUpdate = item => {
    this.setState({ currentItem: item });
    this.props.history.push('/friends-form')
  }

  updateFriend = item => {
    axios
      .put(`http://localhost:5000/friends/${item.id}`, item)
      .then(res => {
        this.setState({ friends: res.data, currentItem: null });
        this.props.history.push('/friends-list')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>

        <Route exact path='/' component={Home} />

        <Route
          exact
          path='/friends-list'
          render={props =>
            <FriendsList
              {...props}
              friends={this.state.friends}
              addNewFriend={this.addNewFriend}
            />
          }
        />

        <Route
          path='/friends/:id'
          render={props =>
            <Friend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setupUpdate={this.setupUpdate}
            />
          }
        />

        <Route
          exact
          path='/friends-form'
          render={props =>
            <FriendForm
              {...props}
              addNewFriend={this.addNewFriend}
              updateFriend={this.updateFriend}
              currentItem={this.state.currentItem}
            />
          }
        />
      </div>
    );
  }
}

export default App;
