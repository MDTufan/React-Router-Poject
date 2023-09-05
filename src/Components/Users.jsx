
import img from "../assets/11.png"
import "./Home.css"
import { Link } from 'react-router-dom';

const Users = ({user}) => {
    
    const {id,email,username,name,phone,website } =user;
  return (
    <div>
    <div className="col">
    <div className="card xx-xx  mx-auto my-4">
      
      <div className="card-body ">
      <img className="img1-size1" src={img} alt="" />
        <h3 className="card-title">{name}</h3>
        <h4 className="card-title">{username}</h4>
        <h5 className="card-title">{email}</h5>
        <h5 className="card-title">{phone}</h5>
        <h5 className="card-title website">{website}</h5>
        <Link to={`/users/${id}`}> <button className='btn btn-outline-info'> Show Details</button> </Link> 
      
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Users