import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
} from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Lawhammer from "../image/4.jpg";
import Logo from "../components/logo";
import Google from "../image/Google.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/home");
    });

    return () => unsubscribe();
  }, [navigate]);

  // Email/Password login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      setError("Pleaes Signup first before signing in.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      const isNewUser = result._tokenResponse?.isNewUser;

      if (isNewUser) {
        await auth.signOut();
        setError("Please Signup first before signing in with Google.");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setError("Google login failed. Please try again.");
      console.error(err);
    }
  };



  return (
    <div className="flex flex-col lg:flex-row-reverse lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <img
          src={Lawhammer}
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
      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-100 lg:rounded-none rounded-tl-[30px] rounded-tr-[30px] lg:shadow-none shadow-lg flex justify-center items-center p-6 lg:p-10 bg-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">
            Sign into your Account
          </h2>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
          />

          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#242E4D] text-white py-3 rounded-lg hover:bg-[#1a223c] transition duration-300 cursor-pointer">
            Sign in
          </button>

          <div className="flex gap-3 justify-center items-center">
            <div className="border-b w-1/3 border-stone-300"></div>
            <p>or</p>
            <div className="border-b w-1/3 border-stone-300"></div>
          </div>

          <div
            className="flex items-center justify-center gap-3 p-3 border border-gray-400 rounded-lg cursor-pointer"
            onClick={handleGoogleLogin}>
            <img src={Google} alt="Google" className="w-5" />
            <button
              type="button"
              className="text-sm text-stone-700 cursor-pointer">
              Continue with Google
            </button>
          </div>

          <div className="mt-3 text-sm text-center text-stone-700">
            Don’t have an account?{" "}
            <Link to="/register" className="font-semibold text-[#242E4D]">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
