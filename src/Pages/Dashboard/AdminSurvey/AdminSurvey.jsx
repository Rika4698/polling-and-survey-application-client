import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurveyList from "../../../hooks/useSurveyList";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle,  Clock, UserCircle, Calendar, EyeOff } from "lucide-react";
import { parseISO, isBefore, isToday} from "date-fns";
import useAuth from "../../../hooks/useAuth";

const AdminSurvey = () => {
  const {user} = useAuth();
  
    const [survey, isLoading,refetch, isFetching]=useSurveyList();
    const [surveys, setSurveys] = useState([]);
    // const [isLoading, setisLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const [selectedItem, setSelectedItem] = useState(null);
    const [unpublishedMessage, setUnpublishedMessage] = useState('');
    const [isUnpublishModalOpen, setIsUnpublishModalOpen] = useState(false);
   
    useEffect(() => {
      if (survey ) {  
        setSurveys(survey); 
        
      } 
  }, [survey]);

 

const deadline = surveys.map((item) => item.deadline);


// const dateObjects = deadline.map((date) => parseISO(date));
const dateObjects = deadline
.filter(date => date) // Remove empty values
.map(date => {
  try {
      return parseISO(date); // Parse ISO date string to Date object
  } catch (error) {
      console.error("Invalid date:", date, error);
      return null;
  }
}).filter(Boolean); // Remove any invalid dates

const today = new Date();
const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Remove time for today comparison
const todayTimestamp = todayDateOnly.getTime(); // Get today's timestamp

// Check which deadlines are expired (using getTime for comparison)
const expiredDeadlines = dateObjects.filter((date) => {
  const deadlineTimestamp = date.getTime();
  return deadlineTimestamp < todayTimestamp && !isToday(date);
});
// Debugging: Check expired deadlines
console.log("Expired Deadlines:", expiredDeadlines.map((d) => d.toISOString().split("T")[0]));
console.log(selectedItem);
    

const handlePublish = item =>{
     
      console.log(item);
    
        if(item.status==='unpublished')
        {
         
          const status ={ 
            status:'published',
            adminName: user?.displayName,  
            adminEmail: user?.email,  
          };
        axiosSecure.patch(`/survey/${item._id}`,status)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'survey is published now.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setSurveys(prevSurveys =>
                    prevSurveys.map(s =>
                        s._id === item._id ? { ...s, status: 'published' } : s
                    )
                );
              
                  refetch();
            }
         
            
        }).catch(error => {
          console.error("Error:", error);
      });
      }  else {
            Swal.fire({
                icon: 'error',
                title: 'Opps!',
                text: 'Already Exist.',
            })
        }
    };

   
    const handleUnpublished = (item) => {
      if (!item || !item._id) {
        console.error("Error: Undefined item in handleUnpublished");
        return;
    }
    if (!unpublishedMessage) {
      Swal.fire({
        icon: "warning",
        title: "Feedback Required",
        text: "Please enter a reason for unpublishing.",
      });
      return;
    }
     console.log(item);
      if (item.status === "published") {
        const adminDetails = {
          adminFeedback: unpublishedMessage, 
          adminName: user?.displayName,  
          adminEmail: user?.email, 
          status: "unpublished"
      };
          axiosSecure.patch(`/survey/${item._id}`, adminDetails)
              .then(res => {
                  console.log(res.data);
                  if (res.data.modifiedCount > 0) {
                   
                      Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: 'Survey is unpublished now.',
                          showConfirmButton: false,
                          timer: 1500
                      });
                      setSurveys(prevSurveys =>
                        prevSurveys.map(s =>
                            s._id === item._id ? { ...s, status: 'unpublished' } : s
                        )
                    );

                      setUnpublishedMessage(""); 
                      setSelectedItem(null); 
                  refetch(); // Refresh the survey list
                  }
              })
              .catch(error => {
                  console.error("Error:", error);
              });
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Oops!',
              text: 'Already Unpublished.',
          });
      }
  };

  if (isLoading || isFetching) {
    return (
        <div className="flex justify-center items-center h-screen ">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>
    );
  }

    return (
        <div>
            <h2 className="text-center text-blue-600 dark:text-white font-serif text-4xl font-semibold my-6">All Survey</h2>
            {/* <div className="mt-4">
                {
                    survey.map((item) => <div key={item._id}>
                   
                    <div className="mt-6">
                    <h3 className="font-semibold text-lg text-blue-600 mt-2">{item.timestamp}</h3>
                    </div>
                    <div className="card w-[340px] md:w-[400px] lg:w-[600px] bg-base-100 shadow-xl mt-6">
  <figure ><img className="w-[340px] h-[130px] md:w-[400px] md:h-[150px] lg:w-[600px] lg:h-[210px] " src={item.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">
      {item.title}
      <div className="badge badge-secondary text-xs w-[180px] lg:ml-4">{item.loggedUser}</div>
    </h2>
    <h3 className={`refetch() ${item.status =='published'?'text-green-600 font-semibold':'text-red-500 font-semibold'}`}>Survey {item.status}</h3>
    <h3 className="mt-4">{item.description}</h3>
    <h3 className="text-base text-pink-500 font-semibold mt-2">Questions:</h3>
    <div className="gap-2">
    <h3 className="mt-2 font-medium text-base">1.  {item.question1}</h3>
    <h3 className="mt-2 font-medium text-base">2. {item.question2}</h3>
    <h3 className="mt-2 font-medium text-base">3. {item.question3}</h3>
    </div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline mt-2">{item.deadline}</div> 
      <div className="flex gap-4">
      <button onClick={() => handlePublish(item)} className="btn bg-green-500 text-white">Published</button>
      
      <button className="btn bg-red-600 text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Unpublished</button>

<dialog id="my_modal_1" className="modal min-h-[500px]">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Unpublished Feedback message</h3>
    <textarea placeholder="Message" value={unpublishedMessage}
        onChange={(e) => setUnpublishedMessage(e.target.value)} className="textarea textarea-bordered textarea-lg w-full max-w-xs  mt-4 lg:ml-6" ></textarea>
    <div className="modal-action ">
    <form method="dialog" >
        <button className="btn mr-4">Close</button>
        <button  onClick={() => handleUnpublished(item)} type="submit" className="btn bg-green-500 text-white ">Submit Feedback</button>
        </form>
    </div>
  </div>
</dialog>
      

      </div>
    </div>
  </div>
</div>


                    </div>)
                }
           
</div> */}



<div className="min-h-screen   py-5">
<h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-8 text-left ">
        Total Survey: {surveys.length}
      </h1>
     
      {/* Grid Layout */}
      <div className="grid gap-9 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        { isFetching?( <div className="flex justify-center items-center h-screen ">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>):surveys.length > 0 ?  (surveys.map((item) => {

const deadlineDate = item?.deadline ? parseISO(item.deadline) : null;
const isExpired = isBefore(deadlineDate, today) && !isToday(deadlineDate);

    return (
          <div key={item.id} >
           <div
      
      className="bg-gradient-to-b from-blue-300 to-white dark:from-gray-900 dark:to-slate-700 shadow-lg rounded-xl overflow-hidden flex flex-col  hover:ring-2 ring-blue-700 dark:ring-white transform duration-500 hover:scale-105"
    >
      {/* Header Image */}
      <div className="relative h-48">
        <img src={item.image} alt="Survey Banner" className="w-full h-full object-cover" />
        <div className={`absolute top-2 right-2 px-3 py-2 text-xs font-semibold rounded-full  text-white  ${item.status==='published'?"bg-green-600 ":"bg-red-600"}`}>
          {item.status==='published'?"Published":"Unpublished"}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow h-[650px]">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 h-14">{item.title}</h3>

        {/* User & Timestamp */}
        <div className="flex items-center gap-2 text-sm   mt-2  ">
          <UserCircle className="w-5 h-5 text-gray-800 dark:text-gray-400" />
          <span className="badge py-3 bg-sky-600 text-white dark:bg-white dark:text-black">{item.loggedUser}</span> 
        </div>


        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 ">
         
          <Clock className="w-4 h-4" />
          <span>{item.timestamp}</span>
        </div>
        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mt-4 font-medium h-20">{item.description}</p>

        {/* Questions */}
        <div className="mt-2 space-y-2 flex-grow  ">
            {item.question1?(<p className="text-gray-800 dark:text-gray-300  bg-sky-200 dark:bg-gray-700 px-4 py-2 rounded-lg "><strong>Q1:</strong> {item.question1}</p>):""}
          
            {item.question2?(<p className="text-gray-800 dark:text-gray-300 bg-sky-200 dark:bg-gray-700 px-4 py-2 rounded-lg "><strong>Q2:</strong> {item.question2}</p>):""}
            
            {item.question3?(<p className="text-gray-800 dark:text-gray-300 bg-sky-200 dark:bg-gray-700 px-4 py-2 rounded-lg "><strong>Q3:</strong> {item.question3}</p>):""}
            
            
          
        </div>

        {/* Deadline */}
        <div className={`mt-6 flex items-center gap-2  dark:text-gray-400 font-medium text-sm ${isExpired ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
          <Calendar className="w-5 h-5" />
          <span>Deadline: {item.deadline}</span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex  gap-3">
          <button onClick={() => handlePublish(item)} className={`flex items-center justify-center gap-2 w-full py-2  text-white font-semibold rounded-lg transition-all ${item.status==="unpublished"?"bg-green-500 hover:bg-green-600 ":"bg-gray-500 btn-disabled cursor-not-allowed"}`}>
            <CheckCircle className="w-5 h-5" /> Published
          </button>
          <button
            className={`flex items-center justify-center gap-2 w-full py-2 px-2  text-white font-semibold rounded-lg transition-all ${item.status==="published"?"bg-red-500 hover:bg-red-600 ":"bg-gray-500 btn-disabled cursor-not-allowed"}`}
            onClick={() => {
              setIsUnpublishModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <EyeOff className="w-5 h-5" /> Unpublished
          </button>
        </div>
      </div>
    </div>
          


    {isUnpublishModalOpen && selectedItem && ( 
  <div  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 min-h-screen z-50">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm w-full mx-5 md:mx-auto "
    >
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Confirm Unpublish</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Are you sure you want to unpublish <span className="font-bold text-gray-800 dark:text-gray-100">{selectedItem.title}</span>? This action cannot be undone.
      </p>
      <textarea
        className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        placeholder="Enter feedback (required)"
        rows = "4"
        value={unpublishedMessage}
        onChange={(e) => setUnpublishedMessage(e.target.value)}
      ></textarea>
      <div className="mt-4 flex justify-end gap-3">
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-800 rounded-lg transition-all text-black dark:text-white"
          onClick={() =>{ 
            setIsUnpublishModalOpen(false);
            setUnpublishedMessage('');
            setSelectedItem(null);
          }
          }
          
        >
          Cancel!
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
          onClick={() => {
            handleUnpublished(selectedItem);
            setIsUnpublishModalOpen(false);
            
            
          
            
          }}
        >
          Unpublish
        </button>
      </div>
    </motion.div>
  </div>
 ) }
          </div>



          )}
          
     )) :""}
      </div>

      {survey.length == 0?((<div className=" mx-auto "> <h3 className="  text-center text-lg font-medium text-slate-700 dark:text-slate-300 ">No survey has been created yet. </h3></div>)):""}
      
    </div>
   


        </div>
    );
};

export default AdminSurvey;