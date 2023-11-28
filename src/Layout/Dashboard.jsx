import { Outlet } from "react-router-dom";
import AdminDash from "../Pages/Dashboard/AdminDash/AdminDash";
import useLoadUsers from "../Hooks/useLoadUsers";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Loading from "../components/Loading";
import TourGuideDash from "../Pages/Dashboard/TourGuideDash/TourGuideDash";
import TouristDash from "../Pages/Dashboard/TouristDash/TouristDash";

const Dashboard = () => {
  const { users, isLoading } = useLoadUsers();
  const { user } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }
  const [currentUser] = users.filter(
    (current) => current.email === user?.email
  );

  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-12 gap-8">
            {/* Side bar */}
            <div className="col-span-3 bg-indigo-500 min-h-screen pt-6">

              {/* Admin Dashboard */}
              {currentUser?.role === "admin" && (
                <>
                  <h3 className="text-xl font-semibold mb-5 text-gray-300 pl-2">
                    Admin Dashboard
                  </h3>
                  <AdminDash />
                </>
              )}
              {/* Tour Guide Dashboard */}
              {currentUser?.role === "tour guide" && (
                <>
                  <h3 className="text-xl font-semibold mb-5 text-gray-300 pl-2">
                    Tour Guide Dashboard
                  </h3>
                  <TourGuideDash />
                </>
              )}
              {/*  Tourist Dashboard by defult*/}
              {!currentUser?.role && (
                <>
                  <h3 className="text-xl font-semibold mb-5 text-gray-300 pl-2">
                    Tourist Dashboard
                  </h3>
                  <TouristDash />
                </>
              )}

            </div>
            {/* Dashboard content */}
            <div className="col-span-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
