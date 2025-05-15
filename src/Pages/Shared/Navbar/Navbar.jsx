import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import useAdmin from "../../../hooks/useAdmin";
import useSurveyor from "../../../hooks/useSurveyor";
import { LuMenu, LuX } from "react-icons/lu";
import { IoLogInOutline } from "react-icons/io5";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
   
    const handleSignOut = () => {
      logOut()
        .then()
        .catch()
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
      () => localStorage.getItem("theme") === "dark"
    );
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

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    // const [isMenuOpen, setMenuOpen] = useState(false);
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#dropdownMenu")) {
        setDropdownOpen(false); // Close dropdown when clicking outside
      }
    };
  
    // Add event listener for outside clicks
    useEffect(() => {
      if (isDropdownOpen) {
        document.addEventListener("click", handleOutsideClick);
      } else {
        document.removeEventListener("click", handleOutsideClick);
      }
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [isDropdownOpen]);
      
    const navOptions=<>
  <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/"
              onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#bd1ddd] font-bold text-lg font-serif dark:text-[#e3a1f0] " : "font-medium text-slate-800 text-lg font-serif dark:text-white"
                }>Home</NavLink></li>
               
                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/allSurvey" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#bd1ddd] font-bold text-lg font-serif dark:text-[#e3a1f0] " : "font-medium text-slate-800 text-lg font-serif dark:text-white "
                }>Surveys</NavLink></li>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/pro"  onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#bd1ddd] font-bold text-lg font-serif dark:text-[#e3a1f0]" : "font-medium text-slate-800 text-lg font-serif dark:text-white"
                }>Pro-User</NavLink></li>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/about" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#bd1ddd] font-bold text-lg font-serif dark:text-[#e3a1f0] " : "font-medium text-slate-800 text-lg font-serif dark:text-white"
                }>About Us</NavLink></li>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/contact" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#bd1ddd] font-bold text-lg font-serif dark:text-[#e3a1f0] " : "font-medium text-slate-800 text-lg font-serif dark:text-white"
                }>Contact Us</NavLink></li>
                    
                    
                    
                
  
                 </>
    return (
        <div>
          



     <div className="relative ">

      <nav className="bg-white dark:bg-slate-800 shadow-md fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className=" flex  items-center justify-between mx-auto p-3 lg:px-8 ">
          {/* Logo Section */}
          <Link to="/">
              <img className=" w-[85px] h-[65px] ml-4 md:w-[85px] lg:w-[85px] lg:h-[65px] lg:ml-5  " src="https://i.ibb.co/qMNMJSM/survey-swift-high-resolution-logo-transparent.png" alt="" />
            </Link>


             {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-50 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      )}



      {/* Mobile Menu Panel */}
      
      <div
        className={`fixed top-0 left-0 bottom-0 w-2/3 sm:w-1/2 bg-white dark:bg-gray-800 lg:h-full
         min-[350px]:h-screen overflow-y-auto z-50 p-6  transition-transform duration-300  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:items-center lg:w-auto lg:p-0 lg:translate-x-0`}
      >
        <div className="h-full overflow-y-auto ">
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-full   dark:bg-white text-gray-800 dark:text-gray-800 z-[100]"
          >
            <LuX size={25} />
          </button>

          <div className="p-6 pt-16 lg:hidden">
            {/* Dark mode toggle for mobile */}
            <div className="mb-6  ">
              <li className="flex items-center">
            <span className="mr-2 text-gray-600 dark:text-gray-300">Dark Mode</span>
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
          <div className={`block w-14 h-8 rounded-full transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-blue-500 shadow-inner' : 'bg-gray-300 shadow-md'}`}></div>
          <div className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : ''}`}></div>
        </div>
      </label>
</li>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="space-y-4 lg:hidden">
             {navOptions}
            </ul>
          </div>
        </div>
      </div>
 

 {/* Desktop Navigation */}
 <div className="hidden lg:flex navbar-center  ">
            <ul className=" flex ml- items-center  space-x-5 xl:space-x-9 ">
             {navOptions}
            </ul>
          </div>


            

          {/* Profile and Dark Mode Toggle Section */}
          <div className=" flex   ml-auto lg:ml-0 gap-3 xl:gap-5 relative ">
            {/* Dark Mode Toggle */}
            <div className="hidden lg:flex items-center   ">
  
  <span className="mr-2 text-gray-600 dark:text-gray-300">Dark Mode</span>
<label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
<div className="relative">
<input
  type="checkbox"
  id="darkModeToggle"
  className="sr-only"
  checked={isDarkMode}
  onChange={() => setIsDarkMode(!isDarkMode)}
/>
<div className={`block w-14 h-8 rounded-full transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-blue-500 shadow-inner' : 'bg-gray-300 shadow-md'}`}></div>
<div className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : ''}`}></div>
</div>
</label>

</div>

            {/* User Profile Section */}
            {user ? (
              <>
                <button
                  type="button"
                  className=" flex text-sm bg-gray-800 rounded-full focus:ring-4 transition-transform duration-300 hover:scale-110 focus:ring-gray-300   dark:focus:ring-gray-600"
                  onClick={(e) => {e.stopPropagation();
                     setDropdownOpen((prev) => !prev);}}
                >
                  <span className="sr-only">Open user menu</span>
                  <img 
                    className="btn-circle w-12 h-12 lg:w-12 lg:h-12 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </button>

                {/* User Dropdown Menu */}
                {isDropdownOpen && (
                  <div id="dropdownMenu" className="z-50 absolute -right-4 top-16   bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-slate-600 drop-shadow-lg dark:bg-gray-700 dark:divide-gray-200">
                      <div className="px-4 py-3 ">
                <span className="block text-base xl:text-lg font-bold text-gray-900 dark:text-white">
                {user.displayName}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400 ">
                {user.email}
                </span>
              </div>

             
              <ul className="py-2  ">
              {
                        isAdmin?<><li className="group border-b py-3 px-3 text-center hover:bg-[#d5edfa] dark:hover:bg-slate-600 relative"><NavLink to="/dashboard/user"
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ?  "text-[#f090e1] font-bold text-base font-serif " : "font-semibold text-slate-800 text-base font-serif dark:text-white  "
                        }>Admin Dashboard</NavLink></li> </>:''
                     }

                   {
                    isSurveyor?<> <li className="group border-b py-3 px-3 text-center 
                    hover:bg-[#f0d9f5] dark:hover:bg-slate-600  relative "><NavLink to="/dashboard/surveyor"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ?  "text-[#bd1ddd] font-bold text-base font-serif dark:text-white" : "font-semibold text-slate-800 text-base font-serif dark:text-white"
                    }>Surveyor  Dashboard</NavLink></li> </> :''}

<li className="py-3 px-16">
              <button onClick={handleSignOut} className="rounded-lg text-white bg-green-500    lg:w-28 lg:h-10 w-24 h-10 "  >
                                <BiLogOut className="  inline-flex text-xl   "></BiLogOut>
                                
                                <span className="ml-2 text-base">Logout</span></button>
                                </li>

              
              </ul>
            </div>
          )} </>)
          
          :
         ( <div className="  ">
              <NavLink to='/login'>

                  <button className="btn  text-white bg-violet-400 w-24  xl:w-28">
                      <IoLogInOutline className="  text-2xl -mx-2 lg:text-2xl lg:flex"></IoLogInOutline>
                      <span className="text-md lg:ml-2 ">Login</span></button>
              </NavLink>


          </div>)}
          </div>

         {/* Mobile Menu Button */}
 <div className="flex items-center gap-x-3 btn max-[639px]:mx-2 sm:mx-6 md:mx-6    lg:hidden">
            <button onClick={() => setIsOpen(true)} className="lg:hidden ">
              <LuMenu size={25} />
            </button>
          </div>

         
        </div>
      </nav>

     
    </div>


        </div>
    );
};

export default Navbar;