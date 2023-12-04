import { Link, useLoaderData } from "react-router-dom";
import useLoadUsers from "../../Hooks/useLoadUsers";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Loading from "../../components/Loading";
import { TERipple } from "tw-elements-react";
import { useContext, useState } from "react";
import BookModal from "./BookModal";
import { AuthContext } from "../../Providers/AuthProvider";

const PackageDetails = () => {
  const [showVerticalyCenteredModal, setShowVerticalyCenteredModal] =
    useState(false);
  const data = useLoaderData();
  const { users, isLoading } = useLoadUsers();
  const {user} = useContext(AuthContext);
  // Loading
  if (isLoading) {
    return <Loading />;
  }
  // console.log(data);
  const tourGuide = users.filter((guide) => guide.role === "tour guide");
  const [currentUser] = users.filter(current => current.email === user.email);
  // console.log(currentUser);
  console.log(data);
  

  return (
    <>
      <section className="my-16">
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-12">
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="mb-6 text-3xl">{data.title}</h2>
              <div className="flex gap-6">
                <div className="flex-1">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="space-y-5">
                  <h4 className="text-xl font-medium">{data.duration}</h4>
                  <h5>Starting from</h5>
                  <h2>
                    Tk <span className="font-semibold">{data.price}</span>
                  </h2>
                  <span className="text-sm">(price per person)</span>

                  {/* <!-- Button trigger vertically centered modal--> */}
                  {!currentUser?.role ? 
                  <TERipple rippleColor="white" style={{display:'block'}}>
                    <button
                      onClick={() => setShowVerticalyCenteredModal(true)}
                      className="block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                    >
                      Book Now
                    </button>
                  </TERipple>
                  : <TERipple rippleColor="white" style={{display:'block'}}>
                  <button
                    onClick={() => setShowVerticalyCenteredModal(true)}
                    disabled
                    className="block pointer-events-none rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                  >
                    Book Now
                  </button>
                </TERipple>}
                  {/* Modal */}
                  <BookModal tourGuide={tourGuide} packageName={data.title} price={data.price} showVerticalyCenteredModal={showVerticalyCenteredModal} setShowVerticalyCenteredModal={setShowVerticalyCenteredModal} />
                </div>
              </div>
              {/* Tour Plan */}
              <div className="my-10">
                <h2 className="text-2xl mb-5">:: Tour Plan ::</h2>
                <p>{data.about_tour}</p>
              </div>
              <div className="space-y-3">
                {/* Day 1 */}
                {data.day1 && (
                  <>
                    <div className="space-y-2">
                      <h3 className="bg-gray-300 px-3 py-1 inline-block">
                        Day 1:
                      </h3>
                      <p>{data.day1}</p>
                    </div>
                  </>
                )}
                {/* Day 2 */}
                {data.day2 && (
                  <>
                    <div className="space-y-2">
                      <h3 className="bg-gray-300 px-3 py-1 inline-block">
                        Day 2:
                      </h3>
                      <p>{data.day2}</p>
                    </div>
                  </>
                )}
                {/* Day 3 */}
                {data.day3 && (
                  <>
                    <div className="space-y-2">
                      <h3 className="bg-gray-300 px-3 py-1 inline-block">
                        Day 3:
                      </h3>
                      <p>{data.day3}</p>
                    </div>
                  </>
                )}
                {/* Day 4 */}
                {data.day4 && (
                  <>
                    <div className="space-y-2">
                      <h3 className="bg-gray-300 px-3 py-1 inline-block">
                        Day 4:
                      </h3>
                      <p>{data.day4}</p>
                    </div>
                  </>
                )}
                {/* Day 5 */}
                {data.day5 && (
                  <>
                    <div className="space-y-2">
                      <h3 className="bg-gray-300 px-3 py-1 inline-block">
                        Day 5:
                      </h3>
                      <p>{data.day5}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* right sidebar */}
            <div className="col-span-4 flex gap-8 items-end flex-col">
              <h3 className="text-xl">Contact With Tour Guides</h3>
              {/* Tour Guide Profle */}
              {tourGuide.map((guide) => (
                <div
                  key={guide._id}
                  className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100"
                >
                  <Link to={`/tour-guide/${guide._id}`}>
                    <img
                      src={
                        guide.photoURL
                          ? guide.photoURL
                          : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                      }
                      alt={guide.name}
                      className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 object-cover aspect-square"
                    />
                  </Link>
                  <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-base">
                        {guide.name}
                      </h2>
                      <p className="px-5 text-base sm:text-base dark:text-gray-400">
                        {guide.role}
                      </p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                      <Link className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400">
                        <FaGithub />
                      </Link>
                      <Link className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400">
                        <FaFacebook />
                      </Link>
                      <Link className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400">
                        <FaTwitter />
                      </Link>
                      <Link className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400">
                        <FaInstagram />
                      </Link>
                      <Link className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400">
                        <FaEnvelope />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;
