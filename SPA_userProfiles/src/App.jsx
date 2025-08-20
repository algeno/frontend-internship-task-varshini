import UserCard from './components/UserCard'
import users from "./data/users.json"


const App = () => {
  return (
    <div>
      {users.map((user)=>( <UserCard key={user.id} user={user}/>))}
    
    </div>
  )
}

export default App

