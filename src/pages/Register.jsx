"use client";

import { useState } from "react";
import Lawhammer from "../image/2.jpg";
import Logo from "../components/logo";
import Google from "../image/Google.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password, username, gender, phone, address } = form;

    if (!email || !password || !username || !gender || !phone || !address) {
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

      // Update Firebase profile
      await updateProfile(currentUser, {
        displayName: username,
      });

      // Save user profile data with email-specific key
      const localStorageKey = `userProfile_${email}`;
      localStorage.setItem(localStorageKey, JSON.stringify(form));

      // Also save to the old format for backward compatibility
      localStorage.setItem("userProfile", JSON.stringify(form));

      // Save auth user for reference
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          email,
          displayName: username,
        })
      );

      navigate("/home");
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

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const isNewUser = result._tokenResponse?.isNewUser;

      if (isNewUser) {
        // Save basic profile for new Google users
        const userProfile = {
          email: user.email,
          username: user.displayName || "User",
          profileImage: user.photoURL,
        };

        const localStorageKey = `userProfile_${user.email}`;
        localStorage.setItem(localStorageKey, JSON.stringify(userProfile));
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            email: user.email,
            displayName: user.displayName,
          })
        );

        navigate("/home");
      } else {
        await auth.signOut();
        setError("You already have an account. Login instead.");
      }
    } catch (err) {
      console.error(err);
      setError("Google signup failed. Please try again.");
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
          <Logo />
          <div className="text-white absolute inset-0 flex items-center flex-col gap-3 justify-center">
            <header className="text-3xl lg:text-5xl text-center">
              Welcome to{" "}
              <span className="text-[#BA986B] font-semibold">Rightice.ng</span>
            </header>
            <p className="text-white/50">Get started by creating an account</p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-10 flex justify-center items-center p-6 lg:p-10 bg-white rounded-tl-[30px] rounded-tr-[30px] shadow-lg">
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-md flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">
            Create your Account
          </h2>

          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Enter address"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
            required
          />

          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#242E4D] text-white py-3 rounded-lg hover:bg-[#1a223c] transition duration-300 ease-in-out"
            disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="flex gap-3 justify-center items-center">
            <div className="border-b w-1/3 border-stone-300"></div>
            <p>or</p>
            <div className="border-b w-1/3 border-stone-300"></div>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-3 p-3 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out"
            onClick={handleGoogleSignUp}
            disabled={loading}>
            <img
              src={Google || "/placeholder.svg"}
              alt="Google"
              className="w-5"
            />
            <span className="text-sm text-stone-700">
              {loading ? "Processing..." : "Sign up with Google"}
            </span>
          </button>

          <div className="mt-3 text-sm text-center text-stone-700">
            Already have an account?{" "}
            <Link to="/" className="font-semibold text-[#242E4D]">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
