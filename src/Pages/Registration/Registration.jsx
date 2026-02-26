import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useContext(AuthContext);
    const {createUser} = useContext(AuthContext);
    // const {userProfile} = useContext(AuthContext);
   
    const handleGoogleAccount = () => {
        googleSignIn().then ((result) => {
            console.log(result.user);
            const userInfo = {
                name:result.user.displayName,
                email:result.user.email
            }
            // console.log(userInfo);
            axiosPublic.post('/user', userInfo)
            
                    .then(res => {
                        
                            console.log(res.data);
                           
                       
                    })
                    swal({
        
                      text: "Google login successfully",
                      icon: "success",
                      timer: 1600,
                      
                    })
            navigate(location?.state?location.state :'/' )
        })
        .catch(error => {
            console.log(error);
        })
        
        
    };
    const[errormessage, setErrorMessage] =useState("");
    const handleRegisterForm = e => {
        e.preventDefault ();
        // console.log(e.currentTarget);
        // const Email = e.target.email.value;
        // console.log(Email);
        const form = new FormData(e.currentTarget);
        // console.log(form.get("photo"));
        // console.log(form.get("name"));
        const displayName = form.get("name");
        const photoURL = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        if(password.length <5 )
        {
            
            setErrorMessage("Password must contains at least 5 character")
            
            return;
        }
        
        else if(!/[A-Z]/.test(password)){
            setErrorMessage("Password must contains at least 1 uppercase letter.")
            return;
    
        }
        else if(!/[#?!@$%^&*-]/.test(password))
        {
            setErrorMessage("Password must contains at least 1 special character.")
            return;
        }
        else{
            setErrorMessage("");
            if(email)
            {
                createUser(displayName,photoURL,email,password)
                .then ((result) => {
                    console.log(result.user.displayName);
                    
                        const userInfo = {
                            name:result.user.displayName,
                            email:result.user.email
                        }
                        // console.log(userInfo);
                        axiosPublic.post('/user', userInfo)
                         
                                .then(res => {
                                    if (res.data.insertedId) {
                                        console.log('user added to the database')
                                        swal({
                    
                                            text: "Registration done successfully",
                                            icon: "success",
                                            timer: 1600,
                                          })
                                          navigate("/login");
                                    }
                                })
                   
                   
                    
                })
               
                .catch(error => {
                    console.log(error);
                  
                })
            }
        }
       
        e.target.reset() 
    };
    return (
       <div className="min-h-screen flex items-center justify-center 
bg-gradient-to-br from-violet-200 to-orange-200 
dark:from-gray-900 dark:to-gray-800
px-4 transition-colors duration-300">

  <div className="w-full max-w-5xl 
  bg-white dark:bg-gray-900 
  shadow-2xl rounded-2xl overflow-hidden 
  grid grid-cols-1 lg:grid-cols-2
  transition-colors duration-300 my-8">

    {/* Left Image Section */}
    <div className="hidden lg:flex items-center justify-center 
    bg-orange-100 dark:bg-gray-800 
    p-8 transition-colors duration-300">
      <img
        src="https://i.ibb.co/0G6QjbV/Forms-amico.png"
        alt="Register Illustration"
        className="w-full max-w-md"
      />
    </div>

    {/* Right Form Section */}
    <div className="p-8">

      <div className="flex justify-start mb-4">
  <Link
    to="/"
    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 
    hover:text-purple-600 dark:hover:text-purple-400 transition font-semibold"
  >
    ← Back Home
  </Link>
</div>

      <h1 className="text-3xl font-bold text-center 
      text-purple-600 dark:text-purple-400 mb-2">
        Registration Form
      </h1>

      <p className="text-center 
      text-gray-600 dark:text-gray-300 mb-6">
        Enter your details to create an account
      </p>

      <form onSubmit={handleRegisterForm} className="space-y-4">

        <div>
          <label className="font-semibold 
          text-gray-700 dark:text-gray-300">
            User Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="input input-bordered w-full mt-1
            bg-white dark:bg-gray-800
            text-black dark:text-white
            border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="font-semibold 
          text-gray-700 dark:text-gray-300">
            Photo URL
          </label>
          <input
            type="url"
            name="photo"
            required
            placeholder="Enter photo URL"
            className="input input-bordered w-full mt-1
            bg-white dark:bg-gray-800
            text-black dark:text-white
            border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="font-semibold 
          text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="input input-bordered w-full mt-1
            bg-white dark:bg-gray-800
            text-black dark:text-white
            border-gray-300 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="font-semibold 
          text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            className="input input-bordered w-full mt-1
            bg-white dark:bg-gray-800
            text-black dark:text-white
            border-gray-300 dark:border-gray-600"
          />
        </div>

        {errormessage && (
          <p className="text-red-600 text-sm text-center">
            {errormessage}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2 rounded-lg 
          bg-gradient-to-r from-purple-500 to-orange-500
          dark:from-purple-600 dark:to-orange-600
          text-white font-semibold 
          hover:scale-105 transition">
          Registration
        </button>
      </form>

      <p className="text-center mt-4 
      text-gray-700 dark:text-gray-300">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 dark:text-blue-400 
          font-bold hover:underline">
          Login
        </Link>
      </p>

      {/* Google Register */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleGoogleAccount}
          className="flex items-center gap-3 
          bg-gray-100 dark:bg-gray-700
          px-4 py-2 rounded-full shadow 
          hover:shadow-lg transition">
          <img
            src="https://i.ibb.co/41Gt5P3/178-1780776-googles-new-dataset-search-aims-to-assist-researchers.jpg"
            alt="Google"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-semibold 
          text-gray-700 dark:text-white">
            Sign up with Google
          </span>
        </button>
      </div>

    </div>
  </div>
</div>
    );
};

export default Registration;