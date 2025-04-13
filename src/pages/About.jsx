import "react";
import Navbar from "../components/Navbar";
import Card from "../components/about-card";
import Footer from "../components/Footer";
import aboutImg from "../image/about.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row items-center px-8 py-8 space-y-6 lg:space-y-0">

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={aboutImg}
              alt="About"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text Section */}
          <div className="lg:w-1/2 p-6 space-y-6">
            <h1 className="text-[#242D4E] font-bold text-2xl">
              Learn More About Us
            </h1>
            <h1 className="text-[#BA986B] text-3xl font-bold">
              Our Mission: Justice For All
            </h1>
            <p className="text-[#242D4E] text-lg text-justify">
              Rightice.ng was born out of a need to bridge the gap between
              underserved communities and access to justice. We believe everyone
              deserves the right to legal support, regardless of their financial
              background or location.
            </p>

            <h1 className="text-[#BA986B] text-3xl font-bold">
              Our Mission Statement
            </h1>
            <p className="text-[#242D4E] text-lg">
              To empower rural communities by providing free and affordable
              legal support and human rights education.
            </p>

            <h1 className="text-[#BA986B] text-3xl font-bold">
              Our Vision Statement
            </h1>
            <p className="text-[#242D4E] text-lg">
              A society where legal rights are understood and exercised by
              everyone.
            </p>

            <div className="pt-6">
              <p className="text-[#242D4E] text-lg">
                <a href="#" className="text-[#BA986B] underline">
                  Click here
                </a>{" "}
                to KNOW YOUR RIGHTS.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Areas Section */}
        <div className="bg-[#242D4E] text-center text-white py-12">
          <h1 className="text-[#BA986B] text-3xl font-bold">OUR PRACTICE</h1>
          <h2 className="text-2xl mt-2">Our Practice Areas</h2>
          <p className="text-xl mt-2 max-w-2xl mx-auto">
            At Rightice.ng, we cover a wide range of legal issues to help
            individuals and communities access justice.
          </p>
          <div className="mt-8">
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
