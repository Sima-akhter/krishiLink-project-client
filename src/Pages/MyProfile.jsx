// import React, { use } from 'react'
// import { AuthContext } from '../Provaider/AuthProvider'
// import MyLink from '../Components/MyLink';

import { use } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import MyLink from "../Components/MyLink";
import Loading from "./Loading";

const MyProfile = () => {
    const { user, loading } = use(AuthContext)
    
    if(loading) return <Loading></Loading>

    return (
        <div>
            <title>Profile</title>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='bg-gray-200 px-5 py-3 rounded-lg'>
                    <div className='font-semibold flex flex-col justify-center items-center space-y-3'>
                        <p>Name:- {user?.displayName}</p>
                        <p>Email:- {user?.email}</p>
                        <img src={user?.photoURL} alt="" />
                    </div>
                    <div className='flex justify-center mt-3'>
                        <MyLink to='/updateInformation'><button className='btn text-white bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300'>Edit Profile</button></MyLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile