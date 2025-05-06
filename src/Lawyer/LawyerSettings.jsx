"use client";

import { useState } from "react";
import LawyerSidebar from "../Lawyer/LawyerSidebar";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { deleteUser } from "firebase/auth";
import { X } from "lucide-react";
import { CiSettings } from "react-icons/ci";

const LawyerSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError("");
  };

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    setError("");

    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error("You must be logged in to delete your account");
      }

      // Delete user account from Firebase
      await deleteUser(user);

      // Clear local storage data
      const email = user.email;
      if (email) {
        localStorage.removeItem(`userProfile_${email}`);
      }
      localStorage.removeItem("userProfile");
      localStorage.removeItem("authUser");

      // Redirect to registration page
      navigate("/register");
    } catch (err) {
      console.error("Error deleting account:", err);

      // Handle specific error cases
      if (err.code === "auth/requires-recent-login") {
        setError(
          "For security reasons, please log out and log back in before deleting your account."
        );
      } else {
        setError(err.message || "Failed to delete account. Please try again.");
      }

      setIsDeleting(false);
    }
  };

  return (
    <LawyerSidebar>
      <div className="p-6">
        <h1 className="text-3xl mb-8 text-[#242E4D] font-semibold flex gap-1">
          <CiSettings className="text-4xl" /> Account Settings
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-medium text-[#242E4D] mb-4">Security</h2>
          <div className="flex flex-col gap-4">
            <Link
              to="/change-password"
              className="flex items-center text-[#242E4D] hover:text-[#182038] transition-colors">
              <span className="border-b border-dashed border-current">
                Change Password
              </span>
            </Link>
            <Link
              to="/two-factor"
              className="flex items-center text-[#242E4D] hover:text-[#182038] transition-colors">
              <span className="border-b border-dashed border-current">
                Two-step verification
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-medium text-red-600 mb-4">Danger Zone</h2>
          <p className="text-gray-600 mb-4">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button
            onClick={openModal}
            className="bg-red-600 hover:bg-red-700 text-sm cursor-pointer px-4 py-2 rounded text-white transition-colors">
            Delete Account
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close">
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-red-600 mb-2">
              Delete Account
            </h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete your account? This action cannot
              be undone and all your data will be permanently removed.
            </p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                disabled={isDeleting}>
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700 transition-colors flex items-center justify-center min-w-[100px]"
                disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </LawyerSidebar>
  );
};

export default LawyerSettings;
