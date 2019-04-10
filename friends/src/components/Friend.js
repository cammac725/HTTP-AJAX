import React from 'react';

const Friend = props => {
  return (
    <div>
      <div className='friend'>
        <h2>{props.friend.name}</h2>
        <p>Age: {props.friend.age}</p>
        <p>{props.friend.email}</p>
      </div>
    </div>
  )
}

export default Friend;