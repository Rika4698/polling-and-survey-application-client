import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
      const isAdmin = true;
    //   className={({ isAdmin }) =>
    //   isAdmin ? "flex-1 p-8 bg-blue-50" :  "flex-1 p-8 bg-blue-50" 
    // }
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className=  "w-64 min-h-screen bg-blue-200">
                <ul className=
        "menu   text-xl text-fuchsia-600 font-semibold p-4" >
                    {
                        isAdmin? <>
                        
                        <h2 className="text-3xl text-center font-serif font-bold text-purple-600 mb-2">Admin</h2>
                    <h3 className="text-xl text-center font-mono font-semibold text-lime-600 mb-10">Dashboard</h3>
                    <li>
                        <NavLink to="/">
                           
                             Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/user">
                            
                        All Users</NavLink>
                    </li>


                        </>
                        : 
                        <>
                         <h2 className="text-3xl text-center font-serif font-bold text-purple-600 mb-2">Surveyor</h2>
                    <h3 className="text-xl text-center font-mono font-semibold text-lime-600 mb-10">Dashboard</h3>
                    <li>
                        <NavLink to="/">
                           
                             Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/surveyor">
                            
                        Create Survey</NavLink>
                    </li>
                        </>
                    }
                   
                    
                   
                    
                </ul>
            </div>
            {/* dashboard content */}
            <div className=  "flex-1 p-8 bg-blue-50" 
    >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;