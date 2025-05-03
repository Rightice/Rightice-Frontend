import "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/about-card";
import Footer from "../components/Footer";
import aboutImg from "../image/about.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-20 items-center px-8 py-8 space-y-6 lg:space-y-0">
          {/* Image Section */}
          <div className="lg:w-83 flex justify-center">
            <img
              src={aboutImg}
              alt="About"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-[#242D4E] font-semibold text-3xl">
              Learn More About Us
            </h1>
            <br />
            <h1 className="text-[#BA986B] text-lg">
              Our Mission: Justice For All
            </h1>
            <p className="text-[#242D4E] text-md text-justify">
              Rightice.ng was born out of a need to bridge the gap between
              underserved communities and access to justice. We believe everyone
              deserves the right to legal support, regardless of their financial
              background or location.
            </p>
            <br />
            <h1 className="text-[#BA986B] text-lg">Our Mission Statement</h1>
            <p className="text-[#242D4E] text-md">
              To empower rural communities by providing free and affordable
              legal support and human rights education.
            </p>
            <br />
            <h1 className="text-[#BA986B] text-lg">Our Vision Statement</h1>
            <p className="text-[#242D4E] text-md">
              A society where legal rights are understood and exercised by
              everyone.
            </p>
            <br />
            <div className="pt-6">
              <p className="text-[#242D4E] text-md">
                <Link to="/blog" className="text-[#BA986B] underline">
                  Click here
                </Link>{" "}
                to KNOW YOUR RIGHTS.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Areas Section */}
        <div className="bg-[#EFEFF7] flex flex-col gap-3 text-center text-white py-12">
          <h1 className="text-[#242D4E] text-3xl font-bold">
            Our Practice Areas
          </h1>
          <p className="text-lg text-base max-w-2xl mx-auto text-[#242D4E]">
            At Rightice.ng, we cover a wide range of legal issues to help
            individuals and communities access justice.
          </p>
          <div className="">
            <Card />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
