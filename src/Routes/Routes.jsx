
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





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>
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