import "react";
import Navbar from "../components/Navbar";
import Card from "../components/about-card";
import Footer from "../components/Footer"


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className=" flex justify-content-center px-8  py-4 m-2 ">
          <div className="about-img p-4 w-full  ">
            <img src="about.png" alt="" />
          </div>
          <div className="p-8">
            <div>
              <h1 className="text-[#242D4E] font-bold text-2xl">
                Learn More About Us
              </h1>
              <h1 className="text-[#BA986B] text-3xl font-bold">
                Our Mission: Justice For All
              </h1>
              <p className="text-[#242D4E] pt-2 text-lg text-justify">
                Rightice.ng was born out of a need to bridge the gap between
                undeserved communities and access to justice. We believe
                everyone deserves the right to legal support, regardless of
                their finacial background or location.
              </p>
            </div>
            <div className="pt-8">
              <h1 className="text-[#BA986B] text-3xl font-bold">
                Our Mission Statement
              </h1>
              <p className="text-[#242D4E] pt-2 text-lg">
                To empower rural communities by providing free and affordable
                legal support and human rights education.
              </p>
            </div>
            <div className="pt-8">
              <h1 className="text-[#BA986B] text-3xl font-bold">
                Our Vision Statement
              </h1>
              <p className="text-[#242D4E] pt-2 text-lg">
                A society where legal rights are understood and exercised by
                everyone
              </p>
            </div>
            <div className="pt-12">
              <p className="text-[#242D4E] pt-2 text-lg">
                <a className="text-[#BA986B]"> Click here</a> to KNOW YOUR
                RIGHTS
              </p>
            </div>
          </div>
        </div>
        <div className="middle bg-[#242D4E] flex justify-content-center p-4">
          <div className="right py-20 px-4">
            <h1 className="text-[#BA986B] text-3xl font-bold">OUR PRACTICE</h1>
            <h2 className="text-white text-2xl"> Our Practice Areas</h2>
            <p className="text-white text-xl">
              At Rightice.ng, we cover a wide range of legal issues to help{" "}
              <br />
              individuals and communities access justice.
            </p>
          </div>
          <div className="left px-8 ">
            <div className="">
              <Card />
            </div>
          </div>
        </div>
      </div>
      {/* middle */}

      <div className="bg-white h-20">
        
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
