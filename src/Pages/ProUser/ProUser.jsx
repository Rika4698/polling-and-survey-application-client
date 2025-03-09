import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import usePro from "../../hooks/usePro";
import useSurveyor from "../../hooks/useSurveyor";


const ProUser = () => {
  const[isAdmin] = useAdmin();
  const[isSurveyor] = useSurveyor();
  const[isPro] = usePro();
  const isDisabled = isAdmin || isSurveyor || isPro;
  // const bgColor = isDisabled ? 'bg-gray-400' : 'bg-purple-800';
  console.log(isPro);
    return (
        <div className="mt-28 md:mt-32 pb-16 bg-green-50 dark:bg-zinc-500 min-h-screen">
         <div className="pt-10">
            <h2 className="text-4xl text-center font-serif text-green-600 font-bold dark:text-green-50">Become a  pro-user</h2></div>
            {/* <div className="grid grid-cols-1 mt-14 md:grid-cols-2 gap-8 my-6 lg:ml-8">
            <div className="card  ml-6 w-[320px] min-h-[400px] md:w-[360px] lg:w-[420px] bg-gradient-to-r from-pink-300 to-blue-600 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-lime-300 text-xl">Pro user member</h2>
    <h2 className="card-title text-4xl mt-2">1 month</h2>
    <h3 className="text-4xl text-white font-bold mt-4">$100</h3>
    <h3 className="mt-2">Pro User for 1 month limited</h3>
    <div className="card-actions justify-end">
    {
        isDisabled ? (
          <div className=" btn-disabled cursor-not-allowed text-center  text-xl rounded-lg bg-slate-400 w-44 h-10 text-white mt-4  ">
           <Link to='/payment'>
      <button disabled className="mt-1">Payment Now</button>
      </Link> */}
            {/* <h3 className="text-base text-red-500 mt-6">job’s deadline is crossed </h3> */}
          {/* </div>
        ) : (
          <Link to='/payment'>
          <div className="btn text-center  text-xl rounded-lg bg-purple-800 w-44 h-10 text-white mt-4">
            <button className="">Payment Now</button>
          </div>
          </Link>
        )
      }
    </div>
  </div>
</div>

<div className="card  ml-6 w-[320px] min-h-[400px] md:w-[360px] lg:w-[420px] bg-gradient-to-r from-pink-300 to-blue-600 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-lime-300 text-xl">Pro user member</h2>
    <h2 className="card-title text-4xl mt-2">6 month</h2>
    <h3 className="text-4xl text-white font-bold mt-4">$100</h3>
    <h3 className="mt-2">Pro User for 6 month limited</h3>
    <div className="card-actions justify-end">
      {
        isDisabled ? (
          <div className=" btn-disabled cursor-not-allowed text-center  text-xl rounded-lg bg-slate-400 w-44 h-10 text-white mt-4  ">
           <Link to='/payment'>
      <button disabled className="mt-1">Payment Now</button>
      </Link> */}
            {/* <h3 className="text-base text-red-500 mt-6">job’s deadline is crossed </h3> */}
          {/* </div> */}
       {/* ) : (
      //     <Link to='/payment'>
      //     <div className="btn text-center  text-xl rounded-lg bg-purple-800 w-44 h-10 text-white mt-4">
      //       <button className="">Payment Now</button>
      //     </div>
      //     </Link>
      //   )
      // } */}
        {/* <Link to='/payment'>
      <button className={`btn text-white text-lg mt-8 ${bgColor}`}
        disabled={isDisabled} style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }} >Payment Now</button></Link> */}
    {/* </div>
  </div>
</div>

            </div> */}









            <div className="space-y-6 lg:px-8 mt-20 text-center group overflow-x-hidden min-h-screen">
  <div className="mx-6 lg:mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:pb-10 ">
    

    <div className="  pricing-wrapper w-full relative rounded-2xl bg-gradient-to-t from-blue-300 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]  dark:from-gray-700 dark:to-gray-200">
      <div className="relative pricing-cloud rounded-2xl p-8 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-between will-change-transform">
        <div>
          <h3 className="plan-title font-semibold text-2xl text-gray-800 dark:text-slate-950">Pro user member</h3>
          <span className="plan-title text-md font-normal  relative top-[-2px] m-0 text-blue-600 dark:text-blue-800 ">1 month</span>
          <p className="plan-price text-4xl my-4 font-extrabold text-indigo-500 dark:text-indigo-800">$100</p>
          <p className="text-gray-800  mt-4 text-balance ">Pro User member for 1 month limited.</p>
        </div>
        {
        isDisabled ? (
          <div className=" disabled cursor-not-allowed border-none py-2.5 px-5 text-lg font-medium rounded-md w-full transition-colors duration-300 mt-6 ring-2 bg-slate-500  text-white ring-slate-600 dark:bg-slate-400 ">
           <Link to='/payment'>
      <button disabled className="mt-1">Payment Now</button>
      </Link>
           
          </div>
        ) : (
          <Link to='/payment'>
          <div className="checkout-button flex items-center justify-center bg-purple-700 text-white border-none py-2.5 px-5 text-lg font-medium rounded-md w-full hover:bg-purple-500 transition-colors duration-300 mt-6 ring-2 ring-purple-900 dark:bg-purple-600 dark:hover:bg-purple-700">
            <button className="">Payment Now</button>
          </div>
          </Link>
        )
      }
       
        <svg xmlns="http://www.w3.org/2000/svg" className="iconify absolute top-8 left-8 text-[500px] z-[-1] pointer-events-none text-blue-100 transition duration-1000 delay-200 group-hover:-translate-y-8 group-hover:-translate-x-8 iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" fillRule="evenodd" d="M11 4.25a6.75 6.75 0 0 0-6.624 5.448A5.25 5.25 0 0 0 6.5 19.75h11a5.25 5.25 0 0 0 .02-10.5a6.75 6.75 0 0 0-6.52-5m3.53 7.28a.75.75 0 1 0-1.06-1.06L10 13.94l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>

   
   
   
   
   

    <div className="pricing-wrapper w-full relative rounded-2xl bg-gradient-to-t from-indigo-600 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)] dark:from-zinc-900 dark:to-zinc-200">
      <div className="relative bg-white dark:bg-zinc-400 rounded-2xl p-8 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-between will-change-transform">
        <div>
        <h2 className="plan-title font-semibold text-2xl text-gray-800 dark:text-slate-950">Pro user member</h2>
        <span className="plan-title text-md font-normal  relative top-[-2px] m-0 text-blue-600 dark:text-blue-800 ">6 month</span>
          <p className="plan-price text-4xl my-4 font-extrabold text-indigo-500 dark:text-indigo-800">$100</p>
          <p className="text-gray-800  mt-4 text-balance ">Pro User member for 6 month limited.</p>
        </div>
        {
        isDisabled ? (
          <div className=" disabled cursor-not-allowed border-none py-2.5 px-5 text-lg font-medium rounded-md w-full transition-colors duration-300 mt-6 ring-2 bg-slate-500  text-white ring-slate-600 dark:bg-slate-400  ">
           <Link to='/payment'>
      <button disabled className="mt-1">Payment Now</button>
      </Link>
           
          </div>
        ) : (
          <Link to='/payment'>
          <div className="checkout-button flex items-center justify-center bg-purple-700 text-white border-none py-2.5 px-5 text-lg font-medium rounded-md w-full hover:bg-purple-500 transition-colors duration-300 mt-6 ring-2 ring-purple-900 dark:bg-purple-600 dark:hover:bg-purple-700">
            <button className="">Payment Now</button>
          </div>
          </Link>
        )
      }
        
        <svg xmlns="http://www.w3.org/2000/svg" className="iconify absolute top-8 left-8 text-[500px] z-[-1] pointer-events-none text-indigo-100 transition duration-1000 delay-1000 group-hover:-translate-y-8 group-hover:-translate-x-8 iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22 13.478V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.522l.553.277a21 21 0 0 0 18.897-.002zM14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447.724a19 19 0 0 1-16.726.186l-.647-.32l-1.18-.59V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm-2 8a1 1 0 0 0-1 1a1 1 0 1 0 2 .01c0-.562-.448-1.01-1-1.01m2-6h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1" />
        </svg>
      </div>
    </div>



  </div>
</div>




        </div>
    );
};

export default ProUser;