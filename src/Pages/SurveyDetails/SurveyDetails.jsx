/* eslint-disable react/no-unknown-property */
// import { useState } from "react";
// import { BiDislike, BiLike } from "react-icons/bi";
// import {  useParams } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import useAdmin from "../../hooks/useAdmin";
// import useSurveyor from "../../hooks/useSurveyor";
// import usePro from "../../hooks/usePro";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import Swal from "sweetalert2";
// // import useSurveyList from "../../hooks/useSurveyList";
// import {
//     BarChart,
//     Bar,
//     Rectangle,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//   } from "recharts";
// import { useQuery } from "@tanstack/react-query";
// import moment from "moment";


// const SurveyDetails = () => {
//     // const{_id,title,description,category,image,question1,question2,question3,deadline,options,yesVoted,noVoted,liked,disliked,status,loggedUser,loggedUserName,timestamp,adminFeedback,totalVote,comments,voted} = useLoaderData();
//     const { id } = useParams();
//     const{user}= useAuth();
//     const[isAdmin]=useAdmin();
//     const[isSurveyor]=useSurveyor();
//     const[isPro]=usePro();
//     // console.log(!isSurveyor);
//     const axiosPublic = useAxiosPublic();
//     // const{refetch} = useSurveyList();

//     const [yesNoQuestion1, setYesNoQuestion1] = useState('');
// const [yesNoQuestion2, setYesNoQuestion2] = useState('');
// const [yesNoQuestion3, setYesNoQuestion3] = useState('');
// const [uplike, setUpLike] = useState(0);
// const [updislike, setUpDislike] = useState(0);
// const [isUserVoted, setIsUserVoted] = useState(false);


// const { data: survey = {}, refetch } = useQuery({
//     queryKey: ["survey", id, user?.email],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/survey/${id}?email=${user?.email}`);
//     //   const today = moment().format("YYYY-MM-DD");
//     //   console.log(today, res.data.result.expiryDate);
//     //   setDateExpire(moment(res.data.result.expiryDate).isBefore(today));
//       setIsUserVoted(res.data.isUserVoted);
//     console.log(isUserVoted);
//       return res.data.result;
//     },
//   });
//   console.log(survey);
//   const voteTime =moment().format('MMMM Do YYYY, h:mm:ss a');
//   const { _id,title,description,category,question1,question2,question3,deadline,options,timestamp,comments,liked,disliked} = survey;

//   const dateExpire = new Date(deadline) < Date.now();

// const handleLike = () => {
//     if ((!isSurveyor&& !isAdmin)&&(user||isPro)) {
//       setUpDislike(0);
//       setUpLike(1);
//     }
//   };
// //   console.log(Uplike);
//   const handleDislike = () => {
//     if ((!isSurveyor&& !isAdmin)&&(user||isPro)) {
//       setUpDislike(1);
//       setUpLike(0);
//     }
//   };

// // For handling changes in question 1's radio buttons
// const handleOptionChangeQuestion1 = e => {
//   setYesNoQuestion1(e.target.value);
// };

// // For handling changes in question 2's radio buttons
// const handleOptionChangeQuestion2 = e => {
//   setYesNoQuestion2(e.target.value);
// };
// const handleOptionChangeQuestion3 = e => {
//   setYesNoQuestion3(e.target.value);
// };
//       // voted
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(yesNoQuestion1);
//         let yes = 0;
//         let no = 0;
//         if (yesNoQuestion1 === "yes") {
//           yes =  yes + 1;
        
//         }
//         if (yesNoQuestion2 === "yes") {
//           yes =  yes + 1;
          
//         }
//         if (yesNoQuestion3 === "yes") {
//           yes =  yes + 1;
         
//         }
//         if (yesNoQuestion1 === "no") {
         
//           no =no+1;
//         }
//         if (yesNoQuestion2 === "no") {
          
//           no =no +1;
//         }
//         if (yesNoQuestion3 === "no") {
        
//           no =no +1;
//         }
//         const votedInfo = {
//           email: user?.email,
//           votedIn: [yesNoQuestion1,yesNoQuestion2,yesNoQuestion3],
//           liked: uplike,
//           disliked: updislike,
//           yesVoted: yes,
//           noVoted: no,
//           totalVote:yes+no,
//           voteTime:voteTime,
//         };
//         console.log(votedInfo);
//         axiosPublic.put(`/updateSurvey/${_id}`, votedInfo).then((res) => {
//             console.log(res.data);
//             if (res.data.modifiedCount > 0) {
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Voted Successfully",
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
            
//             }
//             refetch();
//           });
//     };

//     // report
//   const handleReport = (e) => {
//     e.preventDefault();
//     const report = e.target.report.value;
//     console.log(report);
//     axiosPublic
//       .put(`/surveyReportUpdate/${_id}?report=${report}`)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.modifiedCount > 0) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Reported successfully",
//             showConfirmButton: false,
//             timer: 1500,
//           });
         
//         }
//         refetch();
//       });
//   };


//   const handleComment = (e) => {
//     e.preventDefault();
//     const comment = e.target.comment.value;
//     console.log(comment);
//     axiosPublic
//       .put(`/surveyCommentUpdate/${_id}?comment=${comment}`)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.modifiedCount > 0) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Comment added successfully",
//             showConfirmButton: false,
//             timer: 1500,
//           });
         
//         }
//         refetch();
//       });
//   };
//     //{title,description,category,image,question1,question2,question3,deadline,options,yesVoted,noVoted,liked,disliked,status,loggedUser,loggedUserName,timestamp,adminFeedback,totalVote,}
//     // console.log(question2);
//     return (
//         <div>
//             <h1 className="text-center font-semibold font-serif text-5xl text-pink-700 p-8">Survey Details</h1>
//             <div className=" card-actions justify-center py-8 flex-col">
//             <div className="card  w-[350px] min-h-[390px] md:min-h-[600px] md:w-[550px] lg:w-[750px]   bg-pink-200 shadow-xl ml-4 md:ml-32 xl:ml-72">
//   {/* <figure><img src={image} alt="" /></figure> */}
//   {isUserVoted || dateExpire ? (
//      <div className="">
//             <BarChart
//               className=" -ml-10 py-10 mx-auto md:ml-12 md:mt-14 md:py-0 lg:ml-36 lg:mt-24"
//               width={400}
//               height={300}
//               data={[survey]}
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
                
                
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="title" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar
//                 dataKey="yesVoted"
//                 fill="#82ca9d"
//                 activeBar={<Rectangle fill="lime" stroke="blue" />}
//               />
//               <Bar
//                 dataKey="noVoted"
//                 fill="red"
//                 activeBar={<Rectangle fill="orange" stroke="purple" />}
//               />
//             </BarChart>
//             </div>
//           ) : (<>
//   <div className="card-body  text-center">
//     <h2 className="  text-center text-3xl text-violet-800 font-bold pt-4">Title: {title}</h2>
//     <h3 className="pt-2 font-bold ">Description: <span className="font-normal"> {description}</span></h3>
//     <h3 className="badge w-40 bg-blue-500 text-white h-8 font-semibold text-lg ml-14 md:ml-40 lg:ml-64 mt-2">{category}</h3>
//     <h3 className="mt-2 text-green-600 font-bold text-lg">Survey Date: <span className="font-normal text-black ">{timestamp}</span></h3>
//     <h3 className="mt-2 text-red-600 font-bold text-lg">Deadline: <span className="font-normal text-black ">{deadline}</span></h3>
//     <h3 className="mt-2 text-purple-700 font-bold text-xl">Question:</h3>
    
//     <form onSubmit={handleSubmit} className="">
//     {question1 ? (
//     <div>
//     <h3 className="mt-4 text-lime-700 font-bold text-xl">{question1}</h3>
//     <div className="flex items-center ml-8 lg:ml-16 mt-2">
//     <input
//             type="radio"
//             id="yesQuestion1"
//             value="yes"
//             name="radioQuestion1"
//             checked={yesNoQuestion1 === "yes"}
//             onChange={handleOptionChangeQuestion1}
//           />
    
//     <label className="label" htmlFor="yes1">
//     <span className="label-text font-semibold text-lg ml-2 mr-4">{options[0]}</span>
    
//   </label>
//   <input
//             type="radio"
//             id="yesQuestion1"
//             value="no"
//             name="radioQuestion1"
//             checked={yesNoQuestion1 === "no"}
//             onChange={handleOptionChangeQuestion1}
//           />
    
//     <label className="label"htmlFor="no1">
//     <span className="label-text ml-2 font-semibold text-lg">{options[1]}</span>
    
//   </label>
//   </div>
  
//   </div>) : null}
     
//      {question2 ? (
//         <div>
//     <h3 className="mt-4 text-lime-700 font-bold text-xl">{question2}</h3>
//     <div className="flex items-center ml-8 lg:ml-16 mt-2">
//     <input
//             type="radio"
//             id="yesQuestion2"
//             value="yes"
//             name="radioQuestion2"
//             checked={yesNoQuestion2 === "yes"}
//             onChange={handleOptionChangeQuestion2}
//           />
    
//     <label className="label" >
//     <span className="label-text font-semibold text-lg ml-2 mr-4">{options[0]}</span>
    
//   </label>
//   <input
//             type="radio"
//             id="yesQuestion2"
//             value="no"
//             name="radioQuestion2"
//             checked={yesNoQuestion2 === "no"}
//             onChange={handleOptionChangeQuestion2}
//           />
//     <label className="label" >
//     <span className="label-text ml-2 font-semibold text-lg">{options[1]}</span>
    
//   </label>
//   </div>
  
//   </div>) : null}


//      {question3 ? (
//         <div>
//     <h3 className="mt-4 text-lime-700 font-bold text-xl">{question3}</h3>
//     <div className="flex items-center ml-8 lg:ml-16 mt-2">
//     <input
//             type="radio"
//             id="yesQuestion3"
//             value="yes"
//             name="radioQuestion3"
//             checked={yesNoQuestion3 === "yes"}
//             onChange={handleOptionChangeQuestion3}
//           />
    
//     <label className="label" >
//     <span className="label-text font-semibold text-lg ml-2 mr-4">{options[0]}</span>
    
//   </label>
//   <input
//             type="radio"
//             id="yesQuestion3"
//             value="no"
//             name="radioQuestion3"
//             checked={yesNoQuestion3 === "no"}
//             onChange={handleOptionChangeQuestion3}
//           />
//     <label className="label" >
//     <span className="label-text ml-2 font-semibold text-lg">{options[1]}</span>
    
//   </label>
//   </div>
  
//   </div>) : null}
//   <button
//                       type="submit"
//                       disabled={(( isAdmin || isSurveyor||!user))}
//                       className="bg-green-500 w-28 h-10 text-lg mt-8 font-semibold  disabled:bg-slate-400 text-white rounded-lg"
//                     >
//                       vote
//                     </button>

//   </form>
//   <div className="">
//   <div className="flex md:ml-16 mt-2 md:-mt-10 text-3xl  gap-2">
//                 <BiLike
//                   onClick={handleLike}
//                   className={`${
//                     uplike === 1 ? "text-blue-500 " : "text-black"
//                   } cursor-pointer`}
//                 /> <span className="ml-0 text-blue-600 text-lg font-bold">{uplike===1? liked+1 : liked}</span>
//                 <BiDislike
//                   onClick={handleDislike}
//                   className={`${
//                     updislike === 1 ? "text-red-500 ml-8" : "text-black ml-8"
//                   } cursor-pointer`}
//                 ></BiDislike><span  className="ml-0 text-red-600 text-lg font-bold">{updislike===1? disliked+1 : disliked}</span>
//               </div>
//   </div>

//               <form
//                 onSubmit={handleReport}
//                 className="flex w-full  gap-3 flex-col mt-6"
//               >
//                 <label className="font-bold"> Report this category if you see any  inappropriate content</label>
//                 <textarea
//                   name="report"
//                   className="textarea  textarea-bordered"
//                   placeholder="Report"
//                 ></textarea>
//                 {/* if there is a button in form, it will close the modal */}
//                 <button
//                   type="submit"
//                   disabled={(( isAdmin || isSurveyor||!user))}
//                   className="bg-orange-600 w-24 lg:w-44 text-white text-lg font-bold disabled:bg-slate-500 rounded-lg py-3 "
//                 >
//                   Report
//                 </button>
//               </form>
   
//   </div>





//      </>

// )}
  
// </div>



// <div className="w-[340px] md:w-[496px] lg:w-[700px] mx-auto my-10 bg-indigo-300 rounded-lg shadow-2xl">

//           <div className="card-body">
//           {!isPro && <h3 className="text-red-700 font-semibold text-center ">Only pro users can comment</h3>}
//             <h2 className="card-title text-3xl text-lime-700 font-bold">
//               Comments
//             </h2>
//             <div className="w-full h-80 bg-purple-200 rounded-lg overflow-y-auto">
//               <div className="p-4">
//                 {comments?.map((item, index) => (
//                   <div className=" flex gap-4" key={index}>
//                     <h3 className="mt-1 text-lg">{index + 1}.</h3>
//                     <h3 className="bg-blue-400 text-white  p-2 rounded-full inline-block">
//                       {item}
//                     </h3>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* comment form */}
//             <form
//               className={`${ isPro ? "" : "hidden"}`}
//               onSubmit={handleComment}
//             >
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Comment"
//                   name="comment"
//                   className="input input-bordered w-full"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-emerald-500 px-3 rounded-lg font-semibold text-white"
//                 >
//                   Comment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//             </div>
//         </div>
//     );
// };

// export default SurveyDetails;



import { useEffect, useState, useRef  } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useSurveyor from "../../hooks/useSurveyor";
import usePro from "../../hooks/usePro";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import Swal from "sweetalert2";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { LuDelete } from "react-icons/lu";
import swal from "sweetalert";

const SurveyDetails = () => {
  const { id } = useParams();
const { user} = useAuth();
const [isAdmin] = useAdmin();
const [isSurveyor] = useSurveyor();
const [isPro] = usePro();
const axiosPublic = useAxiosPublic();

const [answers, setAnswers] = useState([
  { question: "question1", answer: "" },
  { question: "question2", answer: "" },
  { question: "question3", answer: "" },
]);

const [uplike, setUpLike] = useState(0);
const [updislike, setUpDislike] = useState(0);
const [isUserVoted, setIsUserVoted] = useState(false);

const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [report, setReport] = useState('');
const { data: survey = {}, refetch,isFetching} = useQuery({
  queryKey: ["survey", id, user?.email],
  queryFn: async () => {
    
    const res = await axiosPublic.get(`/survey/${id}?email=${user?.email}`);
    setIsUserVoted(res.data.isUserVoted);
    
    return res.data.result ;
  },
});

const voteTime = moment().format("MMMM Do YYYY, h:mm:ss a");
const { _id, title, description, category, question1, question2, question3, deadline, option, timestamp,  liked, disliked,question1_yes, question1_no,
  question2_yes, question2_no,
  question3_yes, question3_no,totalVote } = survey;
  
  const chartRef = useRef(null);

  const [themeColor, setThemeColor] = useState("black"); // Default text color

  // **Detect Dark Mode on Load & Changes**
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode =
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      setThemeColor(isDarkMode ? "white" : "black");
    };

    checkDarkMode(); // Check on mount

    // Observe class changes on <html> for dark mode toggle
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  

  // Data for chart
  const data = {
    labels: ["Q1 Yes", "Q1 No", "Q2 Yes", "Q2 No", "Q3 Yes", "Q3 No", "Total Votes"],
    datasets: [
      {
        label: "Total Votes",
        data: [
          question1_yes,
          question1_no,
          question2_yes,
          question2_no,
          question3_yes,
          question3_no,
          totalVote,
        ],
        backgroundColor: [
          
          "#00C49F", // Green for Yes
          "#FF4848", // Red for No
          "#00C49F", // Green for Yes
          "#FF4848", // Red for No
          "#00C49F", // Green for Yes
          "#FF4848", // Red for No
          "#4682B4", // Blue for Total Votes
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  // Mapping questions for tooltips
  const questionMap = {
    "Q1 Yes": question1,
    "Q1 No": question1,
    "Q2 Yes": question2,
    "Q2 No": question2,
    "Q3 Yes": question3,
    "Q3 No": question3,
    "Total Votes": "Total Votes",
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Makes it responsive
    plugins: {
      legend: {
        display: false,
        position: "top",
       
        labels: {
          color: themeColor,  // Ensures white text in dark mode
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            // Show the actual question instead of Q1 Yes, Q1 No, etc.
            
            return questionMap[tooltipItems[0].label];
          },
          label: (tooltipItem) => {
            
            return `Votes: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: `${title}`,
          color: themeColor,
          font: { size: 16, weight: "", family: "serif" },
          padding: {
            top: 16,
           
          },
        },
        
        ticks: {
          color: themeColor, 
          
        },
      },
      y: {
        title: {
          display: true,
          text: "Vote Count",
          color: themeColor,
          font: { size: 14, weight: "",family: "serif"  },
          padding: {
            bottom: 16,
            
          },
          
        },
        ticks: {
          color:themeColor,
          stepSize: 1,  // Y-axis text color
        },
      },
    },
  };
 
  console.log();

  const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0); // Set time to 00:00:00
const surveyDate = new Date(deadline);
surveyDate.setHours(0, 0, 0, 0); // Set
console.log(surveyDate.getTime());
const dateExpire = surveyDate.getTime() >= todayDate.getTime();
console.log(dateExpire);
const handleLike = () => {
  if ((!isSurveyor && !isAdmin) && (user || isPro)) {
    setUpDislike(0);
    setUpLike((prevLike) => (prevLike === 1 ? 0 : 1));
  }
};

const handleDislike = () => {
  if ((!isSurveyor && !isAdmin) && (user || isPro)) {
    // setUpDislike(1);
    setUpLike(0);
    setUpDislike((prevDislike) => (prevDislike === 1 ? 0 : 1));
  }
};

const handleOptionChange = (question, value) => {
  setAnswers((prevAnswers) =>
    prevAnswers.map((q) =>
      q.question === question ? { ...q, answer: value } : q
    )
  );
};

const handleSubmit = (e) => {
  
  e.preventDefault();

  let question1Yes = 0, question1No = 0;
  let question2Yes = 0, question2No = 0;
  let question3Yes = 0, question3No = 0;

  answers.forEach(({ question, answer }) => {
    if (question === "question1") {
      if (answer === "yes")
      { 
        question1Yes++;


      }
         
      if (answer === "no") question1No++;
    }
    if (question === "question2") {
      if (answer === "yes") question2Yes++;
      if (answer === "no") question2No++;
    }
    if (question === "question3") {
      if (answer === "yes") question3Yes++;
      if (answer === "no") question3No++;
    }
  });

  const votedInfo = {
    email: user?.email,
    votedIn: answers,
    liked: uplike,
    disliked: updislike,
    totalVote: question1Yes + question1No + question2Yes + question2No + question3Yes + question3No,

    question1_yes: question1Yes,
    question1_no: question1No,
    question2_yes: question2Yes,
    question2_no: question2No,
    question3_yes: question3Yes,
    question3_no: question3No,
    voteCounts: {
      [question1]: { yes: question1Yes, no: question1No },
      [question2]: { yes: question2Yes, no: question2No },
      [question3]: { yes: question3Yes, no: question3No },
    },
    voteTime: voteTime,
  };

  axiosPublic.put(`/updateSurvey/${_id}`, votedInfo).then((res) => {
    if (res.data.modifiedCount > 0) {
      swal({
        position: "top-end",
        icon: "success",
        title: "Voted Successfully",
        button: true,
        timer: 1500,
      });
    }
    refetch();
  });
};

// console.log( question1);
  

// const handleReport = (e) => {
//     e.preventDefault();
//     const report = e.target.report.value;
//     axiosPublic.put(`/surveyReportUpdate/${_id}?report=${report}`).then((res) => {
//       if (res.data.modifiedCount > 0) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Reported successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//       refetch();
//     });
//   };

  const handleReport = async (e) => {
    e.preventDefault();
    if (!report.trim() || !user) return;
  
    try {
        const reportData = {
            text: report,
            // userId: user.uid,
            userEmail: user.email,
            userName: user.displayName || 'Anonymous',
            userPhoto: user.photoURL || '/default-avatar.png',
            timestamp: new Date().toISOString(),
            // productId: _id
        };
  
        const response = await axiosPublic.post(`/surveyReport/${_id}`, reportData);
        console.log(response);
        if (response.status === 200 && response.data.success) {
            setReport('');
            
            // await fetchComments();
            swal({
                position: "top-end",
                icon: "success",
                title: "Report added successfully",
                
                timer: 1500,
            });
            refetch();
        }else {
          throw new Error(response.data.message || "Unknown error occurred");
      }
    } catch (error) {
        console.error("Error adding report:", error);
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add report. Please try again.',
        });
    }
  };
  
  // const handleComments = (e) => {
  //   e.preventDefault();
   
  //   const comment = e.target.comment.value;
  //   axiosPublic.put(`/surveyCommentUpdate/${_id}?comment=${comment}`).then((res) => {
  //     if (res.data.modifiedCount > 0) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Comment added successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //     refetch();
  //   });
  // };
 
 
// Fetch comments
const fetchComments = async () => {
  try {
      setIsLoading(true);
      setError(null);
      // console.log("Fetching comments for ID:", _id); // Debug log
      
      const response = await axiosPublic.get(`/surveyComments/${_id}`);
      // console.log("Response data:", response.data); // Debug log
      
      if (response.data && Array.isArray(response.data)) {
        setComments(response.data);
    } else {
        console.error("Unexpected response structure:", response.data);
        setComments([]);
    }
  } catch (error) {
      console.error("Error details:", error.response || error); // Debug log
      setError("Failed to load comments. Please try again later.");
      setComments([]);
  } finally {
      setIsLoading(false);
  }
};

useEffect(() => {
  if (_id) {
      fetchComments();
  }
}, [_id, axiosPublic]);

// Add comment
const handleComment = async (e) => {
  e.preventDefault();
  if (!comment.trim() || !user) return;

  try {
      const commentData = {
          text: comment,
          // userId: user.uid,
          userEmail: user.email,
          userName: user.displayName || 'Anonymous',
          userPhoto: user.photoURL || '/default-avatar.png',
          timestamp: new Date().toISOString(),
          // productId: _id
      };

      // console.log("Sending comment data:", commentData); // Debug log

      const response = await axiosPublic.post(`/addComment/${_id}`, commentData);
      console.log(response);
      if (response.status === 200 && response.data.success) {
          setComment('');
          await fetchComments();
          swal({
              position: "top-end",
              icon: "success",
              title: "Comment added successfully",
              
              timer: 1500,
          });
      }else {
        throw new Error(response.data.message || "Unknown error occurred");
    }
  } catch (error) {
      console.error("Error adding comment:", error);
      swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add comment. Please try again.',
      });
  }
};




const handleDeleteComment = async (commentId) => {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to return this!",
      icon: 'warning',
      buttons: {
          cancel: {
              text: "Cancel",
              visible: true,
              className: "bg-gray-400 text-white py-2 px-4 rounded-lg hover:none"
          },
          confirm: {
              text: "Yes, delete it!",
              className: "bg-red-600 text-white py-2 px-4 rounded-lg"
          }
      },
      dangerMode: true,
  }).then(async (willDelete) => {
      if (willDelete) {
          try {
              // Assuming _id and axiosSecure are properly defined in the scope
              const response = await axiosPublic.delete(`/deleteComment/${_id}/${commentId}`);
              
              if (response.data.success) {
                  // Re-fetch comments after successful deletion
                  // await fetchComments();
                  setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId));
                  // Show success message
                  swal({
                      position: "top-end",
                      icon: "success",
                      title: "Comment deleted successfully",
                      showConfirmButton: false,
                      timer: 1500,
                  });
              } else {
                  // Handle case when API responds but deletion isn't successful
                  swal({
                      icon: 'error',
                      title: 'Oops...',
                      text:'Failed to delete comment. Please try again.',
                  });
              }
          } catch (error) {
              console.error("Error deleting comment:", error);
              // Show error message
              swal({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Failed to delete comment. Please try again.',
              });
          }
      }
  });
};

console.log();

 
  // if (isLoading) {
  //   return (
  //       <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
  //       <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
  //   </div>
  //   );
  // }
  return (
    <div className="mt-28 md:mt-32 min-h-screen dark:bg-gray-900 py-8 px-4 ">
      {isFetching? (<div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900 ">
         <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
     </div>): isUserVoted || !dateExpire ? (
      <h1 className="text-center font-semibold font-serif text-5xl text-purple-700 dark:text-white pt-5 ">Survey Results</h1>):(
      <h1 className="text-center font-semibold font-serif text-5xl text-purple-700 dark:text-white pt-5 ">Survey Details</h1>)}
      {isUserVoted?(<h3 className="text-center text-xl font-medium text-green-600 dark:text-green-500 pt-4">vote done and see the result</h3>):""}
      {!dateExpire?(<h3 className="text-center text-xl font-medium text-red-600 dark:text-red-500 pt-4">Voting deadline is over, see the result</h3>):""}
      <div className="max-w-4xl mx-auto mt-10">
      
        <div className="bg-gray-200 dark:bg-gray-700 rounded-xl shadow-2xl overflow-hidden ">
          {isUserVoted || !dateExpire ? (
            <div className="">
             
            
 <div className="flex justify-center items-center w-full h-[600px] dark:bg-gray-500 p-4 md:p-7  ">
      <div className="w-full mx-auto h-full">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>

            </div>
          ) :isLoading || isFetching ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-xl text-gray-600 dark:text-gray-300">Loading survey data...</p>
            </div>
          ) :(
            <div className="p-8 ">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4">{title}</h2>
                  <span className="px-4 py-1.5 rounded-full bg-purple-200 text-purple-600 border border-purple-600 text-sm font-medium">
                    {category}
                  </span>
                </div>
                
                <p className="text-blue-700 dark:text-blue-500  font-semibold text-lg">Description:  <span className="text-gray-800 font-normal dark:text-gray-300">{description}</span> </p>
                
                <div className="space-y-4">
                  <p className="text-green-600 dark:text-emerald-400 font-semibold text-lg">Survey Date: <span className="text-gray-800 dark:text-gray-300">{timestamp}</span></p>
                  <p className="text-red-600 dark:text-red-400 font-semibold text-lg">Deadline: <span className="text-gray-800 dark:text-gray-300 border-b-2  border-red-500 ">{deadline}</span></p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                {[
    { id: "question1", text: question1 },
    { id: "question2", text: question2 },
    { id: "question3", text: question3 }
  ].map((q, idx) => q.text && (
    <div key={idx} className="bg-white border border-purple-700 dark:border-white dark:bg-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-purple-800 dark:text-white mb-4">
        {idx + 1}. {q.text}
      </h3>
      <div className="flex space-x-8">
        {option.map((item, optIdx) => (
          <label key={optIdx} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              required
              value={item.toLowerCase()}
              name={q.id} // Using consistent id for the name
              checked={answers.find(a => a.question === q.id)?.answer === item.toLowerCase()}
              onChange={() => handleOptionChange(q.id, item.toLowerCase())}
              className="form-radio h-5 w-5 radio bg-white checked:bg-purple-500 dark:checked:bg-black border-2 "
            />
            <span className="text-zinc-600 dark:text-gray-200">{item}</span>
          </label>
        ))}
      </div>
    </div>
  ))}

  <div className="flex items-center justify-center space-x-8 py-4">
    <div className="flex items-center space-x-2">
      <BiLike
        onClick={handleLike}
         title="Like"
        className={`text-3xl cursor-pointer ${uplike === 1 ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}
      />
      <span className={`${uplike === 1 ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'} font-bold`}>
        {uplike === 1 ? liked + 1 : liked}
      </span>
    </div>
    <div className="flex items-center space-x-2">
      <BiDislike
        onClick={handleDislike}
       title="Dislike"
        className={`text-3xl cursor-pointer ${updislike === 1 ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'}`}
      />
      <span className={`${updislike === 1 ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'} font-bold`}>
        {updislike === 1 ? disliked + 1 : disliked}
      </span>
    </div>
  </div>

  <button
    type="submit"
    disabled={isAdmin || isSurveyor || !user}
    className="w-full py-3 bg-purple-700 dark:bg-purple-600 text-white text-xl rounded-lg font-semibold border border-purple-900 hover:bg-purple-500 dark:hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition"
  >
    Submit Vote
  </button>
  {!user || isAdmin || isSurveyor? <h3 className="text-center font-medium text-lg text-red-600 dark:text-red-500">Only login users can vote and report.</h3>:""}
</form>

                

                <div className="border-t border-gray-400 dark:border-gray-600 pt-6">
                  <form onSubmit={handleReport} className="space-y-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium">
                    Report this category if you see any  inappropriate content
                    </label>
                    <textarea
                      name="report"
                      type="text"
                      value={report}
               onChange={(e) => setReport(e.target.value)} 
                      className="w-full bg-white  dark:bg-gray-500 text-slate-700 dark:text-gray-100 rounded-lg p-3"
                      placeholder="Describe the issue..."
                    />
                    <button
                      type="submit"
                      disabled={isAdmin || isSurveyor || !user || !report.trim() }
                      // || !comment.trim()
                      className={`px-6 py-2 text-white rounded-lg font-medium  disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed      w-fit transition-all shadow-[3px_3px_0px_black] dark:shadow-[white] hover:shadow-none ${
                        report.trim() 
                            ? 'bg-red-600  hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-600' 
                            : 'bg-gray-400 cursor-not-allowed'
                    } hover:translate-x-[3px] hover:translate-y-[3px]`}
                    >
                      Submit Report
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}   
        </div>
        </div>

        {/* <div className="mt-8 bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            {!isPro && (
              <p className="text-red-400 text-center mb-4">Only pro users can comment</p>
            )}
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Comments</h2>
            <div className="bg-gray-700 rounded-lg h-80 overflow-y-auto mb-4">
              <div className="p-4 space-y-3">
                {comments?.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-gray-400">{index + 1}.</span>
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {isPro && (
              <form 
              onSubmit={handleComments} 
              className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  name="comment"
                  className="flex-1 bg-gray-700 text-gray-200 rounded-lg px-4 py-2"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
                >
                  Comment
                </button>
              </form>
            )}
          </div>
        </div> */}





        <div className="  py-10 ">
  <section className="w-full rounded-lg border-4 shadow-md shadow-slate-400 border-purple-600 p-4 my-8 mx-auto max-w-4xl dark:border-purple-400 dark:bg-slate-600 ">
    <h3 className="font-os text-xl font-bold mb-4 dark:text-slate-50" >All Comments</h3>
    <div className="w-full h-80  rounded-lg overflow-y-auto overflow-x-hidden">
      {!isPro &&
            <p className="dark:text-red-500 text-lg text-red-600 text-center font-medium mb-4">Only pro users can comment</p>}
    {isLoading ? (
         <div className="flex justify-center items-center h-full">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-300"></div>
             </div>
         ) : error ? (
             <div className="text-red-500 text-center p-4">{error}</div>
          ) : isPro && comments.length === 0 ? (
               <div className="text-gray-500 text-lg text-center p-6 dark:text-gray-300">No comments yet. Be the first to comment!</div>
          ) :  (<>
         {comments.map((commentItem, index) => (                    
    <div key={commentItem._id || index} className=" mr-3 mt-4 border rounded-lg p-3  border-slate-400 ">
         

         <div className="flex items-center justify-between ">

          <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center ">
            <img className="h-12 w-12 rounded-full object-cover" src={commentItem.userPhoto} alt={commentItem.userName} onError={(e) => { e.target.src = '/default-avatar.png';
                                                    }} />
        </div>

        <div className="ml-3">
            <div className="font-medium  text-purple-800 dark:text-white">{commentItem.userName}</div>
            <div className="text-xs lg:text-xs text-gray-600 dark:text-gray-300">Posted on {new Date(commentItem.timestamp).toLocaleString('en-GB', 
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
                        }
                        </div>
            </div>
                </div>
                <div>
        {user?.email == commentItem.userEmail && isPro && (
                <button
                 onClick={() => handleDeleteComment(commentItem._id)}
                         className="text-red-400 hover:text-red-700 transition-colors mr-4 dark:text-red-300 dark:hover:text-red-600  "
                             title="Delete comment">
                    <LuDelete className="" size="22"></LuDelete>
                  </button>
                      )}</div>
                 </div>

             <div className=" ml-[68px]">
             <h3 className="my-1 text-purple-800 mr-4 break-words text-lg dark:text-white">
           {commentItem.text}
                                                  
               </h3>
                </div>
        

    </div>))} 
     </>

)} </div>

   

    {isPro && (
    <form onSubmit={handleComment}  className="mt-4">
        

        <div className="mb-4">
            <label  className="block text-purple-800 dark:text-white text-lg font-medium pb-2">Comment</label>
            
            <textarea id="comment" name="comment" type="text"
                                    placeholder="Write a comment..."
                                    rows="3"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)} className="border-2  border-purple-600 dark:border-purple-400 p-2 w-full rounded" required></textarea>
        </div>
       
        <button  type="submit"
                                    disabled={!comment.trim()}
                                    className={`text-white font-medium py-2 px-4 rounded 
                                        ${
                                        comment.trim() 
                                            ? 'bg-purple-700  hover:bg-purple-600 dark:bg-purple-500 dark:hover:bg-purple-600' 
                                            : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                    >Post
                    Comment
        </button>
    </form>
    ) } 
  {/* //   </>
  // )} */}
    
</section>
</div>  


      
    </div>
  );
};

export default SurveyDetails;