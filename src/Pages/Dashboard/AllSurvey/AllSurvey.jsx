import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurveyList from "../../../hooks/useSurveyList";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const AllSurvey = () => {
     const{user}=useAuth();
     const userEmail = user?.email;
     const axiosSecure = useAxiosSecure();
    const [survey, , refetch] = useSurveyList();
    const[surveys,setSurveys] = useState([]);
    
    useEffect(() => {
        
        const findSurvey = survey.filter((item) => item.loggedUser == userEmail);
      console.log(findSurvey);
      
      setSurveys(findSurvey);
        
   },[userEmail,survey]);

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



    return (
        <div>
            <h2 className="text-center text-violet-600 font-serif text-4xl font-semibold">All Survey</h2>
            <div className="mt-4">
                {
                     surveys.map((item, index) => <tr key={item._id}>
                        <div>
                        <div className="mt-6">
                        <h3 className="font-semibold text-lg">{item.timestamp}</h3>
                        </div>
                    <div>
                    <td className="font-bold text-lg text-purple-700">
                         {index + 1}
                     </td>
                     <td>

                     <div className="card w-[200px] md:w-[400px] lg:w-[600px] bg-orange-200 text-black font-serif mt-6 mx-8">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-green-700">{item.title}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end pt-4">
      <button className="btn bg-emerald-400 capitalize ">{item.status}</button>
      <button className="btn btn-ghost"><FaEdit className=""></FaEdit></button>
      <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
    </div>
  </div>
</div>
                     </td>

                    </div>
                    </div>
                     </tr>)
                }
            </div>
        </div>
    );
};

export default AllSurvey;