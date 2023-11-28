import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 object-cover aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-base sm:text-base dark:text-gray-400">
              Admin
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
    </>
  );
};

export default AdminProfile;
