import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home/Home";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import Dashboard from "../Layout/Dashboard";
import Surveyor from "../Pages/Dashboard/Surveyor/Surveyor";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import SurveyorRoute from "./SurveyorRoute";
import AllSurvey from "../Pages/Dashboard/AllSurvey/AllSurvey";
import UpdateSurvey from "../Pages/Dashboard/UpdateSurvey/UpdateSurvey";
import AdminSurvey from "../Pages/Dashboard/AdminSurvey/AdminSurvey";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorMessage></ErrorMessage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
    //   {
    //     path:'/menu',
    //     element:<Menu></Menu>,
    //   },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Registration></Registration>,
      }
      
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'user',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>,
            },
            {
                path:'survey',
                element:<AdminRoute><AdminSurvey></AdminSurvey></AdminRoute>,
            },
            {
                path:'surveyor',
                element:<SurveyorRoute><Surveyor></Surveyor></SurveyorRoute>,
               
            },
            {
                path:'list',
                element:<SurveyorRoute><AllSurvey></AllSurvey></SurveyorRoute>,
            },
            {
                path:'updateSurvey/:id',
                element:<SurveyorRoute><UpdateSurvey></UpdateSurvey></SurveyorRoute>,
                loader:({params})=>fetch(`http://localhost:5000/survey/${params.id}`),
            }
        ]
    }
  ]);