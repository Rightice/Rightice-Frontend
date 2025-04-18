// ✅ Updated Signup Page with additional fields and localStorage saving
import { useState } from "react";
import Lawhammer from "../image/2.jpg";
import Logo from "../components/logo";
import Google from "../image/Google.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password, username, gender, phone, address } = form;

    if (!email || !password || !username || !gender || !phone || !address) {
      setError("Please fill in all fields.");
      return;
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include a number and special character."
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userProfile", JSON.stringify(form));
      navigate("/profile");
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
      if (isNewUser) navigate("/home");
      else {
        await auth.signOut();
        setError("You already have an account. Login instead.");
      }
    } catch (err) {
      setError("Google signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
        <img src={Lawhammer} alt="Law Hammer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242E4D] to-transparent p-5 flex flex-col justify-between">
          <Logo />
          <div className="text-white absolute inset-0 flex items-center flex-col gap-3 justify-center">
            <header className="text-3xl lg:text-5xl text-center">
              Welcome to <span className="text-[#BA986B] font-semibold">Rightice.ng</span>
            </header>
            <p className="text-white/50">Get started by creating an account</p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="w-full lg:w-1/2 lg:mt-0 -mt-20 relative z-100 flex justify-center items-center p-6 lg:p-10 bg-white rounded-tl-[30px] rounded-tr-[30px] shadow-lg">
        <form onSubmit={handleSignUp} className="w-full max-w-md flex flex-col gap-5">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#242E4D]">Create Account</h2>

          <input type="text" name="username" placeholder="Enter username" onChange={handleChange} className="input-style" required />
          <select name="gender" onChange={handleChange} className="input-style" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="tel" name="phone" placeholder="Enter phone number" onChange={handleChange} className="input-style" required />
          <input type="text" name="address" placeholder="Enter address" onChange={handleChange} className="input-style" required />

          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className="input-style" required />
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} className="input-style" required />

          {error && <p className="text-red-500 bg-red-100 p-3 rounded text-sm">{error}</p>}

          <button type="submit" className="w-full bg-[#242E4D] text-white py-3 rounded-lg hover:bg-[#1a223c]">Sign Up</button>

          <div className="flex gap-3 justify-center items-center">
            <div className="border-b w-1/3 border-stone-300"></div>
            <p>or</p>
            <div className="border-b w-1/3 border-stone-300"></div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 border border-gray-400 rounded-lg cursor-pointer" onClick={handleGoogleSignUp}>
            <img src={Google} alt="Google" className="w-5" />
            <span className="text-sm text-stone-700">Sign up with Google</span>
          </div>

          <div className="mt-3 text-sm text-center text-stone-700">
            Already have an account? <Link to="/" className="font-semibold text-[#242E4D]">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

// 📄 ProfilePage.jsx


// ✨ Add route for ProfilePage in App.jsx or wherever your routing is defined:
// <Route path="/profile" element={<Sidebar><ProfilePage /></Sidebar>} />
