import "react";
import Lawhammer from "../image/2.jpg";
import Logo from "../components/logo";
import Google from "../image/Google.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Image Section with Black Gradient Overlay */}
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

      {/* Signup Form Section */}
      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-100 lg:rounded-none rounded-tl-[50px] rounded-tr-[50px] lg:shadow-none shadow-lg flex justify-center items-center p-6 lg:p-10 bg-white">
        <form className="w-full max-w-md flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">
            Create Account
          </h2>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full pb-3 border-b border-stone-300 focus:outline-none focus:border-blue-500 placeholder:text-sm focus:scale-105 transition"
          />

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

          <div className="flex items-center justify-center gap-3 p-3 border border-gray-400 rounded-lg cursor-pointer">
            <img src={Google} alt="Google" className="w-5" />
            <button className="text-sm text-stone-700">
              Sign up with Google
            </button>
          </div>

          <div className="mt-3 text-sm text-center text-stone-700">
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
