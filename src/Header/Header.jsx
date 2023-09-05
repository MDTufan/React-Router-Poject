

import './Header.css'
import { Link } from 'react-router-dom';



function Header() {
  return (
   <nav className="navbar navbar-expand-lg  xxx">
  <div className="container">
    <Link className="navbar-brand" to="/home">Router</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  xx" to="/">User</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  xx" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  xx" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  xx" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  xx" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  xx" to="/poject">Poject</Link>
        </li>
        
       
        
        
      </ul>
     
    </div>
  </div>
</nav>
  );
}

export default Header;