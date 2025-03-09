import { useEffect, useRef, useState } from "react";

// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { ImHome3 } from "react-icons/im";
// import useSurveyList from "../../../hooks/useSurveyList";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SurveyorSurveyResult = () => {
  const { user } = useAuth();
//   console.log(user);
  const userEmail = user.email;
  const axiosSecure = useAxiosSecure();
  const [surv, setSurv] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [isLoading, setisLoading] = useState(true);
//   const[survey] = useSurveyList();
  useEffect(() => {
    axiosSecure
      .get(`/survey/sortByTotalVote`)
      .then((res) => {
        setSurv(res.data);
        setisLoading(false);
      });
  }, [user?.email, axiosSecure]);
 
  useEffect(() => {
        if(surv.length > 0)
        {
    const findSurvey = surv.filter((item) => item.loggedUser == userEmail && item.status==="published");
  console.log(findSurvey);
  
  setSurveys(findSurvey);
  setisLoading(false);
        }
    
},[userEmail,surv]);
//   const finds = surveys.map((item) => (console.log(item.voted)))
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


const surveyData = surveys.map((survey) => ({
  title: survey.title,
  question1:survey.question1,
  question2:survey.question2,
  question3:survey.question3,
  question1_yes: survey.question1_yes,
  question1_no: survey.question1_no,
  question2_yes: survey.question2_yes,
  question2_no: survey.question2_no,
  question3_yes: survey.question3_yes,
  question3_no: survey.question3_no,
  totalVote: survey.totalVote,
}));

// Chart.js data structure false  "#00C49F", // Green for Yes
        
const data = {
  labels: surveyData.map((survey) => survey.title),
  datasets: [
      {
          label: "Question 1 - Yes",
          data: surveyData.map((survey) => survey.question1_yes),
          backgroundColor: "#00C49F", // Green for Yes
          borderColor: "green",
          borderWidth: 1,
      },
      {
          label: "Question 1 - No",
          data: surveyData.map((survey) => survey.question1_no),
          backgroundColor:  "#FF4848", // Red for No
          borderColor: "red",
          borderWidth: 1,
      },
      {
          label: "Question 2 - Yes",
          data: surveyData.map((survey) => survey.question2_yes),
          backgroundColor: "#00C49F", // Light Green for Yes
          borderColor: "green",
          borderWidth: 2,
      },
      {
          label: "Question 2 - No",
          data: surveyData.map((survey) => survey.question2_no),
          backgroundColor: "#FF4848", // Orange for No
          borderColor: "red",
          borderWidth: 2,
      },
      {
          label: "Question 3 - Yes",
          data: surveyData.map((survey) => survey.question3_yes),
          backgroundColor: "#00C49F", // Dark Green for Yes
          borderColor: "darkgreen",
          borderWidth: 3,
      },
      {
          label: "Question 3 - No",
          data: surveyData.map((survey) => survey.question3_no),
          backgroundColor: "#FF4848", // Dark Red for No
          borderColor: "darkred",
          borderWidth: 3,
      },
      {
          label: "Total Votes",
          data: surveyData.map((survey) => survey.totalVote),
          backgroundColor: "#4682B4", // Blue for Total Votes
          borderColor: "blue",
          borderWidth: 1,
      },
  ],
};

// Options for the chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
   
    legend: {
      display: true,
      position: "top",
      align: "center",
      
     
      labels: {
        color: themeColor,  
        // font: { size: 14, weight: "bold", family: "Arial" },
        boxWidth: 20,
        // padding: 10,
        font: {
          size: 12, // Reduce legend font size
        },
        padding: 12, // Space between legend & chart
        usePointStyle: true,
      },
    },
    
      tooltip: {
        enabled: true,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      bodyColor: "#ddd",
      titleFont: { size: 14, weight: "" },
      bodyFont: { size: 12 },
      padding: 10,
      displayColors: true,
      
          callbacks: {
              // Customize tooltips with the desired format
              title: (context) => {
                const survey = surveys[context[0].dataIndex]; // Ensure we get the right data
                const datasetLabel = context[0].dataset.label;
                
                let questionText = "";
                if (datasetLabel.includes("Question 1")) {
                    questionText = `Question 1 : ${survey.question1}`;
                } else if (datasetLabel.includes("Question 2")) {
                    questionText = `Question 2 : ${survey.question2}`;
                } else if (datasetLabel.includes("Question 3")) {
                    questionText = `Question 3 : ${survey.question3}`;
                } else {
                    questionText = "Total Votes";
                }
    
                return `${survey.title}  
${questionText !== "Total Votes" ? questionText : ""}`; 
            },
    
            label: (context) => {
                // const survey = surveys[context.dataIndex]; 
                const datasetLabel = context.dataset.label;
                const value = context.raw;
    
                let voteType = "";
                if (datasetLabel.includes("Yes")) {
                    voteType = "Yes Vote";
                } else if (datasetLabel.includes("No")) {
                    voteType = "No Vote";
                } else {
                    voteType = "Total Votes";
                }
    
                return ` ${voteType} : ${value}`;
            },
          },
          
      },
     
  },
  layout: {
    padding: {
      top: 0, 
    },
  },
  scales: {
      x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Survey Titles",
            color: themeColor,
            font: { size: 16, weight: "bold", family: "serif" },
            padding: {
              top: 14,
              color:"black"  
            },
          },
         
          grid: {
            display: true,
            color: "rgba(200, 200, 200, 0.6)",
            borderWidth: 2,
          },
          ticks: {
              autoSkip: false,
              color: themeColor,
              
              maxRotation: 25,
              minRotation: 25,
          },
      },
      y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Vote Count",
            color: themeColor,
            font: { size: 14, weight: "bold",family: "serif"  },
            
          },
          grid: {
            display: true,
            color: "rgba(200, 200, 200, 0.6)",
            borderWidth: 2,
          },
          ticks: {
            
            color: themeColor,
            stepSize: 1,
            
            // maxRotation: 45,
            // minRotation: 45,
        },
      },
  },
};
if (isLoading) {
  return (
      <div className="flex justify-center items-center h-screen ">
      <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
  </div>
  );
}
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10 text-purple-700  dark:text-purple-300 font-serif">
         Survey Responses
      </h2>

      {isLoading?(<div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>):surveys.length==0? <h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">No survey has been created yet. </h3>:""}
      {/* <div className="overflow-x-auto mt-10 max-w-7xl mx-auto">
        <table className="table">
    
          <thead>
            <tr className="bg-project-400">
              <th>#</th>
              <th>Title</th>
              <th>Email</th>
              <th>Time</th>
              <th>status</th>

              <th>No Vote</th>
              <th>Yes Vote</th>
              <th>Total Vote</th>
            </tr>
          </thead>
          <tbody>
           
            {surveys.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <p >{item.title}</p>
                </td>
                <td>
                  <p>{item.voted?item.voted.map((items, index) =>
                  
                   <p  key={items._id}  >{index + 1}.{"  "}{items.email}</p>):"No Voted"}</p>
                </td>
                <td>
                  <p>{item.voted?item.voted.map((items, index) =>
                  
                   <p  key={items._id}  >{index + 1}.{"  "}{items.voteTime} </p>):"No Voted"}</p>
                </td>

                <td className={`${item.status=='published'? 'text-green-600':"text-red-600"} font-bold`}>{item.status}</td>

                <td className="font-bold">{item.noVoted}</td>
                <td className="font-bold">{item.yesVoted}</td>
                <td className="font-bold">{item.totalVote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      
      <div className="flex flex-col">
      <div className=" overflow-x-auto pb-4">
          <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden  border rounded-lg border-purple-300 dark:border-zinc-300">
                  <table className="table-auto min-w-full rounded-xl">
                      <thead>
                          <tr className="bg-purple-300 dark:bg-zinc-300">
                          <th scope="col" className="p-5 border text-center whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> # </th>
                              <th scope="col" className="p-5 border  text-center whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Title </th>
                              <th scope="col" className="p-5 border text-center whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Email </th>
                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"> Vote Time </th>
                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Status </th>
                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Question 1 (Y) </th>
                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Question 1 (N) </th>

                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Question 2 (Y) </th>

                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Question 2 (N) </th>

                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Question 3 (Y) </th>

                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Question 3 (N) </th>

                              <th scope="col" className="p-5 text-center border whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"> Total Vote </th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 ">
                      {isLoading?(<div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>):(surveys.map((item, index) => (
                          <tr key={item._id} className="bg-purple-50 dark:bg-zinc-500 transition-all duration-500 hover:bg-purple-200 dark:hover:bg-gray-600">
                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900 dark:text-white ">{index+1}</td>

                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900 dark:text-white ">{item.title}</td>
                              
                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900 dark:text-white"> {item.voted?item.voted.map((items, index) =>
                  
                  <p  key={items._id} className="" >{index + 1}.{"  "}{items.email}</p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">No user voted</h3>)} </td>
                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900 dark:text-white">{item.voted?item.voted.map((items, index) =>
                  
                  <p  key={items._id} className="" >{index + 1}.{"  "}{items.voteTime}</p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">No user voted</h3>)}</td>
                             <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                  <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-24 items-center gap-1">
                                      <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="2.5" cy="3" r="2.5" fill="#059669"></circle>
                                      </svg>
                                      <span className="font-medium text-xs text-emerald-600 ">{item.status=="published"?"Published":""}</span>
                                  </div>
                              </td>

                              
                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.question1?(<p className="text-center text-green-500 dark:text-green-400 text-base">Yes: <span className="font-semibold text-green-700 dark:text-green-200">{item.question1_yes}</span></p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">(No question 1)</h3>)}</td>

                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.question1?(<p className="text-center text-red-500 dark:text-red-400 text-base ">No: <span className="font-semibold text-red-700 dark:text-red-200">{item.question1_no}</span></p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">(No question 1)</h3>)}</td>

                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.question2?(<p className="text-center text-green-500 dark:text-green-400 text-base">Yes: <span className="font-semibold text-green-700 dark:text-green-200">{item.question2_yes}</span></p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">(No question 2)</h3>)}</td>

                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.question2?(<p className="text-center text-red-500 dark:text-red-400 text-base">No: <span className="font-semibold text-red-700 dark:text-red-200">{item.question2_no}</span></p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">(No question 2)</h3>)}</td>

                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.question3?(<p className="text-center text-green-500 dark:text-green-400 text-base">Yes: <span className="font-semibold text-green-700 dark:text-green-200">{item.question3_yes}</span></p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">(No question 3)</h3>)}</td>

                              <td className="p-5 border whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{item.question3?(<p className="text-center text-red-500 dark:text-red-400 text-base">No: <span className="font-semibold text-red-700 dark:text-red-200">{item.question3_no}</span></p>):(<h3 className="text-center text-gray-600 dark:text-gray-300">(No question 3)</h3>)}</td>

                              <td className="p-5 border whitespace-nowrap text-base leading-6 font-medium text-blue-500 dark:text-blue-400 text-center ">Total: <span className="text-blue-700 dark:text-blue-200">{item.totalVote}</span></td>
                            
                          </tr>
                      )))}
                      
                         </tbody>
                  </table>
              </div>
          </div>
      </div>
      </div>

      {isLoading?(<div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>):surveys.every(survey => survey.totalVote === 0) ? <div className="flex justify-center items-center my-16">
          <h3 className=" text-gray-600 text-lg font-medium dark:text-gray-300">No survey result.</h3>
      </div>  : (
        <div className=" ">
           <h2 className="text-2xl font-bold text-purple-600 dark:text-white mt-8 text-center font-serif">
        Survey Results
    </h2>
      <div  className="overflow-x-auto w-full  min-h-[490px] bg-white dark:bg-gray-700 p-4 mt-10 rounded-lg shadow-lg    ">
   
    <div className=" mx-auto  min-w-[900px] min-h-[400px] sm:min-h-[500px] ">
        <Bar ref={chartRef} data={data} options={{ 
            ...options, 
            maintainAspectRatio: false,  // Allows it to fit within div 
            responsive: true,
            
        }} />
    </div>
</div>
</div>
)}




      
    </div>
  );
};

export default SurveyorSurveyResult;
