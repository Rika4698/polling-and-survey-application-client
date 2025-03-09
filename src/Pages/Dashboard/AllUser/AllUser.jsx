// import { useQuery } from "@tanstack/react-query";
// import { FaTrash} from "react-icons/fa";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import { useState } from "react";
// // import { useLoaderData } from "react-router-dom";
// import { useEffect } from "react";
// // import useAuth from "../../../hooks/useAuth";

// const AllUser = () => {
//     const [selectedRole, setSelectedRole] = useState('');
//     const [filteredUsers, setFilteredUsers] = useState([]);
//     // const{user}=useAuth();
//     // const paymentUser = useLoaderData();
//     const axiosSecure = useAxiosSecure();
//     const { data: allUser = [], refetch, isFetching} = useQuery({
//         queryKey: ['user'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/user'
            
//             );
//             return res.data;
//         }
//     })

//     useEffect(() => {
//         if (selectedRole === 'pro-user') {
//             const filtered = allUser.filter(user => user.role === 'pro-user');
//             setFilteredUsers(filtered);
//           } else if (selectedRole === 'surveyor') {
//             const filtered = allUser.filter(user => user.role === 'surveyor');
//             setFilteredUsers(filtered);
//           } else if (selectedRole === 'admin') {
//             const filtered = allUser.filter(user => user.role === 'admin');
//             setFilteredUsers(filtered);
//           } else if (selectedRole === 'normal') {
//             const filtered = allUser.filter(user => !user.role); // Users without a role
//             setFilteredUsers(filtered);
//           } else {
//             setFilteredUsers(allUser);
//           }
//       }, [selectedRole, allUser]);
    

//     //  if(pay==pro){
//     //     axiosSecure.patch(`/user/pro/${id}`)
//     //     .then(res =>{
//     //         console.log(res.data)
//     //         if(res.data.modifiedCount > 0){
//     //             refetch();
//     //             Swal.fire({
//     //                 position: "top-end",
//     //                 icon: "success",
//     //                 title: "Now you are a pro member!",
//     //                 showConfirmButton: false,
//     //                 timer: 1500
//     //               });
//     //         }
//     //     })
//     //  }
    
//     // useEffect(() => {
        
//     //     const findSurvey = survey.filter((item) => item.loggedUser == userEmail);
//     //   console.log(findSurvey);
//     // },[userEmail,survey]);

//     const [selectRoles, setSelectRoles] = useState(
//         allUser.reduce((acc, user) => ({ ...acc, [user.id]: user.role }), {})
//       );
    
//       const handleRoleChange = (id, newRole) => {
//         setSelectRoles((prevRoles) => ({
//           ...prevRoles,
//           [id]: newRole, // Only updating the specific user's role
//         }));
//       };
    
//       const handleSave = (user) => {
//         if (selectRoles[user.id] === "admin") {
//           handleMakeAdmin(user);
//         } else if (selectRoles[user.id] === "surveyor") {
//           handleMakeSurveyor(user);
//         }
//       };



   
//     const handleMakeAdmin = users =>{
//         axiosSecure.patch(`/user/admin/${users._id}`)
//         .then(res =>{
//             console.log(res.data)
//             if(res.data.modifiedCount > 0){
//                 refetch();
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: `${users.name} is an Admin Now!`,
//                     showConfirmButton: false,
//                     timer: 1500
//                   });
//             }
//         })
//     }
//     const handleMakeSurveyor = users =>{
//         axiosSecure.patch(`/user/surveyor/${users._id}`)
//         .then(res =>{
//             console.log(res.data)
//             if(res.data.modifiedCount > 0){
//                 refetch();
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: `${users.name} is an Surveyor Now!`,
//                     showConfirmButton: false,
//                     timer: 1500
//                   });
//             }
//         })
//     }


//     const handleDeleteUser = users => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 axiosSecure.delete(`/user/${users._id}`)
//                     .then(res => {
//                         if (res.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "User has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//             }
//         });
//     }

//     return (
//         <div>
//             <div className=" my-4">
//                 <h2 className="text-3xl text-center text-emerald-600 font-serif font-bold">Manage  Users</h2>
//                 <h2 className="text-lg   text-rose-400 font-serif font-bold pt-4">Total Users: {allUser.length}</h2>
//             </div>
           
//                 <div className="">
//                 <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="w-24 h-8 bg-pink-200 text-center text-lg font-semibold text-sky-900 "   >
//                   <option value="all">All Users</option>
//                   <option value="pro-user">Pro-User</option>
//                   <option value="normal">User</option>
//                   <option value="surveyor">Surveyors</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
            
//             <div className="overflow-x-auto mt-8 ">
//                 <table className="table table-xs  w-full  ">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th className="text-sm">Name</th>
//                             <th className="text-sm">Email</th>
//                             <th className="text-sm">Role</th>
//                             <th className="text-sm">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         { isFetching? (<div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
//          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
//      </div>):
//                             filteredUsers.map((users, index) => <tr key={users._id}>
                                
//                                 <th className="text-base text-pink-700 mr-2">{index + 1}</th>
//                                 <td className="text-base font-medium">{users.name}</td>
//                                 <td className="text-base font-medium">{users.email}{users.role=='pro-user'? <h3 className="badge badge-secondary ml-4">pro</h3>:""}</td>
//                                 <td>
//                                     { users.role === 'admin' ?(<div className="flex gap-6">
//                                         <h3 className="mr-2 text-2xl text-green-600 font-serif font-semibold"> Admin</h3>
//                                         <button
//                                         onClick={() => handleMakeSurveyor(users)}
//                                         className="btn btn-base bg-blue-500 text-white">
//                                        Surveyor
//                                     </button>
//                                     </div>)  : users.role === 'surveyor' ? (<div className="flex gap-6">
//                                         <h3 className="mr-2 text-xl text-blue-600 font-serif font-semibold"> Surveyor</h3>
//                                         <button
//                                         onClick={() => handleMakeAdmin(users)}
//                                         className="btn btn-base bg-purple-500 text-white">
//                                        Admin
//                                     </button>
//                                     </div>)  : (<th className="">

//                                     <button
//                                         onClick={() => handleMakeAdmin(users)}
//                                         className="btn btn-base bg-purple-500 text-white mr-4">
//                                        Admin
//                                     </button>
//                                     <button
//                                         onClick={() => handleMakeSurveyor(users)}
//                                         className="btn btn-base bg-blue-500 text-white">
//                                       Surveyor
//                                     </button>

//                                     </th>) }
//                                 </td>
//                                 <td>
//                                     <button
//                                         onClick={() => handleDeleteUser(users)}
//                                         className="btn btn-ghost btn-lg">
//                                         <FaTrash
//                                             className="text-red-600"></FaTrash>
//                                     </button>
//                                 </td>
//                             </tr>)
//                         }

//                     </tbody>
//                 </table>
//             </div>





//             <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//           <table className="w-full text-sm sm:text-md">
//             <thead className="bg-gray-300">
//               <tr>
//                 <th className="p-3 px-5 text-left">Name</th>
//                 <th className="p-3 px-5 text-left">Email</th>
//                 <th className="p-3 px-5 text-left">Role</th>
//                 <th className="p-3 px-5 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user) => (
//                 <tr key={user.id} className="border-b hover:bg-orange-100 bg-gray-100">
//                   <td className="p-3 px-5">
//                     <input type="text" value={user.name} readOnly className="bg-transparent border-none w-full" />
//                   </td>
//                   <td className="p-3 px-5 flex items-center">
//                     <span>{user.email}</span>
//                     <span className={`ml-2 px-2 py-1 text-xs rounded ${
//                       user.role === "admin" ? "bg-blue-500 text-white" : 
//                       user.role === "surveyor" ? "bg-green-500 text-white" : "bg-gray-400 text-white"
//                     }`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="p-3 px-5">
//                     <select
//                       value={selectRoles[user.id]}
//                       onChange={(e) => handleRoleChange(user.id, e.target.value)}
//                       className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
//                     >
                       
//                       <option value="user">User</option>
//                       <option value="admin">Admin</option>
//                       <option value="surveyor">Surveyor</option>
//                     </select>
//                   </td>
//                   <td className="p-3 px-5 flex justify-end space-x-2">
//                     <button
//                        onClick={() => handleSave(user)}
//                       className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
//                     >
//                       Save
//                     </button>
//                     <button
//                     //   onClick={() => setUsers(users.filter(u => u.id !== user.id))}
//                       className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         </div>
//     );
// };

// export default AllUser;