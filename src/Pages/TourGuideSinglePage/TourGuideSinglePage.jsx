import { FaDribbble, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const TourGuideSinglePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <section className="my-10">
        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src={data.photoURL}
              alt={data.name}
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-center md:text-left">
                {data.name}
              </h4>
              <p className="dark:text-gray-400">
                If you are planning a holiday in Bangladesh with destinations of
                your choice, just let us know your tour requirements (number of
                guests, start date of tour, length of stay, cities or places you
                want to visit, class of hotel or hospitality you desire and
                estimative travel budget per person) and we will arrange and
                operate the best tour for you.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Dribble"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaDribbble />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Email"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourGuideSinglePage;
