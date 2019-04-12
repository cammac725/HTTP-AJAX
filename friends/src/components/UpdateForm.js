import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
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
    let id;
    let obj = this.props.friends.filter(obj => obj.name === this.state.name)[0];
    if (obj === undefined) {
      id = 0;
    } else {
      id = obj.id;
    }
    this.props.updateFriend(this.state, id)
    alert("Friend has been updated")
    this.setState({
      name: '',
      age: '',
      email: ''
    })

  }

  render() {
    return (
      <div className='form-wrapper'>
        <h3>Update a friend's info</h3>
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
          <button type='submit' value='submit'>Update friend</button>
        </form>

      </div>
    )
  }
}


export default UpdateForm;