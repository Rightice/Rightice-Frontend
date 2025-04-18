import { useState, useEffect, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";

// Icons
import { CiUser, CiSettings } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const navLinks = [
  { to: "/profile", icon: <CiUser />, label: "Profile" },
  { to: "/payment", icon: <MdOutlinePayments />, label: "Payment" },
  { to: "/privacy", icon: <SiGnuprivacyguard />, label: "Privacy Policy" },
  { to: "/settings", icon: <CiSettings />, label: "Settings" },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  // Redirect to /profile on initial load
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/profile");
    }
  }, [navigate]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to Logout");
    }
  };

  const renderNavLink = (link, showLabel = true) => (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-md transition-all duration-200 ${
          isActive ? "bg-white/20" : "hover:bg-white/10"
        }`
      }>
      <span className="text-lg">{link.icon}</span>
      {showLabel && <span>{link.label}</span>}
    </NavLink>
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-[#242E4D] text-white flex flex-col justify-between transition-all duration-300 ease-in-out 
        ${isOpen ? "w-52" : "w-16"} min-h-screen p-4 relative`}>
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-5 bg-white text-black p-1 rounded-full shadow-md">
          {isOpen ? <IoChevronBack /> : <IoChevronForward />}
        </button>

        {/* Top: User Info */}

        <div className="font-semibold truncate">
          {user ? (
            <span className="text-3xl text-base text-white font-normal">
              {user.email || "Guest"}
            </span>
          ) : (
            <NavLink to="/">Log in</NavLink>
          )}
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4 mt-6">
          {navLinks.slice(0, 3).map((link, index) => (
            <Fragment key={index}>{renderNavLink(link, isOpen)}</Fragment>
          ))}
        </nav>

        {/* Bottom: Settings + Logout */}
        <div className="flex flex-col gap-2">
          {renderNavLink(navLinks[3], isOpen)}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-all duration-200 w-full text-left">
            <span className="text-lg">
              <IoLogOutOutline />
            </span>
            {isOpen && <span>Logout</span>}
          </button>

          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm mt-2">
              {error}
            </p>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <section className="w-full ">
        <main className="w-full h-screen bg-gray-100 p-4">
          <div className="bg-[#242E4D] text-white h-32 rounded-md p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          {children}
        </main>
      </section>
    </div>
  );
};

export default Sidebar;
