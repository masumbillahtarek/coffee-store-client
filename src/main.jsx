import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
import Home from './Home.jsx';
import CoffeeDetails from './CoffeeDetails.jsx';
import Register from './Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import Login from './Login.jsx';
import UserData from './UserData.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
   {
path:"/",
element:<Home></Home>,
loader:()=>fetch('http://localhost:5000/coffees')
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {

    path:"/update/:id",
    element:<UpdateCoffee></UpdateCoffee>,
     loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  },{
    path:"/coffee/:id",
    element:<CoffeeDetails></CoffeeDetails>,
    loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path:"/register",
    element:<Register></Register>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/userData",
    element:<UserData></UserData>,
    loader:()=>fetch('http://localhost:5000/users')
  }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
