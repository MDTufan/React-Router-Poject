import { useLoaderData } from "react-router-dom"
import img from "../assets/11.png"
import "./Home.css"


const Allusers = () => {
    const user =useLoaderData();
    const {id,email,username,name,phone,website } =user;
  return (
    <div className="mt-0 color-user">
    <div className="col">
    <div className="card xx-xx  mx-auto my-4">
      
      <div className="card-body ">
      <img className="img1-size1" src={img} alt="" />
        <h3 className="card-title">{name}</h3>
        <h2 className="card-title">{username}</h2>
        <h5 className="card-title">{email}</h5>
        <h5 className="card-title">{phone}</h5>
        <h5 className="card-title website">{website}</h5>
        
     </div>
    </div>
  </div>
    </div>
  )
}

export default Allusers