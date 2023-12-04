import useLoadBooking from "../../../../Hooks/useLoadBooking";
import Loading from "../../../../components/Loading";

const MyBooking = () => {
  const { bookings, isLoading } = useLoadBooking();
  console.log(bookings);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {bookings.length === 0 ? (
        <section className="mt-4">
          <div>
            <h3 className="text-2xl">You have not booked any package</h3>
          </div>
        </section>
      ) : (
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
                        Tour Guide
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      {/* <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Pay Now
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((book, index) => (
                      <tr
                        key={book._id}
                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {book.package_name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {book.guide_name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {book.tour_date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          TK {book.price}
                        </td>
                        {/* <td className="whitespace-nowrap px-6 py-4">myemail</td>
                    <td className="whitespace-nowrap px-6 py-4">tourist</td>
                    <td className="whitespace-nowrap px-6 py-4">tourist</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBooking;
