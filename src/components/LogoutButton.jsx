import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogoutButton = () => {
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
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer transition">
        Logout
      </button>
      {error && (
        <p className="text-red-500 bg-red-100 p-3 rounded text-sm">{error}</p>
      )}
    </div>
  );
};

export default LogoutButton;
