import React from 'react';

import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = props => {
  return (
    <div className='friends-list'>

      <div className='friends'>
        {props.friends.map((item, id) => (
          <Friend
            {...props}
            friend={item}
            key={id}
            friends={props.friends}
          />
        ))}
      </div>

      <FriendForm friends={props.friends}
        addNewFriend={props.addNewFriend} />
    </div>
  )
}

export default FriendsList;