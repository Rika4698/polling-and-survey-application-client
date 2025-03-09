import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Users, Star, User, ClipboardList, Settings, ChevronDown} from "lucide-react";
import { FaTrash} from "react-icons/fa";
const roles = [
    { value: "all", label: "All Users", icon: <Users className="w-5 h-5 text-blue-500 dark:text-blue-400 " /> },
    { value: "pro-user", label: "Pro-User", icon: <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" /> },
    { value: "normal", label: "User", icon: <User className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
    { value: "surveyor", label: "Surveyors", icon: <ClipboardList className="w-5 h-5 text-purple-500 dark:text-purple-400" /> },
    { value: "admin", label: "Admin", icon: <Settings className="w-5 h-5 text-red-500 dark:text-red-400" /> },
  ];
const AllUsers = () => {
    const [selectedRole, setSelectedRole] = useState("all");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const axiosSecure = useAxiosSecure();
    
    const [isOpen, setIsOpen] = useState(false);
    const { data: allUser = [], refetch,isFetching } = useQuery({
      queryKey: ["user"],
      queryFn: async () => {
        const res = await axiosSecure.get("/user");
        return res.data;
      },
    });
  
    //  **Fix: Properly manage role selection**
    const [selectRoles, setSelectRoles] = useState({});
  
    useEffect(() => {
      if (allUser.length > 0) {
        setSelectRoles(
          allUser.reduce((acc, user) => ({ ...acc, [user._id]: user.role }), {})
          
        );
        
      } 
    }, [allUser]);
  
    // **Fix: Role-based filtering**
    useEffect(() => {
      if (selectedRole === "pro-user") {
        setFilteredUsers(allUser.filter((user) => user.role === "pro-user"));
      } else if (selectedRole === "surveyor") {
        setFilteredUsers(allUser.filter((user) => user.role === "surveyor"));
      } else if (selectedRole === "admin") {
        setFilteredUsers(allUser.filter((user) => user.role === "admin"));
      } else if (selectedRole === "normal") {
        setFilteredUsers(allUser.filter((user) => !user.role));
      } else {
        setFilteredUsers(allUser);
      }
    }, [selectedRole, allUser]);
  
    const handleRoleChange = (id, newRole) => {
      setSelectRoles((prevRoles) => ({
        ...prevRoles,
        [id]: newRole,
      }));
    };
  
    //  **Fix: Handle save correctly**
    const handleSave = async (user) => {
      const newRole = selectRoles[user._id];
  
      if (newRole === "admin") 
        {
        await axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
        Swal.fire("Success!", `${user.name} is now an Admin!`, "success");}})
      } 
      
      else if (newRole === "surveyor") 
        {
        await axiosSecure.patch(`/user/surveyor/${user._id}`) .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
        Swal.fire("Success!", `${user.name} is now a Surveyor!`, "success");}})
      }
  
      refetch();
    };
  
    const handleDeleteUser = (user) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/user/${user._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
        }
      });
    };
    
    if (isFetching) {
      return (
          <div className="flex justify-center items-center h-screen ">
          <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
      </div>
      );
    }
    return (
        <div>
        <div className="my-4 text-center">
          <h2 className="text-3xl text-emerald-600 dark:text-emerald-300 font-serif font-bold">
            Manage Users
          </h2>
          <h2 className="text-lg text-black dark:text-white font-serif font-bold pt-4">
            Total Users: {allUser.length}
          </h2>
        </div>
  
        {/*  **Fixed: Role Filter Dropdown** */}
        {/* <div className="flex justify-center mb-4 ">
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-32 h-10 bg-white group relative cursor-pointer text-center text-lg font-semibold text-sky-900 flex items-center "
      >
        <option value="all" className="">
          <Users className="inline w-5 h-5 mr-1 " />All Users
        </option>
        <option value="pro-user">
          <Star className="inline w-5 h-5 mr-1 text-yellow-500 " /> Pro-User
        </option>
        <option value="normal">
          <User className="inline w-5 h-5 mr-1 text-blue-500" /> User
        </option>
        <option value="surveyor">
          <ClipboardList className="inline w-5 h-5 mr-1 text-green-500" /> Surveyors
        </option>
        <li value="admin">
          <Settings className="inline w-5 h-5 mr-1 text-red-500 " /> Admin
        </li>
      </select>
    </div> */}
    <div className="relative flex justify-left mb-5">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-44 h-12 bg-blue-50 dark:bg-gray-700 text-lg font-semibold flex items-center justify-between px-4 rounded-lg shadow-md border border-gray-500 dark:border-gray-400 transition-all text-black dark:text-white"
      >
        <div className="flex items-center gap-2">
          {roles.find((r) => r.value === selectedRole)?.icon}
          {roles.find((r) => r.value === selectedRole)?.label}
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

     
      {isOpen && (
        <div className="absolute top-full mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 shadow-lg rounded-lg overflow-hidden">
          {roles.map((role) => (
            <div
              key={role.value}
              onClick={() => {
                setSelectedRole(role.value);
                setIsOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-black dark:text-white"
            >
              {role.icon}
              {role.label}
            </div>
          ))}
        </div>
      )}
    </div>
        
   

        <div className="overflow-x-auto bg-white shadow-md rounded-lg border dark:border-gray-200 ">
          <table className="min-w-full ">
            <thead className="bg-blue-200">
              <tr>
              <th className="p-3 px-5 text-left text-gray-700 uppercase">#</th>
                <th className="p-3 px-5 text-left text-gray-700 uppercase">Name</th>
                <th className="p-3 px-5 text-left text-gray-700 uppercase">Email</th>
                <th className="p-3 px-5 text-left text-gray-700 uppercase">Role</th>
                <th className="p-3 px-5 text-left text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>

            <tbody>
              {isFetching? (<tr>
      <td colSpan="9" className="text-center py-10">
        <div className="flex justify-center items-center ">
          <span className="loading loading-spinner loading-lg text-gray-800 "></span>
        </div>
      </td>
    </tr>):filteredUsers.map((user,index) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-blue-100 bg-blue-50 dark:bg-slate-600 dark:hover:bg-slate-500"
                >
                   <td className="p-3 px-5  text-gray-900 dark:text-white ">{index+1}</td>
                  <td className="p-3 px-5  text-gray-900 dark:text-white ">{user.name}</td>
                  
                  <td className="p-3 px-5 flex items-center whitespace-nowrap mt-1.5 ">
                    <span className="text-gray-900 dark:text-white ">{user.email}</span>
                    <span
                      className={`ml-3   px-2 py-1 text-sm  rounded-full font-medium ${
                        user.role === "admin"
                          ? "bg-blue-500 dark:bg-blue-400 text-white"
                          : user.role === "surveyor"
                          ? "bg-purple-500 dark:bg-purple-400 text-white"
                          : user.role === "pro-user"?"bg-gray-400 text-white"
                          : ""
                      }`}
                    >
                      {user.role === "admin"
                          ? "Admin"
                          : user.role === "surveyor"
                          ? "Surveyor"
                          : user.role === "pro-user"?"Pro-User"
                          : ""}
                    </span>
                  </td>
                  <td className="p-3 px-5 ">
                    <select
                      value={selectRoles[user._id]}
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                      className="bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 dark:text-white"
                    >
                      <option value="user" className="text-gray-900 ">{user.role==='pro-user'?"Pro-User":"User"}</option>
                      <option value="admin" className="text-gray-900 ">Admin</option>
                      <option value="surveyor" className="text-gray-900 ">Surveyor</option>
                    </select>
                  </td>
                  <td className="p-3 px-5 whitespace-nowrap space-x-4">
                    <button
                      onClick={() => handleSave(user)}
                      className=" bg-blue-600 dark:bg-blue-500 hover:bg-blue-700
                      dark:hover:bg-blue-800 text-white py-1 px-2 rounded w-20 h-8"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className=" text-red-600
                  dark:text-red-500
                  hover:text-white
                  dark:hover:text-white rounded-full hover:bg-red-700 
                  dark:hover:bg-red-500 transition-all duration-500  py-2 px-2 "
                    >
                      <FaTrash
             className="text-sm"></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;