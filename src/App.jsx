
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Main from './Components/Main';
import Home from './Components/Home';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Poject from './Components/Poject';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      
      children: [
        {
          path: "/",
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
