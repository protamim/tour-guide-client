import { FaHome, FaUser } from "react-icons/fa";
import { BsBookmarksFill, BsFillBagHeartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const TouristDash = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/dashboard/tourist-profile"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <FaUser />
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-booking"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <BsBookmarksFill />
            My Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-wishlist"
            className="hover:bg-indigo-100 px-3 py-2 flex gap-2 items-center"
          >
            <BsFillBagHeartFill />
            My Wishlist
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

export default TouristDash;
