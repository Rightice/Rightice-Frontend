import { useState } from "react";
import { Link } from "react-router";
import { IoClose } from "react-icons/io5";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="lg:flex lg:justify-between lg:items-center lg:pt-[2%] flex justify-between pt-[5%] ml-[3%] mr-[3%]">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        <button className="text-2xl md:hidden" onClick={() => setIsOpen(true)}>
          ☰
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-full bg-black text-[#fff] lg:text-[#433E49] z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:items-center md:justify-end md:w-auto md:bg-transparent`}>
          {/* Close button */}
          <button
            className="absolute top-6 right-4 text-white text-3xl md:hidden"
            onClick={() => setIsOpen(false)}>
            <IoClose />
          </button>

          <ul className="pt-[40%] flex flex-col justify-center items-center md:flex-row gap-5 lg:text-sm text-white text-2xl p-4 md:p-0">
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
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/attorneys" onClick={() => setIsOpen(false)}>
                Attorneys
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block">
              <Link to="/rights" onClick={() => setIsOpen(false)}>
                Know your Rights
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block border border-[#BA986B] rounded-[50px] pl-7 pr-7 pt-3 pb-3 hover:bg-[#BA986B] transition ease-in duration-300">
              <Link to="/attorneys" onClick={() => setIsOpen(false)}>
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
