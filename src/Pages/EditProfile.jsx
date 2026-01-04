
import React from 'react';
import { AuthContext } from '../Provaider/AuthProvider';
import { useNavigate } from 'react-router'; 
import { toast } from 'react-toastify';
import Loading from './Loading';
import { useContext } from 'react'; 

const EditProfile = () => {
  const { user, updateUser, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();

    const updatedName = name || user?.displayName;
    const updatedPhoto = photo || user?.photoURL;

    updateUser({ displayName: updatedName, photoURL: updatedPhoto })
      .then(() => {
        setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });
        toast.success('Profile updated successfully!');
        navigate('/profile');
      })
      .catch((err) => {
        toast.error(err.message || 'Failed to update profile');
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-base-200">
      <title>Edit Profile</title>

      
      <div className="relative bg-gradient-to-br from-green-800 to-green-900 py-16 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Edit Your Profile</h1>
          <p className="text-lg opacity-90">Update your name and profile picture</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Current Profile Preview */}
            <div className="flex flex-col items-center mb-10">
              <div className="avatar mb-6">
                <div className="w-32 rounded-full ring-4 ring-green-600 ring-offset-4 ring-offset-base-100">
                  <img
                    src={user?.photoURL || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                    alt="Current Profile"
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.displayName || "User Name"}
              </h2>
              <p className="text-gray-600 mt-2">{user?.email}</p>
            </div>

            {/* Update Form */}
            <form onSubmit={handleUpdate} className="space-y-8">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Display Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName || ""}
                  placeholder="Enter your name"
                  className="input input-bordered input-lg text-base"
                />
                <label className="label">
                  <span className="label-text-alt text-gray-500">
                    Leave empty to keep current name
                  </span>
                </label>
              </div>

              {/* Photo URL Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  defaultValue={user?.photoURL || ""}
                  placeholder="https://example.com/your-photo.jpg"
                  className="input input-bordered input-lg text-base"
                />
                <label className="label">
                  <span className="label-text-alt text-gray-500">
                    Paste a direct image link (e.g., from imgbb, Google Drive, etc.)
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button
                  type="submit"
                  className="btn btn-lg text-white bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg flex-1"
                >
                  Update Profile
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/profile')}
                  className="btn btn-lg btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-20"></div>
    </div>
  );
};

export default EditProfile;