import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllPayment = () => {
     
    const axiosSecure = useAxiosSecure();
    const { data: allPay = [],isFetching} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment' );
            return res.data;
        }
    })

    if ( isFetching) {
        return (
            <div className="flex justify-center items-center h-screen ">
            <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
        </div>
        );
      }
    return (
        <div>
            <div className=" my-4">
                <h2 className="text-4xl text-center text-blue-800 dark:text-blue-300 font-serif font-bold">All Payments </h2>
                <h2 className="text-lg   text-sky-600 dark:text-sky-400 font-serif font-bold mt-6 text-center md:text-left">Total User Payment: {allPay.length}</h2>
            </div>
          

{allPay.length==0? <h3 className="text-center my-12 min-h-screen text-lg font-medium text-slate-700 dark:text-slate-300">No user has made a payment. </h3>:""}

<div className="overflow-x-auto  my-8 border ">

     
   
        <table className="min-w-full divide-y  bg-blue-300 dark:bg-blue-200 divide-gray-200 ">
    <thead>
        <tr className="">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">User Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Transaction Id</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Date</th>
           
        </tr>
    </thead>
    <tbody className="bg-blue-50 dark:bg-slate-600 divide-y divide-gray-200 font-semibold ">
    {isFetching?  (<tr>
      <td colSpan="9" className="text-center py-10">
        <div className="flex justify-center items-center ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
        </div>
      </td>
    </tr>)
        : allPay.length > 0?(allPay.map((item, index) => (
        <tr key={item._id}>
       
        <td  className="px-6 py-4 whitespace-nowrap text-black dark:text-white">{index+1}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white">{item.name}</td>
       
            <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white"> 
                  
                {item.email}</td>

            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold  rounded-full bg-blue-100 text-blue-800">{item.transactionId}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-green-700 dark:text-green-400">${item.price}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white">{item.date}</td>
            
           
        </tr>
        ))) : "" }
        
    </tbody>
</table>
</div>
        </div>
    );
};

export default AllPayment;