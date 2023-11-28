import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useLoadUsers from "../../../../Hooks/useLoadUsers";
import Loading from "../../../../components/Loading";
import UserRoleButton from "./UserRoleButton";

const ManageUsers = () => {
  const { users, isLoading, refetch } = useLoadUsers();
  const axiosPublic = useAxiosPublic();
  // console.log(users, isLoading);
  if (isLoading) {
    return Loading();
  }
  
    const handleMakeAdmin = (user)=> {
        axiosPublic.patch(`http://localhost:4000/users/admin/${user._id}`)
        .then(res => {
            // console.log(res.data);
            refetch();
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeTourGuide = (user)=> {
        axiosPublic.patch(`http://localhost:4000/users/tour-guide/${user._id}`)
        .then(res => {
            // console.log(res.data);
            refetch();
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Tour Guide Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

  return (
    <>
      <h3>User: {users.length}</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div>
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <UserRoleButton handleMakeAdmin={()=>handleMakeAdmin(user)} user={user} handleMakeTourGuide={()=>handleMakeTourGuide(user)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
