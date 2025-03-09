/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import moment from 'moment';
import useAdmin from "../../hooks/useAdmin";
import usePro from "../../hooks/usePro";
import useSurveyor from "../../hooks/useSurveyor";
// import useUsers from "../../hooks/useUsers";



const CheckoutForm = () => {
  // const{_id,email}= item ||{};
  const[isAdmin] = useAdmin();
  const[isSurveyor] = useSurveyor();
  const[isPro] = usePro();
  const isDisabled = isAdmin|| isSurveyor || isPro;
  // console.log(email);
    const[error,setError] = useState('');
    const[clientSecret,setClientSecret] = useState('');
    const[transactionId,setTransactionId] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false); // NEW: Track payment status
    const{user} = useAuth();
    // const find = email=== user.email;
    // console.log(find);
    // const[users,refetch] = useUsers();
    const userEmail = user.email;
    // console.log(userEmail);
    const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const totalPrice = 100;


  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price: totalPrice})
    .then(res=>{
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
  })

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
           
            return;
          }


          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

         

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });


          if (error) {
            console.log('Payment error', error);
            setError(error.message);
          } else {
            console.log('[Payment method', paymentMethod);
            setError('');
          }
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email:user?.email||'anonymous',
                  name: user?.displayName||'anonymous',
                },
              },
            },
          );

          if(confirmError){
            console.log('confirm error');
          }
          else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
              console.log('transaction id', paymentIntent.id);
              setTransactionId(paymentIntent.id);
              setPaymentSuccess(true); // NEW: Mark payment as successful

              const payment = {
                email:user.email,
                name:user.displayName,
                price:totalPrice,
                transactionId:paymentIntent.id,
                date:moment().format('MMMM Do YYYY, h:mm:ss a'),

              }
              const res = await axiosSecure.post('/payment',payment);
              console.log('payment saved',res.data);
              if (res.data.insertedId) {
                // console.log(res.data?.paymentResult?.insertedId);
                swal({
                    position: "top-end",
                    icon: "success",
                    title: "Payment done.",
                    button: true,
                    timer: 3600
                });
                  // Upgrade user to Pro after successful payment
        handleMakePro(userEmail);
        card.clear();
                // navigate('/dashboard/paymentHistory')
              }
               else  {
                
                swal({
                    icon: 'error',
                    title: 'Opps!',
                    text: 'Already Exist in the Cart.',
                })
            }

            }
          }
    };


    const handleMakePro = userEmail =>{
      // const findUser = email.filter((item)=> console.log(item));
      // console.log(findUser);
     
     
      axiosSecure.patch(`/user/pro/${userEmail}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              // refetch();
              swal({
                  position: "top-end",
                  icon: "success",
                  title: "Now you are a pro member!",
                  button: true,
                  timer: 2500
                });
          }
      })
  }
    return (
        <div>
            <form onSubmit={handleSubmit} >
            <CardElement className="mx- mt-12"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    <div className="border-b border-light-2 border w-full mt-10 mb-5"></div>
     {
        isDisabled || paymentSuccess ? (
          <div className=" disabled cursor-not-allowed text-center  text-xl rounded-lg bg-slate-400 text-white   mt-8   inline-flex items-center justify-center  h-10 px-5  font-medium ring-2 ring-slate-800   w-56 mx-[70px] sm:w-full sm:mx-auto ">
           
      <button disabled className="mt-1">Pay</button>
     
            {/* <h3 className="text-base text-red-500 mt-6">job’s deadline is crossed </h3> */}
          </div>
        ) : (
         
          <button className="  mt-8  text-xl inline-flex items-center justify-center bg-blue-600 text-white h-10 px-5 rounded-lg font-medium ring-2 ring-blue-900  hover:bg-blue-400 w-56 mx-[70px] sm:w-full sm:mx-auto  " 
          disabled={!stripe||!clientSecret|| paymentSuccess} type="submit" >
        Pay
      </button>
      
         
        )
      }
      {/* <button onClick={()=>handleMakePro(userEmail)} className="btn bg-blue-500 text-white ml-8 mt-14" disabled={!stripe||!clientSecret} type="submit" >  4242 4242 4242 4242  12 / 45  121  45121
        Pay
      </button> */}
      <p className="text-red-600 text-center my-4 text-base">{error}</p>
      <div>
      {transactionId && <p className="text-green-600 mx-6 mb-4 text-base text-center font-medium">Your transaction id: {transactionId}</p> }</div>
            </form>
        </div>
    );
};

export default CheckoutForm;