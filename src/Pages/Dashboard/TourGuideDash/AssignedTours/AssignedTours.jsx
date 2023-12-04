import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../components/Loading";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AssignedTours = () => {
  const axiosPublic = useAxiosPublic();
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const result = await axiosPublic.get(
        "https://bhraman-server.vercel.app/booking"
      );
      return result.data;
    },
  });

  // Loading spinner
  if (isLoading) {
    return <Loading />;
  }
  console.log(bookings);
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
                      Tourist Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Tour Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Tour Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((book, i) => (
                    <tr
                      key={book._id}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.package_name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.tourist_name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.tour_date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        TK {book.price}
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

export default AssignedTours;
