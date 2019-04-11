import React from 'react';

const Friend = props => {
  const item = props.friends.find(
    item => `${item.id}` === props.match.params.id
  );

  return (
    <div>
      <div className='friend'>
        <h2>{props.friend.name}</h2>
        <p>Age: {props.friend.age}</p>
        <p>{props.friend.email}</p>
        <button onClick={() => props.deleteFriend(item.id)}>Remove friend</button>
        <button onClick={() => props.setupUpdate(item)}>Update friend</button>

      </div>
    </div>
  )
}

export default Friend;
