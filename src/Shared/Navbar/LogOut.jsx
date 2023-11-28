import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
    return (
        <>
            <button onClick={handleLogOut} className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                Log Out
            </button>
        </>
    );
};

export default LogOut;