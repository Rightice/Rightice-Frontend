import "react";
import { Link } from "react-router-dom";
import Footerbg from "../image/footerimage.png";
import content from "../../content";
import Icon from "../components/Icon";
import Logo from "../components/logo";

const LawyerFooter = () => {
  return (
    <section className="relative bg-[#242E4D]">
      <div
        className="absolute right-0 top-0 h-full w-full lg:bg-contain bg-fit bg-left bg-no-repeat lg:bg-bottom opacity-10"
        style={{ backgroundImage: `url(${Footerbg})` }}></div>

      <div className="relative z-10 py-20 px-5 lg:px-32 lg:flex-row lg:flex lg:justify-between lg:items-center flex-col">
        <div className="flex flex-col gap-1">
          <Logo />
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-3xl font-semibold">{content.Footer.title}</h1>
            <p className="text-sm text-base text-white/50 lg:max-w-[60%] md:max-w-[40%]">
              {content.Footer.description}
            </p>
            <Icon />
          </div>
        </div>

        {/* Footer Links */}
        <div className="lg:mt-0 mt-10">
          <p className="text-white/50 text-sm text-base">
            {content.Footer.quickLinks}
          </p>
          <ul className="text-white text-2xl flex flex-col gap-3 lg:pt-5 pt-5">
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/lawyerdashboard">Home</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/lawyercontact">Contact Us</Link>
            </li>
            <li className="hover:text-white/50 transition ease-in-out duration-300">
              <Link to="/lawyerprofile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="lg:ml-32 lg:mr-32 border-white/20 ml-5 mr-5" />

      <div className="relative z-10 lg:flex-row lg:justify-between lg:px-32 py-10 flex flex-col gap-5 px-5">
        <p className="text-white text-sm">{content.Footer.copyright}</p>
        <div className="flex gap-2">
          <Link
            to="/privacy"
            className="underline text-sm text-white hover:text-white/50 transition ease-in-out duration-300">
            {content.Footer.privacy}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LawyerFooter;
