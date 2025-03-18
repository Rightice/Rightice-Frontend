import "react";
import { Link } from "react-router-dom";
import Footerbg from "../image/cellbg.png";
import Icon from "./Icon";
import Logo from "./logo";

const Footer = () => {
  return (
    <section className="relative bg-[#242E4D]">
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-right opacity-5"
        style={{ backgroundImage: `url(${Footerbg})` }}></div>

      <div className="relative z-10 py-20 px-5 lg:px-20 lg:flex-row lg:flex lg:justify-between lg:items-center flex-col">
        <div className="flex flex-col gap-1">
          <Logo />
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-3xl font-semibold">Rightice.ng</h1>
            <p className="text-sm text-base text-white/50">
              Empowering communities by providing affordable <br /> legal
              support and human rights education...
            </p>
            <Icon />
          </div>
        </div>

        {/* Footer Links */}
        <div className="lg:mt-0 mt-10">
          <p className="text-white/50 text-sm text-base">Quick Links</p>
          <ul className="text-white text-2xl flex flex-col gap-3 lg:pt-5 pt-5">
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/attorneys">Attorneys</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/consultation">Book Consultation</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="lg:ml-20 lg:mr-20 border-white/20 ml-5 mr-5" />

      <div className="relative z-10 lg:flex-row lg:justify-between lg:px-20 py-10 flex flex-col gap-5 px-5">
        <p className="text-white text-sm">
          Copyright 2025 @Rightice. All Rights Reserved
        </p>
        <div className="flex gap-2">
          <Link
            to="/"
            className="underline text-sm text-white hover:text-white/50 transition ease-in-out duration-300">
            Privacy Policy
          </Link>
          <Link
            to="/"
            className="underline text-sm text-white hover:text-white/50 transition ease-in-out duration-300">
            Terms & Condition
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
