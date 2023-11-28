import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import { AuthContext } from "../../Providers/AuthProvider";
import LogOut from "./LogOut";


const NavButton = () => {
  const { user } = useContext(AuthContext);
  const {displayName, email, photoURL} = user || {};
  console.log(displayName);
  return (
    <>
      {user ? (
        <TEDropdown className="flex justify-center">
          <TERipple rippleColor="light">
            <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-primary px-4 py-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              <img
                src={photoURL}
                className="w-10 h-10 object-cover rounded-full shadow-lg"
                alt="user"
              />
            </TEDropdownToggle>
          </TERipple>

          <TEDropdownMenu>
            <TEDropdownItem>
              <Link
                to={'/dashboard'}
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Dashboard
              </Link>
            </TEDropdownItem>
            <TEDropdownItem>
              <Link
                to={'/offer'}
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Offer Announcements
              </Link>
            </TEDropdownItem>
            <TEDropdownItem preventCloseOnClick>
              <Link
                to={'#'}
                className="pointer-events-none cursor-auto text-neutral-400 block w-full min-w-[160px] whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                {displayName}
              </Link>
            </TEDropdownItem>
            <TEDropdownItem preventCloseOnClick>
              <Link
                to={'#'}
                className="pointer-events-none cursor-auto text-neutral-400 block w-full min-w-[160px] whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                {email}
              </Link>
            </TEDropdownItem>
            <TEDropdownItem>
             <LogOut />
            </TEDropdownItem>
          </TEDropdownMenu>
        </TEDropdown>
      ) : (
        <NavLink to="/register">Login/Register</NavLink>
      )}
    </>
  );
};

export default NavButton;
