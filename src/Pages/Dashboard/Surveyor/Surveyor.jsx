import { useForm } from "react-hook-form"
const Surveyor = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = (data) =>{ 
    console.log(data)
  };
     
      return (
          <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex mb-8">
      <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Title:  <span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <input type="text" placeholder="Title" {...register("title",{ required: true })}
   className="input input-bordered w-full" />
  
</div>
      <div className="form-control md:w-1/2 ml-4 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Description:<span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <input type="text" placeholder="Description" {...register("description",{ required: true })}
   className="input input-bordered w-full" />
  
</div>
</div>
      <div className="md:flex mb-8">
      <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Category:<span className="text-red-500 text-lg">*</span></span>
    
  </label>
  <select defaultValue='default' {...register("category")}
       className="select select-bordered w-full " >
  <option disabled value='default'>Select a category</option>
  <option value="education">Education</option>
        <option value="technology">Technology</option>
        <option value="market">Marketing</option>
        <option value="health">Health Care</option>
        <option value="business">Business</option>
</select>
  
</div>
<div className="form-control md:w-1/2 ml-4 ">
<label className="label">
    <span className="label-text font-semibold text-base">Category Image:</span>
    
  </label>
     <input {...register("image")} type="file" className="file-input file-input-primary w-full max-w-xs" />
     </div>
</div>
<div className="md:flex mb-8">
      <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Question 1:</span>
    
  </label>
  <input type="text" placeholder="Question" {...register("question1")}
   className="input input-bordered w-full" />
  
</div>
      <div className="form-control md:w-1/2 ml-4 ">
  <label className="label">
    <span className="label-text font-semibold text-base">Question 2:</span>
    
  </label>
  <input type="text" placeholder="Question" {...register("question2")}
   className="input input-bordered w-full" />
  
</div>
</div>
<div className="md:flex  mb-8">
<div className="form-control md:w-1/2  ">
  <label className="label">
    <span className="label-text font-semibold text-base">Question 3:</span>
    
  </label>
  <input type="text" placeholder="Question" {...register("question3")}
   className="input input-bordered w-full" />
  
</div>
      <div className="form-control md:w-1/2 ml-6 ">
  <label className="label">
    <span className="label-text font-semibold text-lg">Options:</span>
    
  </label>
  <div className="flex items-center">
  <input type="checkbox" id='yes' value='yes' {...register("options",{ required: true })}
    />
    <label className="label" htmlFor="yes">
    <span className="label-text font-semibold text-lg ml-2 mr-4">Yes</span>
    
  </label>
  <input type="checkbox" id='no' value='no' {...register("options",{ required: true })}
    />
    <label className="label" htmlFor="no">
    <span className="label-text ml-2 font-semibold text-lg">No</span>
    
  </label>
  </div>
  
  
</div>
    
   
</div>
     
      <button type="submit" className="btn bg-purple-500 text-white text-lg">Save</button>
    </form>
              
          </div>
      );
  };

export default Surveyor;