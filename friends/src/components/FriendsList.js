import React from 'react';
import { NavLink } from 'react-router-dom'

const FriendsList = props => {
  return (
    <div>

      <div className='friends'>
        {props.friends.map(item => (
          <div className='friend' key={item.id}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>{item.email}</p>
            <button
              onClick={() => props.deleteFriend(item.id)}>
              Remove friend
            </button>
            <NavLink to='/update-form'>
              Update Me
            </NavLink>

          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendsList;