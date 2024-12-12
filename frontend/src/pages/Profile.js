import { useContext} from 'react'
import { UserContext } from '../context/userContext'

export default function Profile() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>profile</h1>
      {!!user && (<h2>Hi {user.name}!</h2>)}
    </div>
  )
}
