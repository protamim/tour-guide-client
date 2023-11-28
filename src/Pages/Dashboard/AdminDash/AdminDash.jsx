import { FaUser, FaUsers, FaPaperclip, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminDash = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/dashboard/admin-profile"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaUser />
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-package"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaPaperclip />
            Add Packages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-user"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaUsers />
            Manage Users
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

export default AdminDash;
