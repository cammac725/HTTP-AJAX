import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends,
      name: '',
      age: '',
      email: ''
    }
  }

  addNewFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.setState({
      friends: [...this.state.friends, newFriend],
      name: '',
      age: '',
      email: ''
    })
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className='add-form'>
        <h2>Add a new friend</h2>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChanges}>
        </input>
        <input
          type='text'
          name='age'
          value={this.state.age}
          placeholder='Age'
          onChange={this.handleChanges}>
        </input>
        <input
          type='email'
          name='email'
          value={this.state.email}
          placeholder='Email address'
          onChange={this.handleChanges}>
        </input>
        <button onClick={this.addNewFriend}>Add now</button>
      </form>
    )
  }

}

export default FriendForm;