// import React, { use } from 'react'
// import { useLocation, useNavigate } from 'react-router'
// import { AuthContext } from '../Provaider/AuthProvider'
// import { toast } from 'react-toastify'

import { use } from "react"
import { useLocation, useNavigate } from "react-router"
import { AuthContext } from "../Provaider/AuthProvider"
import { toast } from "react-toastify"

const ForgotPassword = () => {
    const navigate = useNavigate()

    const { passwordReset } = use(AuthContext)

    const location = useLocation()
    const email = location.state?.email || ''

    const handlePasswordReset = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;

        passwordReset(email)
            .then(() => {
                toast.success("Password Reset Email Sent! Redircting to email...")
                setTimeout(()=>{
                    window.open('https://mail.google.com', '_blank')
                    navigate("/auth/login")
                }, 3000)

            })
            .catch((error) => {
                 toast.error(error.message)
                // ..
            });
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">



                    <div className="card bg-base-100 w-full max-w-sm shrink-0 px-5 py-8 shadow-2xl">
                        <h1 className='font-semibold text-2xl text-center '>Reset Your Password</h1>
                        <form onSubmit={handlePasswordReset} className="card-body">

                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" required defaultValue={email} />

                                <button type='submit' className="btn bg-blue-800 hover:bg-blue-500 mt-4 text-white"> Send Reset Email</button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ForgotPassword