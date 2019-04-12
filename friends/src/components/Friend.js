import React from 'react';

const Friend = props => {


  // console.log('friend', props.friend.id)

  return (
    <div>
      <div className='friend'>
        <h2>{props.friend.name}</h2>
        <p>Age: {props.friend.age}</p>
        <p>{props.friend.email}</p>
        <button onClick={() => props.deleteFriend(props.friend.id)}>Remove friend</button>
        <button onClick={() => props.setupUpdate(props.friend, props.history)}>Update friend</button>

      </div>
    </div>
  )
}

export default Friend;
