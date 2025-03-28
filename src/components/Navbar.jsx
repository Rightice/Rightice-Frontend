import { useState } from "react";
import { Link } from "react-router";
import { IoClose } from "react-icons/io5";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="lg:bg-[#242E4D] lg:flex lg:justify-between z-100 lg:relative lg:items-center lg:py-2 lg:px-10 lg:mt-3 lg:rounded-[50px] flex justify-between pt-[5%] ml-[3%] mr-[3%]">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        <button
          className="text-2xl md:hidden text-[#fff]"
          onClick={() => setIsOpen(true)}>
          ☰
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-full bg-black text-[#fff] lg:text-[#433E49] z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } bg-black/100 transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:items-center md:justify-end md:w-auto md:bg-transparent`}>
          {/* Close button */}
          <button
            className="absolute top-11 right-3 text-white text-3xl md:hidden"
            onClick={() => setIsOpen(false)}>
            <IoClose />
          </button>

          <ul className="pt-[40%] flex flex-col justify-left items-left md:flex-row gap-7 lg:text-sm text-white text-2xl p-4 md:p-0">
            <li className="group relative inline-block">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/attorneys" onClick={() => setIsOpen(false)}>
                Attorneys
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/consultation" onClick={() => setIsOpen(false)}>
                Book Consultation
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Register */}
          <ul className="flex justify-left flex-row items-left lg:items-center gap-3 lg:ml-20 lg:mt-0 md:mt-0 mt-20 lg:text-sm text-2xl ml-5">
            <li className="group relative inline-block text-white lg:mt-0 mt-3">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="group relative text-[#242E4D] inline-block bg-white rounded-full pl-10 pr-10 pt-3 pb-3">
              <Link to="/register" onClick={() => setIsOpen(false)}>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
