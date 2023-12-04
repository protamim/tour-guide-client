import { Link } from "react-router-dom";
import useLoadWishList from "../../../../Hooks/useLoadWishList";
import Loading from "../../../../components/Loading";
import { MdDeleteForever } from "react-icons/md";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const MyWishList = () => {
  const { wishList, isLoading, refetch } = useLoadWishList();
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext);
  //   console.log(wishList);
  const cuurentWish = wishList.filter(current => current.tourist_email === user?.email);
  const handleDelete = (id) => {
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
        axiosPublic
          .delete(`/wishlist/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data?.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your selected package has been deleted",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => console.log(err));
      }
    });

  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
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
                      Package Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                    <th scope="col" className="px-6 py-4">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cuurentWish.map((wish) => (
                    <tr
                      key={wish._id}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {wish.packageName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => handleDelete(wish._id)}
                          className="text-2xl"
                        >
                          <MdDeleteForever />
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link to={`/package-details/${wish._id}`}>Details</Link>
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

export default MyWishList;
