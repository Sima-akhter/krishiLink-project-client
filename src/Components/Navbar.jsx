import logo from "../assets/krishi-logo.png";
import MyLink from "./MyLink";
import { Link } from "react-router";
import { AuthContext } from "../Provaider/AuthProvider";
import { use } from "react";
import { toast } from "react-toastify";

// React Icons
import { FaHome, FaSeedling, FaUserCircle, FaPlusCircle, FaClipboardList, FaHeart } from "react-icons/fa";

const Navber = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You have logged out successfully!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="bg-gradient-to-b from-green-100 to-white shadow-md sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto py-3">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-xl z-10 mt-3 w-52 p-2 shadow-lg border border-green-100"
            >
              <li>
                <MyLink to="/">
                  <FaHome className="text-green-700" /> Home
                </MyLink>
              </li>
              <li>
                <MyLink to="/allCrops">
                  <FaSeedling className="text-green-700" /> All Crops
                </MyLink>
              </li>
              {user && (
                <>
                  <li>
                    <MyLink to="/addCrops">
                      <FaPlusCircle className="text-green-700" /> Add Crops
                    </MyLink>
                  </li>
                  <li>
                    <MyLink to="/my-posted">
                      <FaClipboardList className="text-green-700" /> My Posts
                    </MyLink>
                  </li>
                  <li>
                    <MyLink to="/myInterests">
                      <FaHeart className="text-green-700" /> My Interests
                    </MyLink>
                  </li>
                  <li>
                    <MyLink to="/profile">
                      <FaUserCircle className="text-green-700" /> Profile
                    </MyLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-[70px] rounded-full" src={logo} alt="logo" />
            <h1 className="text-2xl font-bold text-green-800 tracking-wide">
              Krishi<span className="text-green-600">Link</span>
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-medium text-gray-700">
            <li>
              <MyLink to="/" className="flex items-center gap-2 hover:text-green-700 transition-colors">
                <FaHome className="text-green-700" /> Home
              </MyLink>
            </li>
            <li>
              <MyLink to="/allCrops" className="flex items-center gap-2 hover:text-green-700 transition-colors">
                <FaSeedling className="text-green-700" /> All Crops
              </MyLink>
            </li>

            {user && (
              <>
                <li>
                  <MyLink to="/addCrops" className="flex items-center gap-2 hover:text-green-700 transition-colors">
                    <FaPlusCircle className="text-green-700" /> Add Crops
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/my-posted" className="flex items-center gap-2 hover:text-green-700 transition-colors">
                    <FaClipboardList className="text-green-700" /> My Posts
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/myInterests" className="flex items-center gap-2 hover:text-green-700 transition-colors">
                    <FaHeart className="text-green-700" /> My Interests
                  </MyLink>
                </li>
                <li>
                  <MyLink to="/profile" className="flex items-center gap-2 hover:text-green-700 transition-colors">
                    <FaUserCircle className="text-green-700" /> Profile
                  </MyLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-3">
          {/* Profile Image */}
          <MyLink to="/profile">
            <img
              className="w-10 h-10 rounded-full border border-green-400 object-cover shadow-sm"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://img.icons8.com/?size=100&id=12438&format=png&color=000000"
              }
              alt="profile"
            />
          </MyLink>

          {/* Buttons */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn text-white border-none bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              Log Out
            </button>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <Link
                to="/auth/login"
                className="btn text-white border-none bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn text-white border-none bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
