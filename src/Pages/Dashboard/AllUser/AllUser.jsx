import { useQuery } from "@tanstack/react-query";
import { FaTrash} from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: user = [], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user'
            
            );
            return res.data;
        }
    })
   
    const handleMakeAdmin = users =>{
        axiosSecure.patch(`/user/admin/${users._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${users.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeSurveyor = users =>{
        axiosSecure.patch(`/user/surveyor/${users._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${users.name} is an Surveyor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    const handleDeleteUser = users => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/user/${users._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className=" my-4">
                <h2 className="text-3xl text-center text-emerald-600 font-serif font-bold">Manage  Users</h2>
                <h2 className="text-lg   text-rose-400 font-serif font-bold">Total Users: {user.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs   w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-sm">Name</th>
                            <th className="text-sm">Email</th>
                            <th className="text-sm">Role</th>
                            <th className="text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users, index) => <tr key={users._id}>
                                <th className="text-base">{index + 1}</th>
                                <td className="text-base font-medium">{users.name}</td>
                                <td className="text-base font-medium">{users.email}</td>
                                <td>
                                    { users.role === 'admin' ?(<div className="flex gap-6">
                                        <h3 className="mr-2 text-2xl text-green-600 font-serif font-semibold"> Admin</h3>
                                        <button
                                        onClick={() => handleMakeSurveyor(users)}
                                        className="btn btn-base bg-blue-500 text-white">
                                       Surveyor
                                    </button>
                                    </div>)  : users.role === 'surveyor' ? (<div className="flex gap-6">
                                        <h3 className="mr-2 text-xl text-blue-600 font-serif font-semibold"> Surveyor</h3>
                                        <button
                                        onClick={() => handleMakeAdmin(users)}
                                        className="btn btn-base bg-purple-500 text-white">
                                       Admin
                                    </button>
                                    </div>)  : (<th className="">

                                    <button
                                        onClick={() => handleMakeAdmin(users)}
                                        className="btn btn-base bg-purple-500 text-white mr-4">
                                       Admin
                                    </button>
                                    <button
                                        onClick={() => handleMakeSurveyor(users)}
                                        className="btn btn-base bg-blue-500 text-white">
                                      Surveyor
                                    </button>

                                    </th>) }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(users)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrash
                                            className="text-red-600"></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;