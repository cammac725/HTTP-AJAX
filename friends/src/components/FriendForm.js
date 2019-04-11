import React from 'react';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  componentDidMount() {
    if (this.props.currentItem) {
      this.setState({
        name: this.state.currentItem.name,
        age: this.state.currentItem.age,
        email: this.state.currentItem.email
      })
    }
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.props.currentItem) {
      this.props.addNewFriend({
        ...this.state
      })
    } else {
      this.props.updateFriend({
        ...this.state,
        id: this.props.currentItem.id
      })
    }
    this.setState({
      name: '',
      age: '',
      email: ''
    });
    this.props.history.push('/friends-list')
  }

  render() {
    return (
      <form className='add-form' onSubmit={this.handleSubmit}>
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
        <button>Add friend</button>
      </form>
    )
  }
}

export default FriendForm;