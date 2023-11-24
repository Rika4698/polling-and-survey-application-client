import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   children:[
    //     {
    //         path:'/',
    //         element:<Home></Home>,
    //     },
    //   {
    //     path:'/menu',
    //     element:<Menu></Menu>,
    //   },
    //   {
    //     path:'/order',
    //     element:<Order></Order>,
    //   }
    //   ]
    },
  ]);