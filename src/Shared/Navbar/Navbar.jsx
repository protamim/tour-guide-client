import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">Bhraman Guide</Link>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <NavButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
