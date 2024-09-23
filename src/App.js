import React from 'react'
import Layout from './Components/shared/Layout'
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Home from './Components/layout/Home';
import Services from './Components/layout/Services';
import About from './Components/layout/About';
import Notfound from './Components/shared/Notfound';
import Projects from './Components/layout/projects/Projects';
import Web from './Components/layout/projects/Web';
import Mobile from './Components/layout/projects/Mobile';
import Movies from './Components/layout/movies/Movies';

export default function App() {
  const routers = createBrowserRouter([
      {path:'',element:<Layout/> ,children :[
          {path:'',element: <Navigate to={"/home"}/>},
          {path:'Home',element:<Home/>},
          {path:'about',element:<About/>},
          {path:'services',element:<Services/>},
          {path:'projects',element:<Projects/> ,children:[
            {path:'',element:<Navigate to={"web"} />},
            {path:'web',element:<Web />},
            {path:'mobile',element:<Mobile />},
          ]},
          {path:'movies',element:<Movies/>},
        ]
      },
      {path:'*',element:<Notfound/>},
    ])
  return (
    <div>
        <RouterProvider router = {routers}></RouterProvider>
    </div>
  )
}
