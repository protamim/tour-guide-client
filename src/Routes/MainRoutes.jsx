import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/AdminDash/ManageUsers/ManageUsers";
import AdminProfile from "../Pages/Dashboard/AdminDash/AdminProfile/AdminProfile";
import TourGuideProfile from "../Pages/Dashboard/TourGuideDash/TourGuideProfile/TourGuideProfile";
import TouristProfile from "../Pages/Dashboard/TouristDash/TouristProfile/TouristProfile";
import AddPackage from "../Pages/Dashboard/AdminDash/AddPackage/AddPackage";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import TourGuideSinglePage from "../Pages/TourGuideSinglePage/TourGuideSinglePage";



const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h4>404 not found is under construction</h4>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/package-details/:id',
                element: <PackageDetails />,
                loader: ({params})=> fetch(`http://localhost:4000/packages/${params.id}`)
            },
            {
                path: '/tour-guide/:id',
                element: <TourGuideSinglePage />,
                loader: ({params}) => fetch(`http://localhost:4000/users/tour-guide/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            // Admin Dashboard routes
            {
                path: '/dashboard/admin-profile',
                element: <AdminProfile />
            },
            {
                path: '/dashboard/add-package',
                element: <AddPackage />
            },
            {
                path: '/dashboard/manage-user',
                element: <ManageUsers />
            },
            // Tour Guide Dashboard routes
            {
                path: '/dashboard/tour-guide-profile',
                element: <TourGuideProfile />
            },
            {
                path: '/dashboard/my-assigned-tours',
                element: <h3>My assigned Tours</h3>
            },
            // Tourist Dashboard routes
            {
                path: '/dashboard/tourist-profile',
                element: <TouristProfile />
            },
            {
                path: '/dashboard/my-booking',
                element: <h2>My Booking</h2>
            },
            {
                path: '/dashboard/my-wishlist',
                element: <h2>My Wishlist</h2>
            },
        ]
    }
])

export default MainRoutes;