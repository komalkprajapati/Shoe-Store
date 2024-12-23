import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const soredata = JSON.parse(localStorage.getItem("user")) || null;
  

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-600">
              {soredata?.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {soredata?.username || "Guest"}!
            </h1>
            <p className="text-gray-600">{soredata?.email || "No Email Provided"}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-700">Profile Details</h2>
            <ul className="text-gray-600">
              <li><strong>Username:</strong> {soredata?.username}</li>
              <li><strong>Email:</strong> {soredata?.email}</li>
              <li><strong>User ID:</strong> {soredata?.id}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-700">About You</h2>
            <p className="text-gray-600">
              Thanks for joining our platform! Keep exploring and enjoy the best we have to offer.
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
         <a href="/signin">Logout</a>
        </button>
      </div>
    </div>
    </>
  );
};

export default Profile;
