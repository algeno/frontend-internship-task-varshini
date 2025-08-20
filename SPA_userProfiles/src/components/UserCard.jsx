import emoji from "../data/emoji.json"
const UserCard = ({user}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"> 
         <img
        src={user.profile_image}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
      />
        <p className="text-xl font-semibold text-gray-800">Name: {user.name}</p>
        <p  className="text-gray-500">Age: {user.age}</p>
        <p  className="text-gray-500">Favourite Food: {user.favoriteFood} </p>
    </div>
  )
}

export default UserCard
