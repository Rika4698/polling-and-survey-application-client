/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return (
            <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
                <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
            </div>
        );
    }
    if(user&& isAdmin)
    {
        return children;
    }
    return (
        <div>
           <Navigate state={location.pathname} to="/"></Navigate> 
        </div>
    );
};

export default AdminRoute;