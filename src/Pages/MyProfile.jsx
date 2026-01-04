
import { use } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import MyLink from "../Components/MyLink";
import Loading from "./Loading";

const MyProfile = () => {
  const { user, loading } = use(AuthContext);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-base-200">
      <title>Profile</title>

      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-br from-green-800 to-green-900 py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Profile</h1>
          <p className="text-lg opacity-90">Manage your account information</p>
        </div>
      </div>

      {/* Profile Card - Centered & Full-width responsive */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Profile Picture */}
            <div className="md:w-1/3 bg-gradient-to-b from-green-700 to-green-900 p-8 flex flex-col items-center justify-center">
              <div className="avatar">
                <div className="w-32 md:w-40 rounded-full ring-4 ring-white ring-offset-4 ring-offset-green-800">
                  <img
                    src={user?.photoURL || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                    alt="Profile"
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mt-6">
                {user?.displayName || "User Name"}
              </h2>
              <p className="text-green-200 text-sm mt-2">Member</p>
            </div>

            {/* Right Side - Profile Info */}
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Account Information</h3>

              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-600 w-24">Full Name:</span>
                  <span className="text-lg font-semibold">
                    {user?.displayName || "Not provided"}
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-600 w-24">Email:</span>
                  <span className="text-lg font-semibold text-green-700">
                    {user?.email}
                  </span>
                </div>

                {/* Provider Info (Google/Firebase) */}
                {user?.providerData?.[0]?.providerId && (
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-600 w-24">Signed in with:</span>
                    <span className="text-lg capitalize">
                      {user.providerData[0].providerId.replace(".com", "")}
                    </span>
                  </div>
                )}

                {/* UID (Optional - for admin/debug) */}
                {/* <div className="text-sm text-gray-500 mt-8">
                  User ID: {user?.uid}
                </div> */}
              </div>

              {/* Edit Button */}
              <div className="mt-10 flex justify-center md:justify-start">
                <MyLink to="/updateInformation">
                  <button className="btn btn-lg text-white bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg">
                    Edit Profile
                  </button>
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra spacing at bottom */}
      <div className="pb-20"></div>
    </div>
  );
};

export default MyProfile;