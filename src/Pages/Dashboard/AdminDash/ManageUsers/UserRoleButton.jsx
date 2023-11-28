import { FaAngleDown } from "react-icons/fa";
import PropTypes from "prop-types";
import {
  TEDropdown,
  TEDropdownItem,
  TEDropdownMenu,
  TEDropdownToggle,
  TERipple,
} from "tw-elements-react";

const UserRoleButton = ({ handleMakeAdmin, user, handleMakeTourGuide }) => {
  // console.log(handleMakeAdmin);
  return (
    <>
      <TEDropdown>
        <TERipple rippleColor="light">
          <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none">
            Select role
            <span className="ml-2 [&>svg]:w-5 w-2">
              <FaAngleDown />
            </span>
          </TEDropdownToggle>
        </TERipple>

        <TEDropdownMenu>
          {/* Admin Button */}
          <TEDropdownItem>
            {user?.role === "admin" || user?.role === 'tour guide' ? (
              <button
                disabled
                className="block w-full min-w-[160px] pointer-events-none whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal text-neutral-400 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Admin
              </button>
            ) : (
              <button
                onClick={handleMakeAdmin}
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Admin
              </button>
            )}
          </TEDropdownItem>
          {/* Tour Guide Button */}
          <TEDropdownItem>
            {user?.role === "admin" || user?.role === 'tour guide' ? (
              <button
                disabled
                className="block w-full min-w-[160px] pointer-events-none whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal text-neutral-400 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Tour Guide
              </button>
            ) : (
              <button
                onClick={handleMakeTourGuide}
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Tour Guide
              </button>
            )}
          </TEDropdownItem>
        </TEDropdownMenu>
      </TEDropdown>
    </>
  );
};
UserRoleButton.propTypes = {
  handleMakeAdmin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  handleMakeTourGuide: PropTypes.func.isRequired,
};
export default UserRoleButton;
