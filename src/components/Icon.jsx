import "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <div className="flex gap-2 text-2xl py-2">
      <Link to="" className="hover:text-white/50 transition ease-in-out duration-300">
        <TbBrandLinkedinFilled />
      </Link>
      <Link to="" className="hover:text-white/50 transition ease-in-out duration-300">
        <FaInstagramSquare />
      </Link>
      <Link to="" className="hover:text-white/50 transition ease-in-out duration-300">
        <MdOutlineFacebook />
      </Link>
    </div>
  );
};

export default Icon;
