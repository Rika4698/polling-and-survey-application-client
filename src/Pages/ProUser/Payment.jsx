import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
// import { useLoaderData } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import { useEffect, useState } from "react";




const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    // const data = useLoaderData();
    // const{user}=useAuth();
    // const userEmail = user.email;
    
    // const[check, setCheck]= useState([]);

    // useEffect(() => {
        
    //         const findSurvey = data.filter((item) => item.email == userEmail);
    //       console.log(findSurvey);
    //       setCheck(findSurvey);
    //     },[userEmail,data]);

    // console.log(user);
    return (
        <div >
            <div className="mt-28 md:mt-32 pb-32 mx-auto bg-white dark:bg-slate-500 min-h-[150px]">
                {/* {check.map((item)=> */}
            <Elements  stripe={stripePromise} >
                <h3 className="text-5xl text-lime-600 text-center underline font-bold pt-8 font-serif dark:text-lime-100 ">Payment</h3>
              
             
                
               

                <div className="relative xs:px-0  sm:px-6 rounded-lg ring-2 ring-sky-600 dark:ring-zinc-600 bg-gray-50 dark:bg-gray-300 w-ful md:max-w-xl mt-10 md:mb-0 mx-3 md:mx-auto overflow-x-hidden" >
   
                <CheckoutForm></CheckoutForm> 
   
   
    
    
   
</div>
              
              {/* <CheckoutForm></CheckoutForm> */}
             </Elements>  
            {/* //  )} */}

            </div>


           
        </div>
    );
};

export default Payment;