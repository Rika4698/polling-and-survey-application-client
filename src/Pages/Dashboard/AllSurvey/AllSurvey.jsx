import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurveyList from "../../../hooks/useSurveyList";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link} from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";

const AllSurvey = () => {
     const{user}=useAuth();
     const userEmail = user?.email;
    
     const axiosSecure = useAxiosSecure();
    const [survey, isLoading, refetch,isFetching] = useSurveyList();
    const[surveys,setSurveys] = useState([]);
    // const [isLoading, setisLoading] = useState(true);
//     console.log("Refetch function:", refetch);
// console.log("Type of refetch:", typeof refetch);
    useEffect(() => {
        
        const findSurvey = survey.filter((item) => item.loggedUser == userEmail);
      console.log(findSurvey);
      
      
      if (findSurvey  && !isLoading) {  
        setSurveys(findSurvey); 
        // setisLoading(false);
      } 
        
   },[userEmail,survey,isLoading]);

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async(result)=>{
            if(result.isConfirmed){
                const res = await axiosSecure.delete(`/survey/${item._id}`);
                console.log(res.data);
                if ((res.data.deletedCount > 0)) {
                    
                    Swal.fire({
                      
                        title: "Deleted!",
                        text: `${item.title} has been deleted.`,
                        icon: "success"
                      
                    })
                    refetch();
                    
                   
                }

            }
        })
    }

    if (isFetching) {
      return (
          <div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>
      );
    }

    return (
        <div>
          <h2 className="text-center text-violet-600 dark:text-violet-300 font-serif text-4xl font-bold mt-4">All Survey</h2>
            {/* <div className="mt-4">
                {
                   surveys.map((item, index) => <div key={item._id}>
                        <div>
                        <div className="mt-6">
                        <h3 className="font-semibold text-lg">{item.timestamp}</h3>
                        </div>
                    <div>
                    <td className="font-bold text-lg text-purple-700">
                         {index + 1}
                     </td>
                     <td>

                     <div className="card w-[200px] md:w-[400px] lg:w-[600px] bg-orange-100 text-black font-serif mt-6 mx-8">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-green-700">{item.title}</h2>
    <h3>{item.description}</h3>
    <h3 className="text-base text-pink-500 font-semibold mt-2">Questions:</h3>
    <div className="gap-2">
    <h3 className="mt-2 font-medium text-base">1.  {item.question1}</h3>
    <h3 className="mt-2 font-medium text-base">2. {item.question2}</h3>
    <h3 className="mt-2 font-medium text-base">3. {item.question3}</h3>
    </div>
    <div className="card-actions justify-end pt-4">
      <button className={`btn  capitalize text-white ${item.status=='published'?'bg-emerald-600':'bg-red-600'} `}>{item.status}</button>
      <Link to={`/dashboard/updateSurvey/${item._id}`}>
      <button className="btn btn-ghost"><FaEdit className="text-lg"></FaEdit></button></Link>
      <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost"><FaTrashAlt className="text-red-600 text-lg"></FaTrashAlt></button>
    </div>
  </div>
</div>
                     </td>

                    </div>
                    </div>
                     </div>)
                }
            </div> */}




         

            <div className="min-h-screen pb-5">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-8 text-left ">
        Total Survey: {surveys.length}
      </h1>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {surveys.length > 0 ?(surveys.map((card) => (
          <div
            key={card.id}
            className="bg-purple-200 dark:bg-gray-800 p-5 rounded-xl shadow-lg duration-500 transform hover:scale-105 hover:ring-1 hover:ring-violet-700 dark:hover:ring-white flex flex-col justify-between h-full"
          >
            {/* Timestamp */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{card.timestamp}</p>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 dark:text-white ">{card.title}</h2>

            {/* Category */}
            <span className="mt-2 px-3 py-1 inline-block rounded-full w-40 bg-blue-500 text-white text-sm font-medium text-center mb-4">
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
            <div className="flex justify-between items-center gap-5 mt-6">
              {/* Status Button */}
              <button
                className={`px-4 py-2 rounded-xl text-white text-base  ${
                  card.status === "published" ? "bg-green-600 font-medium" : "bg-red-600 font-medium"
                }`}
              >
                {card.status==="published"? "Published":"Unpublished"} 
                <h3 className="text-xs font-normal"> {card.status==="published"? card.publishedAt:""}</h3>
              </button>

              {/* Edit & Delete Buttons */}
              <div className="flex space-x-2">
              <Link to={`/dashboard/updateSurvey/${card._id}`}>
                <button
                 title="Update"
                  className="p-2 bg-purple-200 dark:bg-gray-800 text-blue-700 dark:text-blue-400 rounded-full hover:bg-blue-700 
                  dark:hover:bg-blue-500 hover:text-white dark:hover:text-white    transition-all duration-500  "
                >
                  <FiEdit className="text-lg "   />
                </button></Link>
                <button
                title="Delete"
                 onClick={()=>handleDeleteItem(card)}
                  className="p-2 bg-purple-200 dark:bg-gray-800 text-red-600
                  dark:text-red-500
                  hover:text-white
                  dark:hover:text-white rounded-full hover:bg-red-700 
                  dark:hover:bg-red-500 transition-all duration-500"
                >
                  <FiTrash className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))):""}
      </div>
{surveys.length == 0?(<h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">No survey has been created yet. </h3>):""}
    </div>

        </div>
    );
};

export default AllSurvey;