import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
// import { BiLike,BiDislike } from "react-icons/bi";
// import { FaRegCommentAlt } from "react-icons/fa";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { LuVote } from "react-icons/lu";
const MostVoted = () => {
    const axiosPublic = useAxiosPublic();
    
  const { data: survey = [] } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axiosPublic.get("/survey/mostVote");
      return res.data;
    },
    
  });

//   console.log(survey[1].comments.length);
    return (
        <div className="bg-white dark:bg-zinc-700">
             {/* <h2 className="text-center font-bold text-5xl my-20 font-serif text-orange-800">
        Most Voted Surveys
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-12">
        {survey.map((item) => (
          <div
            key={item._id}
            className=" rounded-tr-[80px] rounded-bl-[80px] rounded-tl-none rounded-br-none bg-lime-200 w-[340px] md:min-h-[700px] md:w-[360px] lg:w-[450px] xl:w-[400px]  shadow-xl ml-6 my-6 md:ml-4 lg:ml-8"
          >
             <figure >
    <img className="rounded-tr-[80px] rounded-tl-none w-[340px] h-36 md:w-[360px] md:h-40 lg:w-[450px] lg:h-48 xl:w-[400px]" src={item.image} alt=""  />
  </figure>
            <div className="card-body mx-auto ">
            <div className="flex gap-3">
              <h2 className="card-title text-2xl font-bold  text-purple-700 font-serif ">
                {item.title}
               
              </h2>
              
                <p className="font-semibold badge text-center w-20 h-10 lg:h-6 bg-pink-700 text-white">
                 {item.category}
                </p>
              </div>


              <p className="text-blue-600 font-bold mt-2 mx-auto"> Description: <span className="text-black font-medium">{item.description}</span></p>
        


              <div className="flex gap-6 lg:gap-20 mt-2">
              <h3 className="flex items-center font-bold text-teal-600 gap-2 badge text-lg px-2 py-2 h-8 lg:text-2xl"> */}
                {/* <GiVote className="text-3xl" /> */}
                {/* Vote:
                <span className="  rounded-full text-blue-700 font-bold">
                  {item.totalVote}
                </span>
              </h3>
              <div className=" flex gap-6 lg:gap-4  mt-1" >
        <button className="flex gap-2"><BiLike className="text-2xl "></BiLike> <span className="text-green-800 font-bold">{item.liked}</span></button>
        <button className="flex gap-2"><BiDislike className="text-2xl "></BiDislike> <span className="text-red-600 font-bold ">{item.disliked}</span></button>
        <button className="flex gap-2 mt-1"><FaRegCommentAlt className="text-xl"></FaRegCommentAlt><span className="text-blue-700 font-bold -mt-1">{item.comments? item.comments.length : 0}</span></button>
    </div>
              </div>
              <div className="card-actions">
                <Link
                  to={`/details/${item._id}`}
                  className=" py-3 rounded-lg text-center  font-medium w-full bg-gradient-to-r from-blue-300 to-purple-700 text-lg text-white mt-4 mx-12 lg:mx-20 lg:mt-16"
                >
                  Survey Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> */}





      <div className="container mx-auto p-5">
      <h1 className="my-14 text-center font-bold text-3xl md:text-5xl  font-serif text-blue-600 dark:text-blue-500"><span className="text-purple-700 dark:text-purple-400 ">Most Voted</span> Surveys</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mx-auto">
        {survey.length > 0 ? survey.map((survey) => (
          <div key={survey._id}  className="bg-slate-50 dark:bg-slate-500 rounded-2xl shadow-lg overflow-hidden  flex flex-col h-full
                 dark:bg-shadesOfBlue    group hover:ring-2 hover:ring-purple-500 dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            {/* Image */}
            <img className="w-full h-52 object-cover" src={survey.image} alt="Survey" />

            {/* Content */}
            <div className="p-5 flex-grow flex flex-col  ">
              <h2 className=" text-gray-900 dark:text-white text-xl lg:text-lg xl:text-xl  font-bold mb-2">{survey.title}</h2>
               {/* Category */}
               <span className="inline-block bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full mt-2 self-start">
                {survey.category}
              </span>

              {/* Fixed Height Description */}
              <p className="text-gray-600 dark:text-gray-200 mt-4 flex-grow h-28 font-medium">
                {survey.description}
              </p>

              {/* Category */}
              {/* <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium mt-3 px-3 py-1 rounded-full self-start">
                {survey.category}
              </span> */}

              {/* Stats */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <ThumbsUp size={19} className="text-green-500 dark:text-green-400 dark:stroke-[3] " />
                    <span className="font-medium dark:text-white ">{survey.liked}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <ThumbsDown size={19} className="text-red-500 dark:text-red-400 dark:stroke-[3] mt-1" />
                    <span className="font-medium dark:text-white ">{survey.disliked}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MessageCircle size={19} className="text-blue-500 dark:text-blue-400 dark:stroke-[3]" />
                    <span className="font-medium dark:text-white ">{survey.comments? survey.comments.length : 0}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-700 ">
                  <LuVote size={20} className="text-gray-500 dark:text-gray-300 " />
                  <span className="font-medium  dark:text-white">{survey.totalVote} Vote</span>
                </div>
              </div>

              {/* Survey Details Button */}
              <Link
                  to={`/details/${survey._id}`}  className="mt-8     rounded-lg font-semibold text-center  mx-auto  text-lg    flex border-2 bottom-0 border-purple-600 dark:border-slate-700 dark:text-slate-700 p-2 px-6 capitalize text-purple-600 group-hover:bg-purple-500 dark:group-hover:bg-slate-600 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100">
                View Survey Details
             
              </Link>
               
               
          
            </div>
          </div>
        )):""}
      </div>
      {survey.length == 0?(<h3 className="text-center  h-36 text-lg font-medium text-slate-700 dark:text-slate-300">No survey has been created yet. </h3>):""}
    </div>

    




        </div>
    );
};

export default MostVoted;