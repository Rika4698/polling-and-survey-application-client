/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading)
        {
            return (
                <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
                    <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
                </div>
            );
        }



    if(user)
    {
        return children;
    }
    return (
        <div>
             <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;