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
                    <div className='font-semibold text-center'>
                        <p>Name:- {user?.displayName}</p>
                        <p>Email:- {user?.email}</p>
                        <img src={user?.photoURL} alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <MyLink to='/updateInformation'><button className='btn bg-blue-800 text-white'>Edit Profile</button></MyLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile