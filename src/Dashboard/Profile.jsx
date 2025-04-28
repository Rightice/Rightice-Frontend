"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/side-top-bar";
import { FaEdit, FaSave } from "react-icons/fa";

// Get current user email from auth
const getCurrentUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return user?.email || null;
};

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(getCurrentUserEmail());

  // Load user profile data
  useEffect(() => {
    const loadUserProfile = () => {
      const email = getCurrentUserEmail();
      setCurrentEmail(email);

      if (email) {
        const localStorageKey = `userProfile_${email}`;
        const storedUser = JSON.parse(localStorage.getItem(localStorageKey));

        if (storedUser) {
          setUser(storedUser);
        } else {
          // Fallback to old storage format
          const oldProfile = JSON.parse(
            localStorage.getItem("userProfile") || "{}"
          );
          if (Object.keys(oldProfile).length > 0) {
            setUser(oldProfile);
            // Migrate to new format
            localStorage.setItem(localStorageKey, JSON.stringify(oldProfile));
          }
        }
      }
    };

    loadUserProfile();

    // Listen for auth state changes
    const authUnsubscribe = () => {
      const interval = setInterval(() => {
        const newEmail = getCurrentUserEmail();
        if (newEmail !== currentEmail) {
          loadUserProfile();
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    const unsubscribe = authUnsubscribe();
    return () => unsubscribe();
  }, [currentEmail]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Improve the image upload handler to ensure sidebar updates
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedUser = { ...user, profileImage: reader.result };
      setUser(updatedUser);
      saveUserProfile(updatedUser);
    };
    reader.readAsDataURL(file);
  };

  // Update the saveUserProfile function to dispatch a custom event
  const saveUserProfile = (userData) => {
    if (currentEmail) {
      const localStorageKey = `userProfile_${currentEmail}`;
      localStorage.setItem(localStorageKey, JSON.stringify(userData));

      // Also update the legacy format for backward compatibility
      localStorage.setItem("userProfile", JSON.stringify(userData));

      // Dispatch a custom event for immediate updates
      window.dispatchEvent(new Event("profileUpdated"));

      // Also trigger storage event for cross-tab synchronization
      window.dispatchEvent(new Event("storage"));
    }
  };

  const toggleEdit = () => setEditMode(!editMode);

  const handleUpdate = () => {
    saveUserProfile(user);
    setEditMode(false);
  };

  const username = user?.username || "Guest";

  return (
    <Sidebar>
      <div className="p-6">
        <p className="text-sm mb-6">Dashboard Overview</p>

        <section className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex flex-col items-center">
            {user.profileImage ? (
              <img
                src={user.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#242E4D] text-white flex items-center justify-center text-4xl font-semibold">
                {username.charAt(0).toUpperCase()}
              </div>
            )}

            <label className="mt-3 flex items-center gap-2 cursor-pointer text-blue-600">
              <span className="text-[#242E4D] text-sm flex gap-1">
                <FaEdit className="mt-1" />
                Edit profile picture
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl text-[#242E4D] font-semibold">
              Hello <span>{username}</span>
            </h1>
            <p className="font-light text-sm text-black/50">{user.email}</p>
          </div>
        </section>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["username", "email", "gender", "phone", "address"].map(
              (field) => (
                <div key={field}>
                  <label className="block text-md font-semibold capitalize text-[#242E4D] mb-2">
                    {field}
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name={field}
                      value={user[field] || ""}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D]"
                    />
                  ) : (
                    <p className="text-gray-800 border-b border-gray-200 pb-1">
                      {user[field] || "—"}
                    </p>
                  )}
                </div>
              )
            )}
          </div>

          <div className="mt-8">
            {editMode ? (
              <button
                onClick={handleUpdate}
                className="flex items-center gap-2 text-white bg-[#242E4D] px-6 py-2 rounded cursor-pointer hover:bg-[#182038] transition ease-in-out duration-300">
                <FaSave /> Update Information
              </button>
            ) : (
              <button
                onClick={toggleEdit}
                className="flex items-center gap-2 text-white bg-[#242E4D] px-6 py-2 rounded cursor-pointer hover:bg-[#182038] transition ease-in-out duration-300">
                <FaEdit /> Edit Information
              </button>
            )}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Profile;
