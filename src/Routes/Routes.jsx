
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





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:3000/latestKrishi')


        },



        {
            path: '/allCrops',
            element: <AllCrops></AllCrops>,
            loader: ()=> fetch('http://localhost:3000/krishiLink')
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
            <PrivateRoute>
                <CropsDetails></CropsDetails>
            </PrivateRoute>
        ),
        loader:({params}) => fetch(`http://localhost:3000/krishiLink/${params.id}`)

       },

       {
        path: '/updateCrops/:id',
        element: (
            <PrivateRoute>
                <UpdateCrops></UpdateCrops>
            </PrivateRoute>
        ),
         loader:({params}) => fetch(`http://localhost:3000/krishiLink/${params.id}`)

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

{
    path:'/*',
    element: <ErrorPages></ErrorPages>
}


]);

export default router