/* eslint-disable react/prop-types */


import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const UserFeedback = () => {
    const axiosSecure = useAxiosSecure();
    const{user} = useAuth();
    
    const userEmail = user.email;
    // console.log(user);
    const [surveys, setSurveys] = useState([]);
    const [survey, setSurvey] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
      
          const fetchSurveys = async () => {
            setisLoading(true); 
            try {
              const response = await axiosSecure.get("/survey"); // Adjust this endpoint if needed
              setSurvey(response.data); 
            } catch (error) {
              console.error("Error fetching surveys:", error);
            } finally {
              setisLoading(false);
            }
          };
      
          fetchSurveys(); 
        }, []); // 
     
      useEffect(() => {
            
        if (survey.length > 0) {  // Ensure survey data is available before filtering
          const findSurvey = survey.filter(
            (item) => item.loggedUser === userEmail && item.status === "published"
          );
          setSurveys(findSurvey);
          setisLoading(false);
        }
       
    },[userEmail,survey]);
    // console.log(surveys[1].reports[0].userEmail);
    if (isLoading) {
      return (
          <div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>
      );
    }
    return (
      <div>
        <h2 className="text-4xl font-bold text-center my-10 font-serif text-orange-700 dark:text-orange-400">
         User FeedBack
        </h2>
        {/* <div className="overflow-x-auto mt-10 max-w-7xl mx-auto">
          <table className="table"> */}
            {/* head */}
            {/* <thead>
              <tr className="bg-project-400">
                <th>#</th>
                <th>Title</th>
                <th>Email</th>
                <th>status</th>
                <th>Like/Dislike</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody> */}
              {/* row 1 */}
              {/* {surveys.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                  <p>{item.voted?item.voted.map((items, index) =>
                  
                   <p  key={items._id}  >{index + 1}.{"  "}{items.email}</p>):"No Voted"}</p>
                </td>
                  <td className={`${item.status=='published'? 'text-green-600':"text-red-600"} font-bold`}>{item.status}</td>
                  <td>
                 Like: {item.liked}  Dislike:{item.disliked}
                  </td>
                  <th className="space-x-1">
                    {item.reports ? (
                      <>
                        <button
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${index + 1}`)
                              .showModal()
                          }
                          className="btn bg-project-400 btn-xs"
                        >
                          User Feedbacks
                        </button>
                        <dialog id={`my_modal_${index + 1}`} className="modal">
                          <div className="modal-box bg-project-400">
                            <div>
                              <h2 className="text-lg text-orange-900">FeedBacks</h2>
                              <div className="w-full bg-project-300 mt-6 rounded-lg h-52">
                                {item?.reports?.map((bubble, index) => (
                                  <div className="p-4 flex gap-4" key={index + 1}>
                                    <h3 className="mt-1 text-base">{index + 1}</h3>
                                    <h3 className="text-sm py-2 px-3 rounded-full mb-4 bg-orange-600 inline-block text-white font-medium ">
                                      {bubble.text}
                                    </h3>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="modal-action">
                              <form method="dialog"> */}
                                {/* if there is a button in form, it will close the modal */}
                                {/* <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </>
                    ) :  " No Feedback" }
                   
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
{isLoading?(<div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>):surveys.length==0? <h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">No survey has been created yet. </h3>:""}




<div className="overflow-x-auto  my-8 border ">
   
        <table className="min-w-full divide-y  bg-orange-200 dark:bg-white divide-gray-200">
    <thead>
        <tr className="">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Like</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Dislike</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Feedback</th>
        </tr>
    </thead>
    <tbody className="bg-purple-50 dark:bg-zinc-500 divide-y divide-gray-200 font-semibold ">
    {isLoading? (<tr>
      <td colSpan="9" className="text-center py-10">
        <div className="flex justify-center items-center ">
          <span className="loading loading-spinner loading-lg text-gray-800 "></span>
        </div>
      </td>
    </tr>): surveys.map((item, index) => (
        <tr key={item._id}>
       
        <td  className="px-6 py-4 whitespace-nowrap text-black dark:text-white">{index+1}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white">{item.title}</td>
       
            <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white"> {item.reports?item.reports.map((items, index) =>
                  
                  <p  key={items._id} className="" >{index + 1}.{"  "}{items.userEmail}</p>):"No user report"}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold  rounded-full bg-green-100 text-green-800">{item.status==='published'?"Published":""}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white">Like: {item.liked}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white">Dislike: {item.disliked}</td>
            {item.reports ?  (  
              // item?.reports?.map((bubble, index) => (key={index + 1}
            <td className="px-6 py-4 whitespace-nowrap">
            
                <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-orange-600 dark:from-orange-600 dark:to-yellow-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Feedback
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} reports={item.reports}/>
            </td>):(<td className="px-6 py-4 whitespace-nowrap text-black dark:text-white" > No Feedback </td>)}
        </tr>
        ))}
        
    </tbody>
</table>
</div>



      </div>
    );
  };
  
  const SpringModal = ({ isOpen, setIsOpen, reports }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-gray-400 dark:to-zinc-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10 ">
               
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
                  Feedback Messages
                </h3>
                <div className="overflow-y-auto h-64 lg:h-80 overflow-x-hidden space-y-5 p-5 ">
                {reports?.map((bubble, index) => (
                <div key={index + 1} className="  ">
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-zinc-800 ">{bubble.userName}</h3>
            <h3 className="text-xs font-bold text-gray-700  ">{bubble.userEmail}</h3>
            <h3 className="text-gray-700 text-xs mb-2">{new Date(bubble.timestamp).toLocaleString('en-GB', 
       {
        //    weekday: 'short',
            year: 'numeric',
            month: 'short',
             day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit',
           second: '2-digit',
           hour12: true
                         }) 
                        }</h3>
            <p className="text-xl text-black font-semibold">{bubble.text}
            </p>
        </div>
       
        
        
    </div>))} 
    </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded invisible"
                  >
                    Nah, go back
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-orange-600 dark:text-black font-semibold w-56 py-2 rounded mt-3"
                  >
                  Close!
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
export default UserFeedback;