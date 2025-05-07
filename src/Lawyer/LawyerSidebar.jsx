"use client";

import { useState, useEffect, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { Link } from "react-router-dom";
// Icons
import { CiUser, CiSettings } from "react-icons/ci";
// import { MdOutlinePayments } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import {
  IoLogOutOutline,
  IoChevronForward,
  IoChevronBack,
} from "react-icons/io5";

const navLinks = [
  { to: "/lawyerprofile", icon: <CiUser />, label: "Profile" },
  // { to: "/payment", icon: <MdOutlinePayments />, label: "Payment" },
  { to: "/lawyerappointments", icon: <SiGnuprivacyguard />, label: "Appointments" },
  { to: "/lawyersettings", icon: <CiSettings />, label: "Settings" },
];

const LawyerSidebar = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("Guest");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  // Load user profile data
  useEffect(() => {
    const loadUserProfile = () => {
      if (user?.email) {
        const localStorageKey = `userProfile_${user.email}`;
        const storedProfile = localStorage.getItem(localStorageKey);
        if (storedProfile) {
          const parsed = JSON.parse(storedProfile);
          setProfileImage(parsed.profileImage || null);
          setUsername(parsed.username || user.displayName || "Guest");
        } else {
          // Fallback to old storage format
          const oldProfile = localStorage.getItem("userProfile");
          if (oldProfile) {
            const parsed = JSON.parse(oldProfile);
            setProfileImage(parsed.profileImage || null);
            setUsername(parsed.username || user.displayName || "Guest");
          }
        }
      }
    };

    loadUserProfile();

    // Create a custom event listener for profile updates
    const handleProfileUpdate = () => loadUserProfile();
    window.addEventListener("profileUpdated", handleProfileUpdate);

    // Also listen for storage events for cross-tab synchronization
    window.addEventListener("storage", handleProfileUpdate);

    return () => {
      window.removeEventListener("profileUpdated", handleProfileUpdate);
      window.removeEventListener("storage", handleProfileUpdate);
    };
  }, [user]);

  // Redirect to profile page if at root
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/profile");
    }
  }, [navigate]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      const email = auth.currentUser?.email;

      await signOut(auth);

      // Clean up specific user profile data from localStorage
      if (email) {
        localStorage.removeItem(`userProfile_${email}`);
      }

      // Optionally, remove auth-related global flags
      localStorage.removeItem("authUser");

      // Reset UI state
      setUser(null);
      setProfileImage(null);
      setIsOpen(false);

      // Navigate to login page
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };


  const renderNavLink = (link) => (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-md transition-all duration-200 ${
          isActive ? "bg-white/20 font-medium" : "hover:bg-white/10"
        }`
      }>
      <span className="text-2xl">{link.icon}</span>
      {isOpen && <span>{link.label}</span>}
    </NavLink>
  );

  return (
    <div className="flex h-screen">
      <aside
        className={`bg-[#242E4D] text-white flex flex-col justify-between transition-all duration-300 ease-in-out 
        ${isOpen ? "w-64" : "w-20"} min-h-screen p-4 relative`}>
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-5 bg-white text-black p-1 rounded-full shadow-md z-10">
          {isOpen ? <IoChevronBack /> : <IoChevronForward />}
        </button>

        <nav className="flex flex-col gap-4">
          <Link
            to="/lawyerdashboard"
            className={`pb-10 text-2xl font-semibold hover:text-white/50 transition ease-in-out duration-500 ${
              !isOpen && "text-center"
            }`}>
            {isOpen ? "Rightice.ng" : "R"}
          </Link>
          {navLinks.map((link, index) => (
            <Fragment key={index}>{renderNavLink(link)}</Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center text-white font-bold">
            {profileImage ? (
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg";
                }}
              />
            ) : (
              <span className="text-sm">
                {username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {isOpen && (
            <div className="font-semibold text-white truncate">
              {user ? (
                <span className="text-base font-normal">{username}</span>
              ) : (
                <NavLink to="/" className="text-base font-normal text-white">
                  Log in
                </NavLink>
              )}
              {user && (
                <p className="font-light text-[10px] text-[#BA986B]">
                  {user.email}
                </p>
              )}
            </div>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-all duration-200 text-left ml-auto cursor-pointer"
            title="Logout">
            <span className="text-2xl">
              <IoLogOutOutline />
            </span>
            {/* {isOpen && <span>Logout</span>} */}
          </button>
        </div>

        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded text-sm mt-2">
            {error}
          </p>
        )}
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default LawyerSidebar;
