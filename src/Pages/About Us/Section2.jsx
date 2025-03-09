// import React from 'react';

// const Section2 = () => {
//     return (
//         <div>
//             <div className=" lg:flex ">
//             {/* dashboard side bar */}
//             <div className={
//       isAdmin ? "min-w-32 min-h-44 lg:w-48 lg:min-h-screen bg-purple-200" : isSurveyor ? "min-w-32 min-h-44 lg:w-48 lg:min-h-screen bg-blue-200":"" 
//      }>
//                 <div className=" ">
                {/* <ul className=
        "  menu-horizontal    lg:menu   text-xl text-fuchsia-600 font-semibold p-4" > */}
            //         {
            //             isAdmin? <>
                        
            //             <h2 className="pt-4 text-3xl text-center font-serif font-bold text-sky-600 mb-2">Admin</h2>
            //         <h3 className="text-xl text-center font-mono font-semibold text-lime-600 mb-2">Dashboard</h3>
            //         <ul className=" menu gap-2  lg:menu lg:gap-4  text-2xl lg:text-lg text-blue-600 font-semibold p-4" >
            //         <li>
            //             <NavLink to="/">
                           
            //                  Home</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/dashboard/user">
                            
            //             All Users</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/dashboard/survey">
                            
            //             All Survey</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/dashboard/allPayment">
                            
            //            All Payments</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/dashboard/allResponse">
                            
            //             All Survey Responses</NavLink>
            //         </li>
            //        </ul>

            //             </>
            //             : isSurveyor? 
            //             <>
            //              <h2 className=" pt-4 text-3xl text-center font-serif font-bold text-purple-600 mb-2">Surveyor</h2>
            //         <h3 className="text-xl text-center font-mono font-semibold text-lime-600 mb-2">Dashboard</h3>
            //         <ul className="menu gap-2  lg:menu lg:gap-4  text-2xl lg:text-base text-fuchsia-600 font-bold font-serif p-4" >
            //         <li>
            //             <NavLink to="/">
                           
            //                  Home</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/dashboard/surveyor">
                            
            //             Create Survey</NavLink>
            //         </li>
            //         <li >
            //             <NavLink to="/dashboard/list">
                            
            //              Survey List</NavLink>
            //         </li>
            //         <li >
            //             <NavLink to="/dashboard/feedback">
                            
            //              Admin Feedback</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/dashboard/userFeedback">
                            
            //              User Feedback</NavLink>
            //         </li>

            //         <li>
            //             <NavLink to="/dashboard/surveyResponse">
                            
            //              Survey responses</NavLink>
            //         </li>
                  
            //         </ul>
            //             </>
            //             : ''
                       
            //         }
                   
                    
                   
                    
                
            //     </div>
            // </div>
            {/* dashboard content */}
    //         <div className={
    //    isAdmin ? "lg:flex-1 p-8 bg-purple-50"  : isSurveyor? "lg:flex-1 p-8 bg-blue-50" :"" 
    //  } 
    // >
    //             <Outlet></Outlet>
    //         </div>
    //     </div>



















    //     <div className={`${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex`}>
    //   {/* Mobile Overlay */}
    //   {isOpen && (
    //     <div
    //       className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden"
    //       onClick={() => setIsOpen(false)}
    //     ></div>
    //   )}

    //   {/* Sidebar */}
    //   <div
    //     className={`fixed top-0 left-0 bottom-0 w-2/3 sm:w-1/2 bg-white dark:bg-gray-800 h-full  z-50 p-6 transition-transform duration-300 ${
    //       isOpen ? "translate-x-0" : "-translate-x-full"
    //     } lg:static lg:w-64 lg:p-4 lg:translate-x-0`}
    //   >
    //     <button
    //       onClick={() => setIsOpen(false)}
    //       className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700"
    //     >
    //       ✖
    //     </button>

    //     <div className="text-center mb-6">
    //       <motion.img
    //         src="https://via.placeholder.com/80"
    //         alt="Profile"
    //         className="w-20 h-20 rounded-full mx-auto border-4 border-white"
    //         initial={{ opacity: 0, x: -50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.5 }}
    //       />
    //       <h2 className="text-lg font-semibold mt-2">{isAdmin ? "Admin" : "Surveyor"}</h2>
    //     </div>

    //     {/* Navigation Links */}
    //     <nav className="space-y-4  ">
    //       {isAdmin && (
    //         <>
    //           <NavLink to="/" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <Home className="inline mr-2" /> Home
    //           </NavLink>
    //           <NavLink to="/dashboard/user" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <Users className="inline mr-2" /> All Users
    //           </NavLink>
    //           <NavLink to="/dashboard/survey" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> All Surveys
    //           </NavLink>
    //           <NavLink to="/dashboard/allPayment" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <DollarSign className="inline mr-2" /> All Payments
    //           </NavLink>
    //           <NavLink to="/dashboard/allResponse" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> Survey Responses
    //           </NavLink>
    //         </>
    //       )}

    //       {isSurveyor && (
    //         <>
    //           <NavLink to="/" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <Home className="inline mr-2" /> Home
    //           </NavLink>
    //           <NavLink to="/dashboard/surveyor" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> Create Survey
    //           </NavLink>
    //           <NavLink to="/dashboard/list" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> Survey List
    //           </NavLink>
    //           <NavLink to="/dashboard/feedback" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> Admin Feedback
    //           </NavLink>
    //           <NavLink to="/dashboard/userFeedback" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> User Feedback
    //           </NavLink>
    //           <NavLink to="/dashboard/surveyResponse" className="block p-3 rounded-lg hover:bg-gray-700">
    //             <FileText className="inline mr-2" /> Survey Responses
    //           </NavLink>
    //         </>
    //       )}
    //     </nav>

    //     {/* Logout Button */}
    //     <button className="w-full bg-red-600 hover:bg-red-500 py-2 rounded-lg flex items-center justify-center gap-2 mt-6">
    //       <LogOut /> Logout
    //     </button>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-1 p-6">
    //     <div className="flex justify-between items-center">
    //       {/* Menu Button */}
    //       <button
    //         onClick={() => setIsOpen(true)}
    //         className="lg:hidden p-2 bg-gray-300 dark:bg-gray-700 rounded-full"
    //       >
    //         <Menu />
    //       </button>

    //       <h1 className="text-2xl font-semibold">Dashboard</h1>
          
    //       {/* Dark Mode Toggle */}
    //       <label className="flex items-center cursor-pointer">
    //         <span className="mr-3 text-gray-600 dark:text-gray-300">Dark Mode</span>
    //         <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
    //         <div className={`block w-14 h-8 rounded-full transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
    //         <div className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : ''}`}></div>
    //       </label>
    //     </div>
    //     <Outlet />
    //   </div>
    // </div>




      {/* <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex`}>  */}
      {/* Sidebar / Mobile Menu */}
      {/* <div className="lg:hidden p-4">
        <button onClick={() => setIsOpen(true)} className="text-gray-800 dark:text-white">
          <Menu size={30} />
        </button>
      </div> */}

      {/* Overlay */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}

      {/* Sidebar */}
      {/* <aside className={`fixed lg:relative top-0 left-0 w-2/3 sm:w-1/2 lg:w-64 bg-gray-800 text-white p-6 z-50 h-full md:min-h-screen transition-transform duration-300 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="flex justify-between items-center   lg:hidden">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <LuX size={25} />
          </button>
        </div>
        
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-center mt-6">
          <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 rounded-full mx-auto border-4 border-white" />
          <h2 className="text-lg font-semibold mt-2">Admin Name</h2>
        </motion.div>

        <nav className="space-y-4 mt-8">
          {[
            { to: "/", icon: <Home />, label: "Home" },
            { to: "/users", icon: <Users />, label: "All Users" },
            { to: "/surveys", icon: <FileText />, label: "All Surveys" },
            { to: "/payments", icon: <DollarSign />, label: "All Payments" },
            { to: "/responses", icon: <FileText />, label: "Survey Responses" },
          ].map(({ to, icon, label }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition cursor-pointer"
            >
              {icon}
              <Link to={to} className="text-white">{label}</Link>
            </motion.div>
          ))}
        </nav> */}

        {/* Logout Button */}
        {/* <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-red-600 hover:bg-red-500 py-2 rounded-lg flex items-center justify-center gap-2 mt-6"
        >
          <LogOut /> Logout
        </motion.button>
      </aside> */}

      {/* Main Content */}
      {/* <main className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1> */}
          {/* Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:scale-110 transition"
          >
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
        </div>
        <p className="mt-4">Welcome to the admin dashboard. Choose an option from the sidebar.</p>
      </main>
    </div> */}
//         </div>
//     );
// };

// export default Section2;






 {/* <div>
            <h2 className="text-5xl font-extrabold text-center text-green-400 underline  mb-10">Create Survey</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex mb-8">


      <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Title:  <span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <input type="text" placeholder="Title" {...register("title",{ required: true })}
   className="input input-bordered w-full" />
   
   {errors.title&&(<h3 className="text-lg mt-3 text-red-600">Must provide a title</h3>)}
  
</div>


      <div className="form-control md:w-1/2 ml-4 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Description:<span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <input type="text" placeholder="Description" {...register("description",{ required: true })}
   className="input input-bordered w-full" />
   {errors.description&&(<h3 className="text-lg mt-3 text-red-600">Must provide a description</h3>)}
  
</div>


</div>


      <div className="md:flex mb-8">
      <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Category:<span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <select defaultValue='default' {...register("category",{ required: true })}
       className="select select-bordered w-full " >
  <option disabled value='default'>Select a category</option>
  <option>Education</option>
        <option >Technology</option>
        <option >Marketing</option>
        <option >Health Care</option>
        <option >Work and Career</option>
</select>
{errors.category&&(<h3 className="text-lg mt-3 text-red-600">Must provide a category</h3>)}
  
</div>



<div className="form-control md:w-1/2 ml-4 ">
<label className="label">
    <span className="label-text font-semibold text-base">Category Image:</span>
    
  </label>
     <input {...register("image")} type="file" className="file-input file-input-primary w-full max-w-xs" />
     
     </div>
</div>
<input
  type="file"
  className="file:bg-purple-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:cursor-pointer hover:file:bg-purple-700"
/>


<div className="md:flex mb-8">
      <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Question 1:</span>
    
  </label>
  <input type="text" placeholder="Question" {...register("question1")}
   className="input input-bordered w-full" />
  
</div>
      <div className="form-control md:w-1/2 ml-4 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Question 2:</span>
    
  </label>
  <input type="text" placeholder="Question" {...register("question2")}
   className="input input-bordered w-full" />
  
</div>
</div>
<div className="md:flex  mb-8">
<div className="form-control md:w-1/2  ">
  <label className="label">
    <span className="label-text font-semibold text-base">Question 3:</span>
    
  </label>
  <input type="text" placeholder="Question" {...register("question3")}
   className="input input-bordered w-full" />
  
</div>
<div className="form-control md:w-1/2 ml-6  ">
  <label className="label">
    <span className="label-text font-semibold text-base">Deadline:</span>
    
  </label>
  <input type="date"  {...register("deadline")}
   className="input input-bordered w-full" />
  
</div>
</div> */}

{/* <div className="md:flex  mb-8">
<div className="form-control md:w-1/2 ml-6 ">
  <label className="label">
    <span className="label-text font-semibold text-lg">Options:<span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <div className="flex items-center">
  <input type="checkbox" id='yes' value='yes' {...register("options",{ required: true })}
    />
    
    <label className="label" htmlFor="yes">
    <span className="label-text font-semibold text-lg ml-2 mr-4">Yes</span>
    
  </label>
  <input type="checkbox" id='no' value='no' {...register("options",{ required: true })}
    />
    <label className="label" htmlFor="no">
    <span className="label-text ml-2 font-semibold text-lg">No</span>
    
  </label>
  </div>
  
  

 <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Category:<span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <select defaultValue='default' {...register("category",{ required: true })}
       className="select select-bordered w-full " >
  <option disabled value='default'>Select a category</option>
  <option>Education</option>
        <option >Technology</option>
        <option >Marketing</option>
        <option >Health Care</option>
        <option >Work and Career</option>
</select>
{errors.category&&(<h3 className="text-lg mt-3 text-red-600">Must provide a category</h3>)}
  
</div>




  
</div>
</div> */}
     
      {/* <button type="submit" className="btn bg-purple-500
       text-white text-lg">Save</button>
    </form>
              
          </div> */}