/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useSurveyor from "../hooks/useSurveyor";


const SurveyorRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isSurveyor, isSurveyorLoading] = useSurveyor();
    const location = useLocation();
    if(loading || isSurveyorLoading){
        return (
            <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
                <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
            </div>
        ); 
    }
    if(user&& isSurveyor)
    {
        return children;
    }
    return (
        <div>
           <Navigate state={location.pathname} to="/"></Navigate> 
        </div>
    );
};


export default SurveyorRoute;