import React from 'react';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  };


  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addNewFriend({
      ...this.state
    })

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  render() {
    return (
      <div className='form-wrapper'>
        <h3>Add a friend and click submit!</h3>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleChanges}
          />
          <input
            type='text'
            name='age'
            value={this.state.age}
            placeholder='Age'
            onChange={this.handleChanges}
          />
          <input
            type='email'
            name='email'
            value={this.state.email}
            placeholder='Email address'
            onChange={this.handleChanges}
          />
          <button type='submit' value='submit'>Add friend</button>
        </form>
      </div>

    )
  }
}

export default FriendForm;