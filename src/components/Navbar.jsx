import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Logo from "./logo";
import { auth } from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LogoutButton from "../components/LogoutButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <nav className="lg:bg-white lg:shadow-sm lg:flex lg:justify-between lg:items-center lg:p-1 lg:px-10 flex justify-between pt-6 px-5">
        {/* Logo */}
        <Logo />

        {/* Hamburger icon on mobile */}
        <button
          className="text-3xl lg:hidden text-[#fff]"
          onClick={() => setIsOpen(true)}>
          ☰
        </button>

        {/* Desktop navbar */}
        <ul className="hidden lg:flex gap-5 items-center text-black/70 text-sm">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/attorneys">Attorneys</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="lg:ml-20">
            {user ? (
              <Link to="/profile" className="text-[1.1rem] font-semibold leading-[.2rem]">
                Hello 👋 <br /> <span className="text-[10px] text-base text-black/50 font-normal">{user.email || user.displayName}</span>
              </Link>
            ) : (
              <Link to="/">Log in</Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col p-8">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                className="text-white text-3xl"
                onClick={() => setIsOpen(false)}>
                <IoClose />
              </button>
            </div>

            {/* Mobile Links */}
            <ul className="mt-10 flex flex-col gap-6 text-white text-xl py-10 font-medium">
              <li>
                {user ? (
                  <Link
                    to="/profile"
                    className="text-1xl font-semibold"
                    onClick={() => setIsOpen(false)}>
                    Welcome <br />
                    <span className="text-[14px] font-normal text-white/70">
                      {user.email || user.displayName}
                    </span>
                  </Link>
                ) : (
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Log in
                  </Link>
                )}
              </li>
              <li>
                <Link to="/home" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/attorneys" onClick={() => setIsOpen(false)}>
                  Attorneys
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact us
                </Link>
              </li>
            </ul>

            <LogoutButton />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
