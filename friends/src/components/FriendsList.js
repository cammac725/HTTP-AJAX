import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = props => {
  console.log(props.friends)
  return (
    <div className='friends-list'>

      <h1>Friends List</h1>

      <div className='friends'>
        {props.friends.map((item, id) => (
          <Friend
            friend={item}
            key={id} />
        ))}
      </div>

      <FriendForm />
    </div>
  )
}

export default FriendsList;