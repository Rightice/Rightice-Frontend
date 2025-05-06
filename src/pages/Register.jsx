"use client";

import { useState } from "react";
import Lawhammer from "../image/2.webp";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
    phone: "",
    address: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // for UI feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "role") {
      setSelectedRole(value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password, username, gender, phone, address, role } = form;

    if (
      !email ||
      !password ||
      !username ||
      !gender ||
      !phone ||
      !address ||
      !role
    ) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include a number and special character."
      );
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const currentUser = userCredential.user;

      await updateProfile(currentUser, {
        displayName: username,
      });

      const localStorageKey = `userProfile_${email}`;
      localStorage.setItem(localStorageKey, JSON.stringify(form));
      localStorage.setItem("userProfile", JSON.stringify(form));
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          email,
          displayName: username,
          role,
        })
      );

      await auth.signOut();

      setError("");
      alert("Registration successful! Please login with your credentials.");

      // ✅ Navigate to login page after successful signup
      navigate("/login");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("Email is already in use. Please login instead.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
          <div className="text-white absolute inset-0 flex items-center flex-col gap-3 justify-center">
            <header className="text-3xl lg:text-5xl text-center">
              Welcome to{" "}
              <span className="text-[#BA986B] font-semibold">Rightice.ng</span>
            </header>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-10 flex justify-center items-center p-6 lg:p-10 bg-white rounded-tl-[30px] rounded-tr-[30px] shadow-lg">
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-md flex flex-col gap-5">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#242E4D]">
              Create your Account
            </h2>
            <p className="text-black/70">Get started by creating an account</p>
          </div>

          <div className="lg:flex lg:flex-row lg:gap-5 flex-col flex gap-5">
            <input
              type="text"
              name="username"
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none placeholder:text-black/70 placeholder:text-sm"
              required
            />
            <select
              name="gender"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none placeholder:text-sm"
              required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="lg:flex lg:flex-row lg:gap-5 flex-col flex gap-5">
            <input
              type="tel"
              name="phone"
              placeholder="+234 802 645 4589"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none placeholder:text-black/70 placeholder:text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none placeholder:text-black/70 placeholder:text-sm"
              required
            />
          </div>

          <div>
            <p className="text-sm text-black/70 mb-1">Signup as ?</p>
            <div className="flex gap-4">
              {["lawyer", "customer"].map((roleOption) => (
                <button
                  type="button"
                  key={roleOption}
                  onClick={() => {
                    setForm((prev) => ({ ...prev, role: roleOption }));
                    setSelectedRole(roleOption);
                  }}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedRole === roleOption
                      ? "bg-[#242E4D] text-white"
                      : "bg-white text-black border-gray-300"
                  }`}>
                  {roleOption.charAt(0).toUpperCase() + roleOption.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none placeholder:text-black/70 placeholder:text-sm"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none placeholder:text-black/70 placeholder:text-sm"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/70 cursor-pointer hover:text-gray-700 focus:outline-none">
              {showPassword ? (
                <Eye size={18} className="text-gray-500" />
              ) : (
                <EyeOff size={18} className="text-gray-500" />
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm">
              {error}
            </p>
          )}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed((prev) => !prev)}
            />
            <label htmlFor="terms" className="text-sm text-black/70">
              I agree to the{" "}
              <Link to="/termsandcondition" className="text-blue-700 underline">
                terms and conditions
              </Link>{" "}
              of Rightice.ng
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg transition duration-300 ease-in-out cursor-pointer ${
              agreed
                ? "bg-[#242E4D] text-white hover:bg-[#1a223c]"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={loading || !agreed}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="mt-3 text-sm text-center text-black/70">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#242E4D]">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
