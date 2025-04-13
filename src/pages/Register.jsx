import { useState } from "react";
import Lawhammer from "../image/2.jpg";
import Logo from "../components/logo";
import Google from "../image/Google.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Password check
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include a number and special character."
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to login after signup is successful
    } catch (err) {
      const errorCode = err.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          setError("This email is already in use.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email.");
          break;
        case "auth/weak-password":
          setError("Password is too weak.");
          break;
        default:
          setError("Signup failed. Please try again.");
          break;
      }
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      const isNewUser = result._tokenResponse?.isNewUser;

      if (isNewUser) {
        // New User? – keep them signed in and redirect to login
        navigate("/");
      } else {
        // If user already exists, sign them out and show message
        await auth.signOut();
        setError("You already have an account. Login instead.");
      }
    } catch (err) {
      setError("Google signup failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <img
          src={Lawhammer}
          alt="Law Hammer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242E4D] to-transparent p-5 flex flex-col justify-between">
          <Logo />
          <div className="text-white absolute inset-0 flex items-center flex-col gap-3 justify-center">
            <header className="text-3xl lg:text-5xl text-center">
              Welcome to
              <span className="text-[#BA986B] font-semibold"> Rightice.ng</span>
            </header>
            <p className="text-white/50">Get started by creating an account</p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-100 flex justify-center items-center p-6 lg:p-10 bg-white rounded-tl-[50px] rounded-tr-[50px] shadow-lg">
        <form
          className="w-full max-w-md flex flex-col gap-5"
          onSubmit={handleSignUp}>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">
            Create Account
          </h2>

          {/* Email input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
            required
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
            required
          />

          {/* Error message */}
          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm">
              {error}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#242E4D] text-white py-3 rounded-lg hover:bg-[#1a223c] transition duration-300 cursor-pointer">
            Sign Up
          </button>

          <div className="flex gap-3 justify-center items-center">
            <div className="border-b w-1/3 border-stone-300"></div>
            <p>or</p>
            <div className="border-b w-1/3 border-stone-300"></div>
          </div>

          {/* Google Signup */}
          <div
            className="flex items-center justify-center gap-3 p-3 border border-gray-400 rounded-lg cursor-pointer"
            onClick={handleGoogleSignUp}>
            <img src={Google} alt="Google" className="w-5" />
            <span className="text-sm text-stone-700">Sign up with Google</span>
          </div>

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
