import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useSurveyor from "../hooks/useSurveyor";
import { useState, useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import {  Home, Users, FileText, DollarSign, Menu } from "lucide-react";
import { BiLogOut } from "react-icons/bi";
import {  LuX } from "react-icons/lu";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";
const Dashboard = () => {
    const location = useLocation();
      const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
      const [isAdmin] = useAdmin();
      const [isSurveyor] = useSurveyor();

      const handleSignOut = () => {
        logOut()
          .then()
          swal({
        
            text: "Logged out successfully!",
            icon: "success",
            timer:1600,
            
          })
     navigate(location?.state?location.state :'/' )
          .catch()
      };
      const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
      const [isOpen, setIsOpen] = useState(false);
    
      useEffect(() => {
        const rootElement = document.documentElement;
        if (isDarkMode) {
          rootElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          rootElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [isDarkMode]);
      const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
          // Simulate loading time
          const timer = setTimeout(() => {
            setIsLoading(false);
          }, 1500);
          return () => clearTimeout(timer);
        }, []);
      const [showCloseButton, setShowCloseButton] = useState(true);
      const sidebarRef = useRef(null);
  
      useEffect(() => {
          const handleScroll = () => {
              if (sidebarRef.current) {
                  const scrollTop = sidebarRef.current.scrollTop;
                  setShowCloseButton(scrollTop === 0); // Show only when at the top
              }
          };
  
          if (sidebarRef.current) {
              sidebarRef.current.addEventListener('scroll', handleScroll);
          }
  
          return () => {
              if (sidebarRef.current) {
                  sidebarRef.current.removeEventListener('scroll', handleScroll);
              }
          };
      }, []);
    
    
    return (
        <div className={`   
            ${isAdmin ? " bg-blue-100 dark:bg-slate-800 "  : isSurveyor? " bg-purple-100 dark:bg-zinc-800" :"" 
           }`}>
      


    <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" onClick={() => setIsOpen(true)} className="border border-gray-300 inline-flex items-center p-2 mt-4 ms-8 text-sm  text-gray-800 rounded-lg lg:hidden bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-500 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <Menu />
  
</button>
{isOpen && (
        <div
          className="fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-50  z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
<aside  id="separator-sidebar" className={` fixed top-0 left-0 z-40 w-64 h-screen overflow-y-auto transition-transform -translate-x-full lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`} aria-label="Sidebar">
        
  
  
   <div ref={sidebarRef} className={`h-full px-3 py-4  overflow-y-auto shadow-md shadow-slate-400 
       ${isAdmin ? " bg-blue-100 dark:bg-slate-800"  : isSurveyor? " bg-purple-100 dark:bg-zinc-800" :"" 
      }`}>

{showCloseButton && (<button
                        onClick={() => setIsOpen(false)}
                        className={`lg:hidden absolute top-4 right-4 p-2 rounded-full bg-slate-300 dark:bg-white text-gray-800 dark:text-gray-800 z-[100]  `}
                      >
                        <LuX size={25} />
                      </button>)}
  
    {user?(
   <div className="text-center mb-6">
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-center mb-6">
    <h2 className="font-medium text-xl font-serif mt-14 lg:mt-8 mb-6 ">
  <span className={` ${isAdmin ? "text-blue-600 text-2xl dark:text-blue-300" : "text-purple-600 text-xl dark:text-purple-300"} font-bold`}>{isAdmin ? "Admin" : "Surveyor"}</span>{" "}
  <span className="text-slate-800 dark:text-gray-200">Dashboard</span>
</h2>
          <motion.img
            src={user.photoURL}
            alt="Profile"
            className={`w-20 h-20 rounded-full mx-auto border-4  ${isAdmin ? " border-blue-500 "  : isSurveyor? " border-purple-500" :"" 
      } `}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <h2 className="text-lg font-semibold mt-2 text-slate-900 dark:text-slate-50">{user.displayName}</h2>
          <span className="block text-sm text-gray-500 truncate mt-1 dark:text-gray-300 ">
                {user.email}
                </span>
                </motion.div>
        </div>


             ):""}


        <div className="mb-6 mx-5 ">
              <li className="flex items-center">
            <span className="mr-2 font-medium text-gray-600 dark:text-gray-300 ">Dark Mode</span>
      <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="sr-only"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            onClick={() => setIsOpen(false)}
          />
          <div className={`block w-[75px] h-8 rounded-full transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-blue-500 shadow-inner' : 'bg-gray-300 shadow-md'}`}></div>
          <div className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-11' : ''}`}></div>
        </div>
      </label>
</li>
            </div>
      <ul className="space-y-2 font-medium   pt-9 mt-4  border-t-2 border-gray-300 dark:border-gray-400">



      <nav className="space-y-6  ">
          {isAdmin && (
            <>
             <li className="mx-3"> <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center  gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-blue-600 text-white dark:bg-slate-500 scale-105 dark:text-slate-100" : "bg-blue-200 hover:bg-blue-600 hover:text-white dark:bg-slate-300  dark:hover:bg-slate-500 dark:hover:text-white     "
      }`}>
                <Home className="inline mr-2" /> Home
              </NavLink></li>


             <li className="mx-3"> <NavLink to="/dashboard/user" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-blue-600 text-white dark:bg-slate-500 scale-105 dark:text-slate-100" : "bg-blue-200 hover:bg-blue-600 hover:text-white dark:bg-slate-300  dark:hover:bg-slate-500 dark:hover:text-white     "
      }`}>
                <Users className="inline mr-2" /> All Users
              </NavLink></li>



              <li className="mx-3"> <NavLink to="/dashboard/survey" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-blue-600 text-white dark:bg-slate-500 scale-105 dark:text-slate-100" : "bg-blue-200 hover:bg-blue-600 hover:text-white dark:bg-slate-300  dark:hover:bg-slate-500 dark:hover:text-white     "
      }`}>
                <FileText className="inline mr-2" /> All Surveys
              </NavLink></li>



             <li className="mx-3"> <NavLink to="/dashboard/allPayment" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-blue-600 text-white dark:bg-slate-500 scale-105 dark:text-slate-100" : "bg-blue-200 hover:bg-blue-600 hover:text-white dark:bg-slate-300  dark:hover:bg-slate-500 dark:hover:text-white     "
      }`}>
                <DollarSign className="inline mr-2" /> All Payments
              </NavLink></li>



             <li className="mx-2"> <NavLink to="/dashboard/allResponse" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-blue-600 text-white dark:bg-slate-500 scale-105 dark:text-slate-100" : "bg-blue-200 hover:bg-blue-600 hover:text-white dark:bg-slate-300  dark:hover:bg-slate-500 dark:hover:text-white     "
      }`}>
                <FileText className="inline mr-2" /> Survey Responses
              </NavLink></li>
            </>
          )}



          {isSurveyor && (
            <>
             <li className=" mx-3"> <NavLink to="/"  onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-purple-600 text-white dark:bg-zinc-500 scale-105 dark:text-slate-100" : "bg-purple-200 hover:bg-purple-600 hover:text-white dark:bg-zinc-300  dark:hover:bg-zinc-500 dark:hover:text-white     "
      }`}   >
                <Home className="inline mr-2" /> Home
              </NavLink></li>


              <li className=" mx-3"> <NavLink to="/dashboard/surveyor" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-purple-600 text-white dark:bg-zinc-500 scale-105 dark:text-slate-100" : "bg-purple-200 hover:bg-purple-600 hover:text-white dark:bg-zinc-300  dark:hover:bg-zinc-500 dark:hover:text-white     "
      }`} >
                <FileText className="inline mr-2" /> Create Survey
              </NavLink></li>


              <li className=" mx-3"> <NavLink to="/dashboard/list" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-purple-600 text-white dark:bg-zinc-500 scale-105 dark:text-slate-100" : "bg-purple-200 hover:bg-purple-600 hover:text-white dark:bg-zinc-300  dark:hover:bg-zinc-500 dark:hover:text-white     "
      }`} >
                <FileText className="inline mr-2" /> Survey List
              </NavLink></li>



              <li className=" mx-3"> <NavLink to="/dashboard/feedback" onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-purple-600 text-white dark:bg-zinc-500 scale-105 dark:text-slate-100" : "bg-purple-200 hover:bg-purple-600 hover:text-white dark:bg-zinc-300  dark:hover:bg-zinc-500 dark:hover:text-white     "
      }`}   >
                <FileText className="inline mr-2" /> Admin Feedback
              </NavLink></li>




              <li className=" mx-3">  <NavLink to="/dashboard/userFeedback"  onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-purple-600 text-white dark:bg-zinc-500 scale-105 dark:text-slate-100" : "bg-purple-200 hover:bg-purple-600 hover:text-white dark:bg-zinc-300  dark:hover:bg-zinc-500 dark:hover:text-white     "
      }`}   >
                <FileText className="inline mr-2" /> User Feedback
              </NavLink></li>



              <li className=" mx-2">  <NavLink to="/dashboard/surveyResponse"  onClick={() => setIsOpen(false)} className={({ isActive }) =>
      `p-3 rounded-lg flex items-center gap-3 transition cursor-pointer hover:scale-105 ${
        isActive ? "bg-purple-600 text-white dark:bg-zinc-500 scale-105 dark:text-slate-100" : "bg-purple-200 hover:bg-purple-600 hover:text-white dark:bg-zinc-300  dark:hover:bg-zinc-500 dark:hover:text-white     "
      }`}  >
                <FileText className="inline mr-2" /> Survey Responses
              </NavLink></li>


            </>
          )}
        </nav>
        
        
      </ul>
      <ul className="pt-4 mb-9 mt-9 space-y-2 font-medium border-t-2 border-gray-300 dark:border-gray-400">
        <li className="py-3 px-10">
                  <NavLink to="/">    <button onClick={handleSignOut} className="rounded-lg text-white bg-green-600 dark:bg-green-500 hover:scale-110   w-32 h-10 "  >
                                        <BiLogOut className="  inline-flex text-xl   "></BiLogOut>
                                        
                                        <span className="ml-2 text-base">Logout</span></button></NavLink>
                                        </li>
        
         
      
          
      </ul>
   </div>
</aside>


<div>
             {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>
      ) : (<div className={`p-4 lg:ml-64 min-h-screen  ${
        isAdmin ? " bg-blue-100 dark:bg-slate-800"  : isSurveyor? " bg-purple-100 dark:bg-zinc-800" :"" 
      } `}>
    <div className=" border-2 border-gray-300 border-dashed  rounded-lg dark:border-gray-400 min-h-screen">
    <div className={
        isAdmin ? "lg:flex-1 p-5 bg-blue-50 dark:bg-slate-600 min-h-screen"  : isSurveyor? "lg:flex-1 p-5  bg-purple-50 dark:bg-zinc-500 min-h-screen" :"" 
      } 
     >
                 <Outlet></Outlet>
             </div>
       
    </div>
 </div>
 )}
           
        </div>









        </div>
    );
};

export default Dashboard;