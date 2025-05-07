"use client";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import Lawhammer from "../image/4.webp";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // NEW

  const { email, password } = formData;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedProfile = localStorage.getItem(`userProfile_${user.email}`);
        if (storedProfile) {
          const { role } = JSON.parse(storedProfile);
          if (role === "lawyer") {
            navigate("/lawyerdashboard");
          } else {
            navigate("/home");
          }
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!selectedRole) {
      setError("Please select a role before signing in.");
      setIsLoading(false);
      return;
    }

    if (!email || !password) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save auth user
      localStorage.setItem(
        "authUser",
        JSON.stringify({ email: user.email, displayName: user.displayName })
      );

      const profileKey = `userProfile_${user.email}`;
      const storedProfile = localStorage.getItem(profileKey);

      if (storedProfile) {
        const parsed = JSON.parse(storedProfile);
        const role = parsed.role || selectedRole;

        // Update profile if role wasn't stored before
        if (!parsed.role) {
          parsed.role = selectedRole;
          localStorage.setItem(profileKey, JSON.stringify(parsed));
        }

        navigate(role === "lawyer" ? "/lawyerdashboard" : "/home");
      } else {
        // No profile exists, save minimum with role
        const newProfile = {
          email: user.email,
          username: user.displayName || "Guest",
          role: selectedRole,
        };
        localStorage.setItem(profileKey, JSON.stringify(newProfile));

        navigate(selectedRole === "lawyer" ? "/lawyerdashboard" : "/home");
      }
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email. Please sign up first.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed login attempts. Please try again later.");
          break;
        default:
          setError("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <img
          src={Lawhammer || "/placeholder.svg"}
          alt="Law Hammer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242E4D] to-transparent p-5 flex flex-col justify-between">
          <div className="text-white absolute inset-0 flex items-center justify-center">
            <header className="text-3xl lg:text-5xl text-center">
              Welcome{" "}
              <span className="text-[#BA986B] font-semibold">Back!</span>
            </header>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative z-10 flex justify-center items-center p-6 lg:p-10 bg-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">
            Sign into your Account
          </h2>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none placeholder:text-sm"
            required
          />

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded px-3 py-2 pr-10 focus:outline-none placeholder:text-sm"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <div className="flex justify-end text-sm">
            <Link
              to="/forgot-password"
              className="text-[#242E4D] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Role selection buttons */}
          <div className="flex justify-between gap-4 mb-2">
            <button
              type="button"
              onClick={() => setSelectedRole("customer")}
              className={`w-full py-2 rounded-lg border cursor-pointer ${
                selectedRole === "customer"
                  ? "bg-[#242E4D] text-white"
                  : "bg-white text-[#242E4D] border-[#242E4D]"
              }`}>
              Customer
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("lawyer")}
              className={`w-full py-2 rounded-lg border cursor-pointer ${
                selectedRole === "lawyer"
                  ? "bg-[#242E4D] text-white"
                  : "bg-white text-[#242E4D] border-[#242E4D]"
              }`}>
              Lawyer
            </button>
          </div>

          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#242E4D] text-white py-3 rounded-lg hover:bg-[#1a223c] disabled:bg-gray-400 cursor-pointer">
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          <div className="mt-3 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-semibold text-[#242E4D]">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
