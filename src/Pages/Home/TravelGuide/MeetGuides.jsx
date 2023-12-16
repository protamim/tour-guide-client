import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";

const MeetGuides = () => {
  return (
    <>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Item 1 */}
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="pt-6">
            <img
              className="w-32 h-32 rounded-full object-cover mx-auto"
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
              alt="sundarban"
            />
          </div>
          <div className="p-6 space-y-2 text-center">
            <h4 className="text-xl font-semibold">Farid</h4>
            <p className="text-lg font-medium">
              Hometown:{" "}
              <span className="text-base font-normal">
                Fatakhata, Nokhla, Sherpur
              </span>
            </p>
            <p className="text-lg font-medium">
              Major:{" "}
              <span className="text-base font-normal text-gray-800">
                Communication and Political Science
              </span>
            </p>
            <TERipple>
              <Link
                to={"/package-details"}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                View Details
              </Link>
            </TERipple>
          </div>
        </div>
        {/* Item 2 */}
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="pt-6">
            <img
              className="w-32 h-32 rounded-full object-cover mx-auto"
              src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
              alt="sundarban"
            />
          </div>
          <div className="p-6 space-y-2 text-center">
            <h4 className="text-xl font-semibold">Iqbal Khan</h4>
            <p className="text-lg font-medium">
              Hometown:{" "}
              <span className="text-base font-normal">
                Khurshenagar, Nalitabari, Sherpur
              </span>
            </p>
            <p className="text-lg font-medium">
              Major:{" "}
              <span className="text-base font-normal text-gray-800">
                Sports Leadership
              </span>
            </p>
            <TERipple>
              <Link
                to={"/package-details"}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                View Details
              </Link>
            </TERipple>
          </div>
        </div>
        {/* Item 3 */}
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="pt-6">
            <img
              className="w-32 h-32 rounded-full object-cover mx-auto"
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
              alt="sundarban"
            />
          </div>
          <div className="p-6 space-y-2 text-center">
            <h4 className="text-xl font-semibold">Shahnaz Begum</h4>
            <p className="text-lg font-medium">
              Hometown:{" "}
              <span className="text-base font-normal">
                Halishahar, North Potenga, Chittagong
              </span>
            </p>
            <p className="text-lg font-medium">
              Major:{" "}
              <span className="text-base font-normal text-gray-800">
                Sociology and Criminology
              </span>
            </p>
            <TERipple>
              <Link
                to={"/package-details"}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                View Details
              </Link>
            </TERipple>
          </div>
        </div>
        {/* Item 4 */}
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="pt-6">
            <img
              className="w-32 h-32 rounded-full object-cover mx-auto"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
              alt="sundarban"
            />
          </div>
          <div className="p-6 space-y-2 text-center">
            <h4 className="text-xl font-semibold">Jubair Ahmmed</h4>
            <p className="text-lg font-medium">
              Hometown:{" "}
              <span className="text-base font-normal">
                Madan, Netrokona, Mymensingh
              </span>
            </p>
            <p className="text-lg font-medium">
              Major:{" "}
              <span className="text-base font-normal text-gray-800">
                Psychology
              </span>
            </p>
            <TERipple>
              <Link
                to={"/package-details"}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                View Details
              </Link>
            </TERipple>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetGuides;
