
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Login = () => {
    const location = useLocation();
  const navigate = useNavigate();

  const {signIn} = useContext(AuthContext);
  const {googleSignIn} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
 
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
      
  };
  const[errormessage, setErrorMessage] =useState("");

  
  const handleLogin = e =>{
    e.preventDefault ();
    const form = new FormData(e.currentTarget);
   
    const email = form.get("email");
    console.log(form);
    const password = form.get("password");
    setErrorMessage("");

if((email,password))
{
signIn(email,password)
.then ((result) => {
    console.log(result.user);
    swal({
        
        text: "Login successfully",
        icon: "success",
        timer: 1600,
        
      })
      navigate(location?.state?location.state :'/' )
})
.catch((err) => {
    console.log(err);
    setErrorMessage("Email and Password does not match!");
    
 
    swal({
        
        text: "Invalied Login",
        icon: "warning",
        
      })
      
});

}

e.target.reset()
}
    
const handleLoginWithCredentials = (email, password) => {
  setErrorMessage("");

  signIn(email, password)
    .then((result) => {
      console.log(result.user);
      swal({
        text: "Login successfully",
        icon: "success",
        timer: 1600,
      });

      navigate(location?.state ? location.state : "/");
    })
    .catch(() => {
      setErrorMessage("Email and Password does not match!");

      swal({
        text: "Invalid Login",
        icon: "warning",
      });
    });
};
    return (
        
   <div className="min-h-screen flex items-center justify-center 
bg-gradient-to-br from-violet-200 to-violet-400 
dark:from-gray-900 dark:to-gray-800 
px-4 transition-colors duration-300">

  <div className="w-full max-w-5xl 
  bg-white dark:bg-gray-900 
  shadow-2xl rounded-2xl overflow-hidden 
  grid grid-cols-1 lg:grid-cols-2 transition-colors duration-300 my-8">

    {/* Left Image Section */}
    <div className="hidden lg:flex items-center justify-center 
    bg-violet-100 dark:bg-gray-800 p-8 transition-colors duration-300">
      <img
        src="https://i.ibb.co/8BKdZXc/Security-On-amico.png"
        alt="Login Illustration"
        className="w-full max-w-md"
      />
    </div>

    {/* Right Form Section */}
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6 
      text-gray-800 dark:text-white transition-colors duration-300">
        Login Now
      </h1>

      <form onSubmit={handleLogin} className="space-y-4">

        <div>
          <label className="font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="input input-bordered w-full mt-1 
            bg-white dark:bg-gray-800 
            text-black dark:text-white 
            border-gray-300 dark:border-gray-600"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="input input-bordered w-full mt-1 
            bg-white dark:bg-gray-800 
            text-black dark:text-white 
            border-gray-300 dark:border-gray-600"
            placeholder="Enter your password"
          />
          <p className="text-red-600 text-sm mt-1">{errormessage}</p>
        </div>

        <button className="w-full py-2 rounded-lg 
        bg-gradient-to-r from-green-400 to-blue-600 
        dark:from-green-500 dark:to-blue-700 
        text-white font-semibold 
        hover:scale-105 transition">
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
        Do not have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
        >
          Register
        </Link>
      </p>

      {/* Demo Buttons */}
      <div className="mt-6 space-y-3">
        <button
          onClick={() => handleLoginWithCredentials("person12@gmail.com", "*Person4")}
          className="w-full bg-sky-600 dark:bg-sky-700 
          text-white py-2 rounded-lg 
          hover:bg-sky-700 dark:hover:bg-sky-800 transition">
          Demo Login as Admin
        </button>

        <button
          onClick={() => handleLoginWithCredentials("person@gmail.com", "!Abcdefg")}
          className="w-full bg-purple-600 dark:bg-purple-700 
          text-white py-2 rounded-lg 
          hover:bg-purple-700 dark:hover:bg-purple-800 transition">
          Demo Login as Surveyor
        </button>

        {/* <button
          onClick={() => handleLoginWithCredentials("Karim12@gmail.com", "*Karim12")}
          className="w-full bg-green-600 dark:bg-green-700 
          text-white py-2 rounded-lg 
          hover:bg-green-700 dark:hover:bg-green-800 transition">
          Demo Login as Receiver
        </button> */}
      </div>

      {/* Google Login */}
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
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
       
    );
};

export default Login;