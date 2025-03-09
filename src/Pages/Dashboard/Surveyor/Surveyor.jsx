import {  useState } from "react";
import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Surveyor = () => {
    const { register, handleSubmit,reset,formState:{errors},
    setValue } = useForm();
    const navigate = useNavigate();
    const [totalVote] = useState(0);
    const [liked] = useState(0);
    const [disliked] = useState(0);
    const [question1Yes] = useState(0);
    const [question1No] = useState(0);
    const [question2Yes] = useState(0);
    const [question2No] = useState(0);
    const [question3Yes] = useState(0);
    const [question3No] = useState(0);

    const {user} = useAuth();
    
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();


    const [selected, setSelected] = useState(""); // Track selected value

    const handleChange = (e) => {
        setSelected(e.target.value);
        setValue("category", e.target.value, { shouldValidate: true });
      };
      console.log();
  const onSubmit = async (data) =>{ 
    // const formData ={
    //     ...data, 
    //     options:['Yes','No'],
    //     yesVoted,
    //     noVoted,
    //     liked,
    //     disliked,
    //     status:'published',
    //     loggedUser:user.email,
    //     loggedUserName:user.displayName
    // };
    console.log(data)
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{
            'content-type' : 'multipart/form-data'
        }
    });
    if(res.data.success){
        const formData ={
            ...data,
            image: res.data.data.display_url, 
            option:['Yes','No'],
            question1_yes: question1Yes,
            question1_no: question1No,
            question2_yes: question2Yes,
            question2_no: question2No,
            question3_yes: question3Yes,
            question3_no: question3No,
            totalVote,
            liked,
            disliked,
            status:'published',
            loggedUser:user.email,
            loggedUserName:user.displayName
        };
        console.log(formData);
        const survey = await axiosSecure.post('/survey',formData);
        console.log(survey.data);
        if(survey.data.insertedId){
            swal({
                title: 'okay!',
                text: 'Survey Added Successfully ',
                icon:'success',
            })
            reset();
            navigate(location?.state?location.state :"/dashboard/list" )
        }
    }
    console.log(res.data);
  };
     

  // console.log(errors.category);
      return (
        <div className="">
         

          <div className="flex justify-center items-center min-h-screen    ">
  <form  onSubmit={handleSubmit(onSubmit)} id="productForm" className="  rounded-lg py-2 w-full max-w-2xl md:max-w-4xl xl:max-w-6xl my- lg:my- shadow-slate-700  ">
    <h2 className="text-4xl font-bold font-serif text-violet-600 dark:text-violet-300 mb-6 text-center mt-  ">Create Survey</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-16 mx- ">
     
      <div className="mb-4  ">
        <label htmlFor="title" className="block ml-2 text-lg  font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl "> <span className="">Title:  <span className="text-red-500 font-bold dark:text-red-400">*</span></span></label>
        <input
         type="text" placeholder="Title" {...register("title",{ required: true })}  
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900  focus:outline-none" 
        />
        {errors.title&&(<h3 className="text-lg mt-3 ml-3 text-red-600 dark:text-red-300">Must provide a title</h3>)}
      </div>

      
      <div className="mb-4">
        <label htmlFor="Category" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl "><span className="">Category: <span className="text-red-500 font-bold dark:text-red-400">*</span></span></label>
        
        <select
         {...register("category",{ required: true })}
        className={`select select-bordered join-item w-full  px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900  focus:outline-none text-base ${selected ? "text-slate-900" : "text-slate-400"
        }`} value={selected}  onChange={handleChange}
        
      > 
        <option value="" disabled className="text-slate-400">
        Select a category
        </option>
        <option value="Education" className="text-slate-900">
        Education
        </option>
        <option value="Technology" className="text-slate-900" >Technology</option>
        <option value="Marketing" className="text-slate-900">Marketing</option>
        <option value="Health Care" className="text-slate-900">Health Care</option>
        <option value="Work and Career" className="text-slate-900">Work and Career</option>
       
      </select>
      {errors.category&&(<h3 className="text-lg mt-3 ml-3 text-red-600 dark:text-red-300">Must provide a category</h3>)}
      </div>


      <div className="mb-4">
        <label htmlFor="image" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl "><span className="">Category Image: <span className="text-red-500 font-bold dark:text-red-400">*</span></span></label>
        <input
         {...register("image")} type="file"  required
          className="w-full h-11  file-input file-input-secondary dark:file-input " 
        />
       
      </div>


      <div className="mb-4">
        <label htmlFor="Question" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl ">Question 1:</label>
        <input
          type="text" placeholder="Question 1" {...register("question1")}
          className="w-full h-11 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900   focus:outline-none" 
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="Question" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl ">Question 2:</label>
        <input
          type="text" placeholder="Question 2" {...register("question2")}
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900 focus:outline-none" 
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="Question" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl ">Question 3:</label>
        <input
         type="text" placeholder="Question 3" {...register("question3")}
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900 focus:outline-none" 
        />
      </div>
       
       <div className="mb-4">
        <label htmlFor="Date" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl ">Deadline:</label>
        <input
          type="date"  {...register("deadline")}
          className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900    focus:outline-none" 
        />
      </div>

     
       

      
      <div className="mb-4 lg:col-span-2">
        <label htmlFor="Description" className="block ml-2 text-lg font-semibold text-gray-600 dark:text-white mb-2 lg:text-xl  "><span className="">Description: <span className="text-red-500 font-bold dark:text-red-400 ">*</span></span></label>
        <textarea
        type="text"
          placeholder="Enter description" {...register("description",{ required: true })}
         
          rows="6"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-900 focus:outline-none" 
        ></textarea>
        {errors.description&&(<h3 className="text-lg mt-3 ml-3 text-red-600 dark:text-red-300">Must provide a description</h3>)}
      </div>

     

     
    </div>

    {/* Add Button */}
    <div className="mt-6 mb-4 text-center">
    
      <button
        type="submit"
        className="w-60  text-2xl bg-violet-500 dark:bg-violet-700 border-2 border-violet-700 dark:border-violet-900  text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110   "
      >
        Save
      </button> 
    </div>
  </form>
</div>
          </div>
      );
  };

export default Surveyor;