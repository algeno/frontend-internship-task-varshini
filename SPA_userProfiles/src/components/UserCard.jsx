import React from 'react'

const UserCard = ({user}) => {
  return (
    <div> 
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Favourite Food: {user.favoriteFood}</p>
    </div>
  )
}

export default UserCard