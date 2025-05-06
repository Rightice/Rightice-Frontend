import "react";
import image from "../image/logo.png";

const Logo = () => {
  return (
    <div className="z-100 relative">
      <img src={image} className="lg:w-[13%] w-[20%]" />
    </div>
  );
};

export default Logo;
