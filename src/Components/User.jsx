import { useLoaderData } from "react-router-dom"
import Users from "./Users";


const User = () => {
const user = useLoaderData();


  return (
    <div className="row row-cols-1   ms-auto row-cols-md-2 g-4 user-seaction">
        {
            user.map(user => <Users key={user.id} user={user} />)
        }


    </div>
  )
}

export default User