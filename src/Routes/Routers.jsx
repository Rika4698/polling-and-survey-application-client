import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
    //     {
    //         path:'/',
    //         element:<Home></Home>,
    //     },
    //   {
    //     path:'/menu',
    //     element:<Menu></Menu>,
    //   },
      {
        path:'/login',
        element:<Login></Login>,
      }
      ]
    },
  ]);