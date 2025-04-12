import "react";
import image from "../image/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="z-100 relative">
      <Link to="/home">
        <img src={image} className="w-[25%]" />
      </Link>
    </div>
  );
};

export default Logo;
