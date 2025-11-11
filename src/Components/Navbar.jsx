
// import profile from '../assets/cat.png'
import logo from '../assets/krishi-logo.png'
import MyLink from './MyLink'
import { Link } from 'react-router'
import { AuthContext } from '../Provaider/AuthProvider'
import { use } from 'react'
import { toast } from 'react-toastify'


const Navber = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log('user trying to log out');

        logOut()
            .then(() => {
                toast.success('Your Looged Succesfull');
            })
            .catch((error) => {

                toast.error(error.message);

            })

    }

    return (

        <div className=' bg-base-100 shadow-sm '>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <li>
                                <MyLink to={'/'} >Home</MyLink>
                            </li>
                            <li>
                                <MyLink to={'/about'} >All Crops</MyLink>
                            </li>
                            <li>
                                <MyLink to={'/profile'} >Profile</MyLink>
                            </li>

                        </ul>
                    </div>
                    <div className=' flex justify-center items-center gap-2'>
                        <img className='w-[90px] rounded-full' src={logo} alt="" />
                        <div className="navbar-center hidden lg:flex">
                            <h1 className='text-2xl font-bold text-green-800 text-shadow-2xs'>KrishiLink-Farmer's</h1>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className='flex items-center gap-2 '>

                        <div className='hidden lg:flex'>
                            <ul className="menu menu-horizontal px-1">

                                <li>
                                    <MyLink to={'/'} >Home</MyLink>
                                </li>
                                <li>
                                    <MyLink to={'/allCrops'} >All Crops</MyLink>
                                </li>

                                {
                                    user && <> 
                                    
                                    <li>
                                    <MyLink to={'/addCrops'} >Add Crops</MyLink>
                                </li>
                                    <li>
                                    <MyLink to={'/my-posted'} >My Posts</MyLink>
                                </li>
                                    <li>
                                    <MyLink to={'/myInterests'} >My Interests</MyLink>
                                </li>
                                  
                                    <li>
                                    <MyLink to={'/profile'} >Profile</MyLink>
                                </li>
                                    </>
                                }

                                {/* <li>
                                    <MyLink to={'/profile'} >Profile</MyLink>
                                </li> */}
                            </ul>

                        </div>

                        {/* <div className='hidden md:block'>
                            {user && user.email}
                        </div> */}

                        <div className='w-[44px] h-[44px] '>
                            <MyLink to="/profile"><img className='w-full rounded-full' src={`${user ? user.photoURL : 'https://img.icons8.com/?size=100&id=12438&format=png&color=000000'}`} alt="" /></MyLink>

                        </div>

                        <div>
                            {user ? (
                                <button onClick={handleLogOut} className="btn bg-green-800 hover:bg-green-400 text-white">LogOut</button>
                            ) : (<><div className='flex flex-col md:flex-row'><Link to='/auth/login' className="btn bg-green-800 hover:bg-green-400 text-white">Login</Link><Link to='/auth/register' className='btn bg-green-800 hover:bg-green-400 text-white'>Register</Link></div></>)}
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber