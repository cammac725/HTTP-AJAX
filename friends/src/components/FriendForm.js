import React from 'react';

const FriendForm = props => {
  return (
    <form className='add-form'>
      <h2>Add a new friend</h2>
      <input
        type='text'
        name='name'
        value=''
        placeholder='Name'
        onChange={props.handleChanges}>
      </input>
      <input
        type='text'
        name='age'
        value=''
        placeholder='Age'
        onChange={props.handleChanges}>
      </input>
      <input
        type='email'
        name='email'
        value=''
        placeholder='Email address'
        onChange={props.handleChanges}>
      </input>
      <button>Add now</button>
    </form>
  )
}

export default FriendForm;