"use client";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { LogOut, User, Menu } from "lucide-react";
import Logo from "../components/logo";
import { auth } from "../auth/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const LawyerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);

      // Load profile image if user is logged in
      if (currentUser?.email) {
        const localStorageKey = `userProfile_${currentUser.email}`;
        const storedProfile = localStorage.getItem(localStorageKey);
        if (storedProfile) {
          const parsed = JSON.parse(storedProfile);
          setProfileImage(parsed.profileImage || null);
        }
      } else {
        setProfileImage(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Listen for storage events to update profile in real-time
  useEffect(() => {
    const handleStorageChange = () => {
      if (user?.email) {
        const localStorageKey = `userProfile_${user.email}`;
        const storedProfile = localStorage.getItem(localStorageKey);
        if (storedProfile) {
          const parsed = JSON.parse(storedProfile);
          setProfileImage(parsed.profileImage || null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("profileUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("profileUpdated", handleStorageChange);
    };
  }, [user]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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

  const username = user?.displayName || "Guest";

  const navLinks = [
    { to: "/lawyerdashboard", label: "Home" },
    { to: "/lawyerprofile", label: "Profile" },
    { to: "/lawyercontact", label: "Contact us" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="z-40 bg-transparent">
      <nav className="lg:flex lg:justify-between lg:items-center lg:p-1 lg:px-10 flex justify-between py-6 px-5 pb-4">
        {/* Logo */}
        <div className="lg:w-[40%]">
          <Logo />
        </div>

        {/* Hamburger icon on mobile */}
        <button
          className="text-3xl lg:hidden text-[#fff] focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu">
          <Menu size={28} />
        </button>

        {/* Desktop navbar */}
        <ul className="hidden lg:flex gap-5 items-center text-white/70 text-sm">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:text-white/30 transition-colors py-2 px-1 ${
                  isActive(link.to)
                    ? "text-[#BA986B] font-medium border-b-2 border-[#BA986B]"
                    : ""
                }`}>
                {link.label}
              </Link>
            </li>
          ))}

          <li className="lg:ml-10 flex items-center">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/lawyerprofile"
                  className="flex items-center gap-3 hover:bg-black/10 px-3 py-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#242E4D]/10 flex items-center justify-center">
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
                      <User className="h-5 w-5 text-[#fff]" />
                    )}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#fff]">
                      Hello 👋
                    </span>
                    <p className="text-xs text-white/70">{username}</p>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-2 text-white hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                  aria-label="Logout"
                  title="Logout">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-[#242E4D] text-white px-4 py-2 rounded hover:bg-[#1a223c] transition-colors">
                Log in
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Overlay with animation */}
        <div
          className={`fixed inset-0 bg-black/90 z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
          <div
            className={`flex flex-col p-8 h-full transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            {/* Close Button */}
            <div className="flex justify-between items-center">
              {/* <Logo /> */}
              <button
                className="text-white text-3xl focus:outline-none right-5 top-10 absolute"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu">
                <IoClose size={28} />
              </button>
            </div>

            {/* User Profile in Mobile Menu */}
            {user && (
              <div className="mt-20 flex items-center gap-3 border-b border-white/20 pb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
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
                    <User className="h-6 w-6 text-white" />
                  )}
                </div>
                <Link to="/profile">
                  <p className="text-white font-medium">Welcome</p>
                  <p className="text-sm text-[#BA986B]">{username}</p>
                </Link>
              </div>
            )}

            {/* Mobile Links */}
            <ul className="mt-8 flex flex-col gap-6 text-white text-xl font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block transition-colors hover:text-[#BA986B] ${
                      isActive(link.to) ? "text-[#BA986B]" : ""
                    }`}
                    onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}

              {!user && (
                <li className="mt-4">
                  <Link
                    to="/login"
                    className="inline-block bg-white text-[#242E4D] px-6 py-2 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}>
                    Log in
                  </Link>
                </li>
              )}
            </ul>

            {/* Logout Button in Mobile Menu */}
            {user && (
              <button
                onClick={handleLogout}
                className="mt-auto mb-8 flex items-center gap-2 text-white bg-red-600 w-32 hover:bg-red-600/30 px-4 py-3 rounded-lg transition-colors cursor-pointer">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LawyerNavbar;
