
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllCrops from "../Pages/AllCrops";
import ForgotPassword from "../Pages/ForgotPassword";
import AuthLayout from "../Components/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPages from "../Pages/ErrorPages";
import PrivateRoute from "../Pages/PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import AddCrops from "../Pages/AddCrops";
import CropsDetails from "../Pages/CropsDetails";
import UpdateCrops from "../Pages/UpdateCrops";
import MyPost from "../Pages/MyPost";
import EditProfile from "../Pages/EditProfile";
import MyInterest from "../Pages/MyInterest";
import Loading from "../Pages/Loading";
import DashboardLayout from "../Layouts/DashboardLayout";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: ()=> fetch('https://krishi-link-project-server.vercel.app/latestKrishi'),
            hydrateFallbackElement: <Loading></Loading>

        },



        {
            path: '/allCrops',
            element: <AllCrops></AllCrops>,
            loader: ()=> fetch('https://krishi-link-project-server.vercel.app/krishiLink'),
            hydrateFallbackElement: <Loading></Loading>
        },

        {
            path: '/profile',
            element: <PrivateRoute>
            <MyProfile></MyProfile>
            </PrivateRoute>
        },

       {
        path: '/addCrops',
        element:(
            <PrivateRoute>
                <AddCrops></AddCrops>
            </PrivateRoute>
        ),
       },

       {
        path: '/cropsDetails/:id',
        element: (
            
                <CropsDetails></CropsDetails>
           
        ),
        loader:({params}) => fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>

       },

       {
        path: '/updateCrops/:id',
        element: (
            <PrivateRoute>
                <UpdateCrops></UpdateCrops>
            </PrivateRoute>
        ),
         loader:({params}) => fetch(`https://krishi-link-project-server.vercel.app/krishiLink/${params.id}`),
         hydrateFallbackElement: <Loading></Loading>

       },
       {
        path: '/my-posted',
        element: (
            <PrivateRoute>
                <MyPost></MyPost>
            </PrivateRoute>
        ),

       },

        {
            path: '/forgotPassword',
            element: <ForgotPassword></ForgotPassword>
        },
        {
            path: '/updateInformation',
            element: <EditProfile></EditProfile>
        },
        {
            path: '/myInterests',
            element: <MyInterest></MyInterest>
        }

    ]
  },

{
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
        {
            path:'/auth/login',
            element: <Login></Login>
        },

        {
            path: '/auth/register',
            element:<Register></Register>
        }
    ]
},

//=================Dashboard========================
{
path: "/dashboard",
element: (
    <PrivateRoute>
        <DashboardLayout></DashboardLayout>
    </PrivateRoute>
)
},

{
    path:'/*',
    element: <ErrorPages></ErrorPages>
}


]);

export default router