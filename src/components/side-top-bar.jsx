"use client";

import { useState, useEffect, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { Link } from "react-router-dom";

// Icons
import { CiUser, CiSettings } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

import LogoutButton from "../components/LogoutButton";

const navLinks = [
  { to: "/profile", icon: <CiUser />, label: "Profile" },
  { to: "/payment", icon: <MdOutlinePayments />, label: "Payment" },
  { to: "/privacy", icon: <SiGnuprivacyguard />, label: "Privacy Policy" },
  { to: "/settings", icon: <CiSettings />, label: "Settings" },
];

const Sidebar = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("Guest");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

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

    const handleProfileUpdate = () => loadUserProfile();
    window.addEventListener("profileUpdated", handleProfileUpdate);
    window.addEventListener("storage", handleProfileUpdate);

    return () => {
      window.removeEventListener("profileUpdated", handleProfileUpdate);
      window.removeEventListener("storage", handleProfileUpdate);
    };
  }, [user]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/profile");
    }
  }, [navigate]);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
            to="/home"
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
            <div className="font-semibold text-white truncate w-full">
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

          {/* Logout Button */}
          {user && <LogoutButton isOpen={isOpen} />}
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
