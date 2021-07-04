import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import UpdateForm from './components/UpdateForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
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


  updateFriend = (id, item) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, item)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friends-list')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path='/' render={props =>
          <FriendsList
            {...props}
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
        } />


        <Route
          path='/update-form'
          render={props =>
            <UpdateForm
              {...props}
              friends={this.state.friends}
              updateFriend={this.updateFriend}
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
            />
          }
        />
      </div>
    );
  }
}

export default App;
