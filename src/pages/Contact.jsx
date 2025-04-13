import "react";
import Footer from "../components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import Navbar from "../components/Navbar";
import "@fontsource/lato";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="bg-[#242D4E] text-white text-left h-[524px] lg:h-[100vh] z-1 lg:w-[18%] px-4 m-10  sm:mb-25 rounded-tr-[25px] rounded-bl-[25px] lg:rounded-l-[25px] lg:rounded-tr-[0px] ">
          <div className="px-6 lg:px-0 xl:px-5 m-auto flex flex-col lg:justify-between gap-5 lg:gap-32">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[40px] font-[800] leading-[140%] pt-5 sm:pt-10 lg:pt-25">
                Contact Us
              </h1>
              <p className="text-left text-sm text-white/50 text-base  leading-[1.5rem] pt-3">
                At Rightice.ng, we’re committed to providing you with the
                support you need. <br /> Whether you have legal questions, want
                to partner with us, or need help accessing our resources, dont
                hesitate to contact us{" "}
              </p>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <div className="hidden sm:inline">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div className="text-left flex flex-col">
                  <p className="text-[1rem]">Call us</p>
                  <p className="text-[1rem] text-white/50">+234 xxxxxxxxxx</p>
                </div>
              </div>
              <div className="flex gap-4 items-center py-5">
                <div className="hidden sm:inline mt-3 lg:mt-0">
                  <GrSend className="text-2xl" />
                </div>
                <div className="text-left flex flex-col">
                  <p className="text-[1rem]">Email us</p>
                  <p className="text-[1rem] text-white/50">
                    support@rightice.ng
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="hidden sm:inline mt-2">
                  <HiMiniUsers className="text-2xl" />
                </div>
                <div className="text-left flex flex-col">
                  <p className="text-[1]">Partnership</p>
                  <p className="text-[1rem] text-white/50">
                    Partners@rightice.ng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:ml-20 text-center lg:w-[50vw]">
          <div className="mb-20 sm:mt-20 px-2 sm:px-[0px] sm:-ml-5 sm:text-left">
            <h1 className="text-[#242D4E] text-[33px] sm:text-5xl font-[700] leading-[140%]">
              We’re Here to Help You
            </h1>
            <p className="text-[#BA986BE3] text-[14.5px] sm:text-lg font-[500] leading-[140%]">
              Have questions or need assistance? Reach out to us, and we’ll get
              back to you promptly.
            </p>
          </div>
          <div className="sm:border-1 border-[#242D4E] pt-50 sm:p-50 sm:-ml-59 sm:-mb-50 sm:pr-90 m-auto sm:-mr-70 -z-1">
            <form
              className="grid lg:max-w-210 lg:w-[50vw] sm:w-[70vw] w-[100vw] px-3 sm:px-[0px] -mt-61 z-30 bg-white gap-10"
              action="submit">
              <input
                className="border-2 border-gray-500/60 focus:outline-none placeholder-[#242D4E] text-base text-[1rem] rounded-lg px-3 py-2 mt-5"
                type="text"
                name="Name"
                id="Name"
                placeholder="Full Name"
              />
              <input
                className="border-2 border-gray-500/60 focus:outline-none placeholder-[#242D4E] text-base text-[1rem] rounded-lg px-3 py-2"
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
              />
              <input
                className="border-2 border-gray-500/60 focus:outline-none placeholder-[#242D4E] text-base text-[1rem] rounded-lg px-3 py-2"
                type="text"
                name="Phone"
                id="Phone"
                placeholder="Phone Number"
              />
              <textarea
                className="border-2 border-gray-500/60 focus:outline-none placeholder-[#242D4E] text-base text-[1rem] rounded-lg px-3 py-2"
                rows="5.5"
                name="Message"
                id="Message"
                placeholder="Message"></textarea>
              <button
                className="bg-[#242D4E] w-32 flex text-white text-[1rem] max-lg:mx-auto mb-12 px-9 py-4 cursor-pointer rounded-lg"
                type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
