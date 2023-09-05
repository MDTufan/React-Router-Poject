
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Main from './Components/Main';
import Home from './Components/Home';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Poject from './Components/Poject';
import User from './Components/User';
import Allusers from './Components/Allusers';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      
      children: [
        {
            path:"/",
            element:<User />,
            loader : ()=>fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: "/users/:id",
          element: <Allusers />,
          loader :({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

        },
        {
          path: "/home",
          element: <Home />,
          
        },
        {
          path: "/About",
          element: <About />,
        
        },
        {
          path: "/contact",
          element: <Contact />,
          
        },
        {
          path: "/blogs",
          element: <Blogs />,
          
        },
        {
          path: "/poject",
          element: <Poject />,
        },
      ],
    },
  ]);
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
