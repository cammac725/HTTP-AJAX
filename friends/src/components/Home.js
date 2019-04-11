import React from 'react';

const Home = props => {

  const seeFriends = e => {
    e.preventDefault();
    props.history.push('friends-list');
  }

  return (
    <div className='home'>
      <button onClick={seeFriends}>See all Friends</button>
    </div>
  )
}

export default Home;