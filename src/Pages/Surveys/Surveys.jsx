import { useEffect, useState } from "react";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import useSurveyList from "../../hooks/useSurveyList";
// import { BiLike,BiDislike } from "react-icons/bi";
// import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { LuVote } from "react-icons/lu";

const Surveys = () => {
    // const axiosPublic = useAxiosPublic();
    
    const[survey,isLoading,refetch,isFetching] = useSurveyList();
    const [surveys, setSurveys] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [filteredSurveys, setFilteredSurveys] = useState([]);
    const [searchText, setSearchText] = useState('');
//   const [searchTitle, setSearchTitle] = useState('');
//   const [searchCategory, setSearchCategory] = useState('');

  // useEffect(() => {
  //        const find = survey.filter((item)=>item.status=='published');
  //        setSurveys(find);

  // }, [survey]);

  useEffect(() => {
    const find = survey.filter((item) => item.status === 'published');
    setSurveys(find);
    
      refetch();
       
}, [survey]);



const filterSurveys = (text) => {
    const filtered = surveys.filter(survey =>
        survey.title.toLowerCase().includes(text.toLowerCase()) ||
        survey.category.toLowerCase().includes(text.toLowerCase()) ||
        survey.totalVote.toString().includes(text)
    );
    setFilteredSurveys(filtered);
};



useEffect(() => {
    filterSurveys(searchText);
    if (searchText) {
          // Data has been fetched
      }
}, [searchText, surveys]);




const handleSearch = () => {
    filterSurveys(searchText);
};



const handleSortByTotalVote = () => {
    const sortedSurveys = [...filteredSurveys].sort((a, b) => b.totalVote - a.totalVote);
    setFilteredSurveys(sortedSurveys);
};




//   const fetchSurveys = async () => {
//     try {
//       const response = await axiosPublic.get('/survey');
//       console.log(response.data);
//       setSurveys(response.data);
//     } catch (error) {
//       console.error('Error fetching surveys:', error);
//     }
//   };

   
  //       useEffect(() => {
  //   const filtered = surveys.filter(survey =>
  //     survey.title.toLowerCase().includes(searchText.toLowerCase()) ||
  //     survey.category.toLowerCase().includes(searchText.toLowerCase()) ||
  //     survey.totalVote.toString().includes(searchText)
  //   );
  //   setFilteredSurveys(filtered);
  // }, [searchText, surveys]);
 

//   const handleSearch = async () => {
//     if (searchTitle) {
//       try {
//         const response = await axiosPublic.get(`/survey/title/${searchTitle}`);
//        console.log(response.data);
//         // setSurveys(data);
//       } catch (error) {
//         console.error('Error fetching surveys by title:', error);
//       }
//     } else if (searchCategory) {
//       try {
//         const response = await axiosPublic.get(`/survey/category/${searchCategory}`);
//         console.log(response.data);
//         // setSurveys(data);
//       } catch (error) {
//         console.error('Error fetching surveys by category:', error);
//       }
//     }
//   };

  //       const handleSortByTotalVote = async () => {
  //   try {
  //     const response = await axiosPublic.get('/survey/sortByTotalVote');
  //     console.log(response.data);
  //     setFilteredSurveys(response.data);
  //   } catch (error) {
  //     console.error('Error sorting surveys by totalVote:', error);
  //   }
  // };
//   useEffect(() => {
//     axios.get('http://localhost:3000/surveys', { params: filter })
//       .then(response => {
//         setSurveys(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching surveys:', error);
//       });
//   }, [filter]);.length
// console.log(surveys);
// console.log(filteredSurveys[2].comments.length);
if (isLoading || isFetching ) {
  return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-700">
      <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
  </div>
  );
}
// console.log(filteredSurveys.length);
    return (
        <div className="mt-20  bg-white dark:bg-zinc-700 ">
          <div className="pt-14 mb-12">
             <h1 className="text-center font-semibold font-serif text-5xl   text-purple-700 dark:text-purple-400">All Surveys</h1> 
             </div>
      {/* <div className="text-center">
      <input className="w-80 h-10 text-center border-2 border-gray-200 bg-slate-100"
        type="text"
        placeholder="Search by title, category"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      /> */}
        {/* <input onClick={handleSearch}
          type="text"
          placeholder="Search by category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button> */}
        {/* <button onClick={handleSortByTotalVote} className="ml-6 mt-4 btn text-lg text-white bg-green-600">Sort by  Vote</button>
      </div> */}


       <div className="flex flex-col md:flex-row gap-4 items-center justify-center">


     
    <div className="flex">
        <input type="text" placeholder="Search by title, category"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        
			className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-purple-500 focus:outline-none focus:border-purple-500"
			/>
        <button   onSubmit={handleSearch}  className="bg-purple-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    

    <button onClick={handleSortByTotalVote} className="px-4 py-2 border-b-4 border border-blue-700 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-200 rounded-lg text-lg font-medium font-serif dark:border-blue-500 dark:hover:border-blue-700">Sort by Vote</button>
    {/* <select id="pricingType" name="pricingType"
		class=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">All</option>
		<option value="Freemium">Freemium</option>
		<option value="Free">Free</option>
		<option value="Paid">Paid</option>
	</select> */}

</div>

      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-12">
        {filteredSurveys.map((survey) => (
          <div key={survey._id} >
            <div className=" rounded-tl-[80px] rounded-br-[80px] rounded-tr-none rounded-bl-none bg-sky-100 w-[330px] md:min-h-[600px] md:w-[350px] lg:w-[450px] xl:w-[400px]  shadow-xl ml-6 my-6 md:ml-4 lg:ml-8">
  <figure >
    <img className="rounded-tl-[80px] rounded-tr-none w-[330px] h-36 md:w-[350px] md:h-40 lg:w-[450px] lg:h-48 xl:w-[400px]" src={survey.image} alt=""  />
  </figure>
  <div className="card-body  rounded-bl-none rounded-br-3xl items-center text-center">
    <h2 className="card-title text-emerald-800 font-bold ">Title: {survey.title}</h2>
    <h3 className="mt-2">Description: {survey.description}</h3>
    <div className="flex gap-6 mt-2">
        <h3 className="text-pink-700 font-semibold">Category: {survey.category}</h3>
        <h3 className="text-red-700 font-bold">Total Vote: {survey.totalVote}</h3>
    </div>
    <div className=" flex gap-14 lg:gap-16 mt-4" >
        <button className="flex gap-2"><BiLike className="text-2xl "></BiLike> <span className="text-green-800 font-bold">{survey.liked}</span></button>
        <button className="flex gap-2 "><BiDislike className="text-2xl "></BiDislike> <span className="text-red-600 font-bold -mt-1">{survey.disliked}</span></button>
        <button className="flex gap-2 mt-0"><FaRegCommentAlt className="text-xl"></FaRegCommentAlt><span className="text-blue-700 font-bold -mt-1 ">{survey.comments? survey.comments.length: 0}</span></button>
    </div>
    <div className="card-actions">
    <Link to={`/details/${survey._id}`}>
      <button className="btn bg-violet-700 text-white text-lg mt-8 ">Survey Details</button>
      </Link>
    </div>
  </div>
</div>
          </div>
        ))}
      </div> */}

      
      <div className="container mx-auto p-5 mt-12 pb-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {isFetching? (<div className="flex justify-center items-center h-screen ">
      <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
  </div>):filteredSurveys.length > 0 ? (filteredSurveys.map((survey) => (
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
              <div className="flex justify-center items-center gap-8 lg:gap-6 xl:gap-10 mt-4">
               
                  <div title="Like" className="flex items-center space-x-1 text-gray-600">
                    <ThumbsUp  size={19} className="text-green-500 dark:text-green-400 dark:stroke-[3] " />
                    <span className="font-medium dark:text-white ">{survey.liked}</span>
                  </div>
                  <div title="Dislike" className="flex items-center space-x-1 text-gray-600">
                    <ThumbsDown size={19} className="text-red-500 dark:text-red-400 dark:stroke-[3] mt-1" />
                    <span className="font-medium dark:text-white ">{survey.disliked}</span>
                  </div>
                  <div title="Comments" className="flex items-center space-x-1 text-gray-600">
                    <MessageCircle size={19} className="text-blue-500 dark:text-blue-400 dark:stroke-[3]" />
                    <span className="font-medium dark:text-white ">{survey.comments? survey.comments.length : 0}</span>
                  </div>
               
                <div title="Total Vote" className="flex items-center space-x-1 text-gray-700 ">
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
        ))):""}
      </div>
      {isFetching? (<div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-700">
      <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
  </div>):filteredSurveys.length == 0?(<h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">No survey has been created yet. </h3>):""}
      </div>


        </div>
    );
};

export default Surveys;