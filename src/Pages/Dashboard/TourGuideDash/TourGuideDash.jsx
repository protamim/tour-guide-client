import { FaClipboardList, FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const TourGuideDash = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/dashboard/tour-guide-profile"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaUser />
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-assigned-tours"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaClipboardList />
            My Assigned Tours
          </NavLink>
        </li>
      </ul>
      {/* Horizontal divider */}
      <hr className="my-4 h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <ul>
        <li>
          <NavLink
            to="/"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaHome />
            Home
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default TourGuideDash;
