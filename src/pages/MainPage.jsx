import { Link } from "react-router-dom";
import bg from "../image/AttorneyBG.webp";
import Logo from "../components/logo";
import FadeInWhenVisible from "../components/FadeInWhenVisible"
import { GoLaw } from "react-icons/go";
import { CiUser } from "react-icons/ci";

const MainPage = () => {
  return (
    <section
      className="min-h-screen bg-white lg:bg-cover bg-cover lg:bg-center lg:no-repeat overflow-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
      }}>
      <div className="container mx-auto px-4 flex flex-col justify-between min-h-screen py-8">
        <div className="lg:w-[50%] w-[70%] md:mx-0">
          <Logo />
        </div>

        {/* Main content */}
        <div className="flex flex-col justify-center items-center gap-16 flex-grow">
          {/* Header section */}
          <div className="flex flex-col gap-5 text-center lg:mt-0 mt-5">
            <FadeInWhenVisible>
              <h1 className="text-4xl md:text-6xl text-[#ffffff] font-bold typewriter">
                Welcome to Righticeng
              </h1>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-[#BA986B] lg:text-lg text-sm">
                We Empower communities by providing affordable legal support and
                human rights education...
              </p>
            </FadeInWhenVisible>
          </div>

          {/* Selection section */}
          <FadeInWhenVisible>
            <div className="flex flex-col gap-6 w-full max-w-md">
              <p className="text-center lg:text-lg text-sm text-[#ffffff]">
                How do you want to use Righticeng?
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  to="/lawyersignupform"
                  className="bg-[#242E4D] text-white py-3 px-6 rounded-lg text-center hover:bg-[#1a2238] transition-colors w-full md:w-auto flex gap-2">
                  <GoLaw className="text-white mt-1" />
                  As a Lawyer
                </Link>
                <Link
                  to="/register"
                  className="bg-[#242E4D] text-white py-3 px-6 rounded-lg text-center hover:bg-[#1a2238] transition-colors w-full md:w-auto flex gap-2">
                  <CiUser className="text-white mt-1" />
                  As a Customer
                </Link>
              </div>
              <div className="mt-3 text-sm text-center text-white/50">
                Already have an account?{" "}
                <Link to="/login" className="text-[#BA986B]">
                  Login
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Footer */}
        <div className="text-sm text-center text-white/50 mt-8">
          Copyright 2025 &copy;Righticeng. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default MainPage;
