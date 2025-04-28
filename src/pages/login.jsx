"use client";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
} from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Lawhammer from "../image/4.webp";
import Logo from "../components/logo";
import Google from "../image/Google.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { email, password } = formData;

  // Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/home");
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

  // Email/Password login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

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

      // Save auth user for reference
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
        })
      );

      navigate("/home");
    } catch (err) {
      console.error(err);

      // Handle specific error codes
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
          setError(
            "Login failed. Please try again."
          );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const isNewUser = result._tokenResponse?.isNewUser;
      const user = result.user;

      if (isNewUser) {
        await auth.signOut();
        setError("Please sign up first before signing in with Google.");
      } else {
        // Save auth user for reference
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            email: user.email,
            displayName: user.displayName,
          })
        );

        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      if (err.code === "auth/popup-closed-by-user") {
        setError("Sign in was cancelled. Please try again.");
      } else {
        setError("Google login failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
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
          <div className="text-white absolute inset-0 flex items-center justify-center">
            <header className="text-3xl lg:text-5xl text-center">
              Welcome{" "}
              <span className="text-[#BA986B] font-semibold">Back!</span>
            </header>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-10 lg:rounded-none rounded-tl-[30px] rounded-tr-[30px] lg:shadow-none shadow-lg flex justify-center items-center p-6 lg:p-10 bg-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">
            Sign into your Account
          </h2>

          <div className="space-y-1">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="w-full pb-3 border border-stone-300 rounded px-3 py-2 focus:outline-none placeholder:text-sm"
              required
            />
          </div>

          <div className="space-y-1">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className="w-full pb-3 border border-stone-300 rounded px-3 py-2 focus:outline-none placeholder:text-sm"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-[#242E4D] hover:underline">
              Forgot password?
            </Link>
          </div>

          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#242E4D] text-white py-3 rounded-lg hover:bg-[#1a223c] transition duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer">
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          <div className="flex gap-3 justify-center items-center">
            <div className="border-b w-1/3 border-stone-300"></div>
            <p>or</p>
            <div className="border-b w-1/3 border-stone-300"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="flex items-center justify-center gap-3 p-3 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-50 transition disabled:bg-gray-100 disabled:cursor-not-allowed">
            <img
              src={Google || "/placeholder.svg"}
              alt="Google"
              className="w-5"
            />
            <span className="text-sm text-stone-700">
              {googleLoading ? "Signing in..." : "Continue with Google"}
            </span>
          </button>

          <div className="mt-3 text-sm text-center text-stone-700">
            Dont have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#242E4D] hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
