import { useQuery } from "@tanstack/react-query";
import { FaTrash,  FaUserAlt} from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: user = [], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    })



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
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {user.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users, index) => <tr key={users._id}>
                                <th>{index + 1}</th>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>
                                    { users.role === 'admin' ? 'Admin' : <button
                                        // onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-green-500">
                                        <FaUserAlt className="text-white 
                                        text-2xl"></FaUserAlt>
                                    </button>}
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