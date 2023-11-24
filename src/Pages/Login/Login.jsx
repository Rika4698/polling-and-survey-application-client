import { Link } from "react-router-dom";


const Login = () => {
    
    return (
        
        <div className="">
           <div className="max-w-screen-md mx-auto pt-14 bg-violet-300 shadow-2xl lg:my-8 xl:max-w-screen-lg">
  <div className="hero-content flex-col lg:flex-row">
    <div className="hidden lg:flex lg:w-2/5 xl:w-2/5">
      
     <img src="https://i.ibb.co/8BKdZXc/Security-On-amico.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm  bg-violet-300">
      <form  className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-green-300 to-blue-400 text-emerald-950 text-lg">Login</button>
        </div>
        <h3 className="text-center font-bold mt-4">Do not have an account? <Link to="/register" className="text-blue-700 font-extrabold">Registration</Link></h3>
       
      </form>
      <button   className="  flex gap-2 bg-blue-200 rounded-full w-56 mx-10 mb-6  outline hover:outline-4  outline-slate-100">
            <img className="rounded-full w-14 " src="https://i.ibb.co/41Gt5P3/178-1780776-googles-new-dataset-search-aims-to-assist-researchers.jpg" alt="" />
            <h3 className="mt-3 text-base text-blue-600 font-semibold">Sign in with Google </h3>
        </button>
    </div>
  </div>
</div>  
        </div>
       
    );
};

export default Login;