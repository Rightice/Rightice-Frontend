"use client";

import { useState, useEffect } from "react";
import LawyerSidebar from "../Lawyer/LawyerSidebar";
import { FaEdit, FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

// Get current user email from auth
const getCurrentUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return user?.email || null;
};

const LawyerProfile = () => {
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
          const oldProfile = JSON.parse(
            localStorage.getItem("userProfile") || "{}"
          );
          if (Object.keys(oldProfile).length > 0) {
            setUser(oldProfile);
            localStorage.setItem(localStorageKey, JSON.stringify(oldProfile));
          }
        }
      }
    };

    loadUserProfile();

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

  const saveUserProfile = (userData) => {
    if (currentEmail) {
      const localStorageKey = `userProfile_${currentEmail}`;
      localStorage.setItem(localStorageKey, JSON.stringify(userData));
      localStorage.setItem("userProfile", JSON.stringify(userData));

      window.dispatchEvent(new Event("profileUpdated"));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const isProfileComplete = (data) => {
    const requiredFields = [
      "username",
      "email",
      "gender",
      "phone",
      "address",
      "barId",
      "lawFirm",
    ];
    return requiredFields.every((field) => data?.[field]?.trim());
  };

  const handleUpdate = () => {
    saveUserProfile(user);
    setEditMode(false);

    if (isProfileComplete(user)) {
      Swal.fire({
        icon: "success",
        title: "Profile Completed",
        text: "You can now access your appointments.",
      });
    }
  };

  const toggleEdit = () => setEditMode(!editMode);

  const username = user?.username || "Guest";

  const fields = [
    { name: "username", label: "Username" },
    { name: "email", label: "Email" },
    { name: "gender", label: "Gender" },
    { name: "phone", label: "Phone" },
    { name: "address", label: "Address" },
    {
      name: "barId",
      label: "Bar Association ID",
      placeholder: "BAR12345678",
    },
    {
      name: "lawFirm",
      label: "Law Firm Name",
      placeholder: "Smith & Associates",
    },
  ];

  return (
    <LawyerSidebar>
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
              <div className="w-24 h-24 rounded-full bg-[#242E4D] text-[#BA986B] flex items-center justify-center text-4xl font-semibold">
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
            <p className="font-light text-sm text-[#BA986B]">{user.email}</p>
          </div>
        </section>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map(({ name, label }) => (
              <div key={name}>
                <label className="block text-md font-semibold text-[#242E4D] mb-2">
                  {label}
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name={name}
                    value={user[name] || ""}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none text-black/70 text-sm"
                  />
                ) : (
                  <p className="text-gray-800 border-b border-gray-200 pb-1">
                    {user[name] || "—"}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            {editMode ? (
              <button
                onClick={handleUpdate}
                className="flex items-center gap-2 text-white bg-[#242E4D] px-6 py-2 rounded cursor-pointer hover:bg-[#182038] transition ease-in-out duration-300">
                <FaSave /> Save Profile
              </button>
            ) : (
              <button
                onClick={toggleEdit}
                className="flex items-center gap-2 text-white bg-[#242E4D] px-6 py-2 rounded cursor-pointer hover:bg-[#182038] transition ease-in-out duration-300">
                <FaEdit /> Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </LawyerSidebar>
  );
};

export default LawyerProfile;
