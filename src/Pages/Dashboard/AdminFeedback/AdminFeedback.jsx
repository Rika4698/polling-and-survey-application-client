/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurveyList from "../../../hooks/useSurveyList";

import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const AdminFeedback = () => {
    const{user}=useAuth();
    const userEmail = user?.email;
   
    // const axiosSecure = useAxiosSecure();
   const [survey,isLoading,refetch,isFetching] = useSurveyList();
   const[surveys,setSurveys] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
  //  const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
     
      if (survey.length > 0 ) { 
        const findSurvey = survey.filter(
          (item) => item.loggedUser === userEmail && item.status=='unpublished'
        );
        setSurveys(findSurvey);
        refetch();
        
        // setisLoading(false);
      }
        
   },[userEmail,survey]);
  
   if (isFetching) {
    return (
        <div className="flex justify-center items-center h-screen ">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>
    );
  }
    return (
        <div>
             <h2 className="text-center text-lime-600 dark:text-lime-300 font-serif text-4xl font-bold underline mt-5 "> Surveys Admin Feedback</h2>
            {/* <div className="mt-4">
                {
                     surveys.map((item, index) => <div key={item._id}>
                        <div>
                        <div className="mt-6">
                        <h3 className="font-semibold text-lg">{item.timestamp}</h3>
                        </div>
                    <div>
                    <td className="font-bold text-lg text-green-700">
                         {index + 1}
                     </td>
                     <td>

                     <div className="card w-[300px] md:w-[400px] lg:w-[600px] bg-orange-100 text-black font-serif mt-6 ml-2">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-green-700">{item.title}</h2>
    <h3>{item.description}</h3>
    <h3 className="text-base text-pink-600 font-semibold mt-2">Questions:</h3>
    <div className="gap-2">
    <h3 className="mt-2 font-medium text-base">1.  {item.question1}</h3>
    <h3 className="mt-2 font-medium text-base">2. {item.question2}</h3>
    <h3 className="mt-2 font-medium text-base">3. {item.question3}</h3>
    </div>
    <div className="card-actions justify-between gap-12 pt-4">
      <button className='btn  capitalize text-white bg-red-600' >{item.status}</button>
     
<button className="btn bg-violet-600 text-white text-base" onClick={()=>document.getElementById('my_modal_5').showModal()}>Admin Feedback</button>
<dialog id="my_modal_5" className="modal min-h-[400px]">
  <div className="modal-box">
    <h3 className="font-bold text-lg ">Feedback Message</h3>
    <p className="py-4 text-base text-rose-600 font-semibold">{item.adminFeedback}</p>
    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn bg-green-400">Close</button>
      </form>
    </div>
  </div>
</dialog> */}
     
      {/* <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost"><FaTrashAlt className="text-red-600 text-lg"></FaTrashAlt></button> */}
    {/* </div>
  </div>
</div>
                     </td>

                    </div>
                    </div>
                     </div>)
                }
            </div> */}



<div className="min-h-screen pb-5">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-8 text-left mt-6">
        Total Survey Admin Feedback: {surveys.length}
      </h1>
{/* {surveys.length==0?  <h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">The admin not yet provided feedback on any survey. </h3>:""} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {isLoading?(<div className="flex justify-center items-center h-screen ">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>): surveys.length > 0?(surveys.map((card) => (

          <div
            key={card.id}
            className="bg-purple-200 dark:bg-gray-800 p-5 rounded-xl shadow-lg transition transform hover:scale-105 hover:border hover:border-violet-700 dark:hover:border-white flex flex-col justify-between h-full"
          >
            {/* Timestamp */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{card.timestamp}</p>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 dark:text-white ">{card.title}</h2>

            {/* Category */}
            <span className="mt-1 px-3 py-1 inline-block rounded-full w-32 bg-blue-500 text-white text-sm font-medium text-center mb-4">
              {card.category}
            </span>

            {/* Description (Fixed Height) */}
            <p className="text-gray-700 dark:text-gray-400 mt-3 h-24 overflow-hidden font-medium">
              {card.description}
            </p>

            {/* Questions (Fixed Height) */}
            <div className="mt-3 space-y-2 flex-grow">
            {card.question1?(<button className="w-full text-left font-medium bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-600">
                🔹 {card.question1}
              </button>):""}
              {card.question2?(<button className="w-full text-left font-medium bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-600">
                🔹 {card.question2}
              </button>):""}
              {card.question3?(<button className="w-full text-left font-medium bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-600">
                🔹 {card.question3}
              </button>):""}
            </div>

            {/* Status & Actions */}
            <div className="flex justify-between items-center  mt-6">
              {/* Status Button */}
              <button
                className={`px-4 py-2 rounded-full text-white text-base  ${
                  card.status === "published" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {card.status==="published"? "Published":"Unpublished"}
              </button>

              {/* Edit & Delete Buttons */}
              <div className="flex space-x-2">
              
              <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity  hover:via-sky-800"
      >
       Admin Feedback
      </button>
      
              </div>
            </div>
          </div>
        ))):""}
      </div>
   {isLoading?(<div className="flex justify-center items-center h-screen ">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>):surveys.length == 0?(<h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">The admin not yet provided feedback on any survey. </h3>):""}

    </div>

    {surveys.map((card) => ( 
    <SpringModal key={card.id} isOpen={isOpen} setIsOpen={setIsOpen} surveys={card} />  ))}

        </div>
    );
};



const SpringModal = ({ isOpen, setIsOpen,surveys }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer "
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 
           dark:from-slate-700 dark:to-gray-800   text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden  "
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-7 font-serif ">
              Admin Feedback Message
              </h3>
               
              {/* <p className="text-center mb-6 text-xl border rounded-box py-4 bg-violet-300 text-violet-800 font-semibold dark:bg-slate-300 dark:text-black">
                {surveys.adminFeedback}
         
              </p> */}
              <div className="flex flex-col space-y-4 ">
        <div className=" p-4 rounded-lg shadow-md ring-1 ring-violet-700 dark:ring-slate-600">
            <h3 className="text-xl font-bold">{surveys.adminName}</h3>
            <h3 className="text-slate-200 text-sm mb-2">{surveys.adminEmail}</h3>
            <h3 className="text-slate-200  text-xs mb-2">{surveys.updatedAt}</h3>
            <p className="text-center mb-6 text-xl border rounded-box py-4 bg-violet-300 text-violet-800 font-semibold dark:bg-slate-300 dark:text-black h-auto w-auto">
                {surveys.adminFeedback}
         
              </p>
        </div>
        </div>

              <div className="flex  justify-end gap-2 mt-5">
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button> */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-40 py-2 rounded dark:text-black "
                >
                 close!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default AdminFeedback;