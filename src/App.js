import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Orders from './Components/Orders/Orders';
import Address from './Components/Address/Address';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
// import Layout from './ComponentsOld/shared/Layout'
// import Home from './ComponentsOld/layout/Home';
// import Services from './ComponentsOld/layout/Services';
// import About from './ComponentsOld/layout/About';
// import Notfound from './ComponentsOld/shared/Notfound';
// import Projects from './ComponentsOld/layout/projects/Projects';
// import Web from './ComponentsOld/layout/projects/Web';
// import Mobile from './ComponentsOld/layout/projects/Mobile';
// import Movies from './ComponentsOld/layout/movies/Movies';

export default function App() {
  // const routers = createBrowserRouter([
  //     {path:'',element:<Layout/> ,children :[
  //         {path:'',element: <Navigate to={"/home"}/>},
  //         {path:'Home',element:<Home/>},
  //         {path:'about',element:<About/>},
  //         {path:'services',element:<Services/>},
  //         {path:'projects',element:<Projects/> ,children:[
  //           {path:'',element:<Navigate to={"web"} />},
  //           {path:'web',element:<Web />},
  //           {path:'mobile',element:<Mobile />},
  //         ]},
  //         {path:'movies',element:<Movies/>},
  //       ]
  //     },
  //     {path:'*',element:<Notfound/>},
  //   ])
  const routers = createBrowserRouter([
    {path :'', element :<Layout /> ,children :[
      {path : '' , element: <Navigate to={"/home"}/>},
      {path : 'home' , element : <Home />},
      {path : 'products' , element : <Products /> },
      {path : 'register' , element : <Register />},
      {path : 'login' , element : <Login />},
      {path : 'cart' , element : <Cart />},
      {path : 'categories' , element : <Categories />},
      {path : 'brands' , element : <Brands /> },
      {path : 'orders' , element : <Orders />},
      {path : 'address' , element : <Address />},
      {path : '*' , element : <NotFound />},
    ]}
    
  ])
  return (
    <div>
        <RouterProvider router = {routers}></RouterProvider>
    </div>
  )
}
