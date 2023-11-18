import React from 'react';
import UserCard from './UserCard';

const UserCards = ({ userData }) => {
  console.log("from usercardsss", userData);
  return (
    <div>
      {userData.map((user, index) => (
       
        <UserCard key={user.name} user={user} />
      ))}
    </div>
  );
}

export default UserCards;