import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";

const LogoutButton = ({ isOpen }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      setError("Failed to Logout");
    }
  };

  return (
    <div className="w-full">
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
  );
};

export default LogoutButton;
