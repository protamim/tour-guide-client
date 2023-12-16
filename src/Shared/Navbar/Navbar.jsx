import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <div className="navbar justify-between bg-base-100">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[9999999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
          <Link to={'/'} className="hidden md:block text-xl">Bhraman Guide</Link>
        </div>
        <div className={`${user? 'hidden': "flex"} hidden items-center`}>
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="ml-5">
          <NavButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
