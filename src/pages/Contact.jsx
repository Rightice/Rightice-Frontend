import "react";
import Footer from "../components/Footer";
import callUs from "../image/CallUs.png";
import email from "../image/EmailUs.png";
import partner from "../image/Partnership.png";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <div className="bg-[#242D4E] text-white text-center font-[Roboto] h-[524px] lg:h-[1049px] z-1 lg:w-[26vw] px-4 m-10 lg:ml-15 sm:mb-25 rounded-tr-[25px] rounded-bl-[25px] lg:rounded-l-[25px] lg:rounded-tr-[0px] ">
          <div className="px-6 lg:px-0 xl:px-5 m-auto grid lg:grid-rows-2 gap-5 sm:gap-15 lg:gap-109 xl:gap-112">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[40px] 2xl:text-5xl font-[800] leading-[140%] pt-5 sm:pt-10 lg:pt-25">
                Contact Us
              </h1>
              <p className="text-left font-[500] text-[12px] sm:text-[13.8px] leading-[140%] mt-3">
                At Rightice.ng, we’re committed to providing you with the
                support you need. <br /> Whether you have legal questions, want
                to partner with us, or need help accessing our resources, dont
                hesitate to contact us{" "}
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="hidden sm:inline">
                  <img src={callUs} />
                </div>
                <div className="text-left">
                  <p className="font-[700] text-[2.0625rem] lg:text-[1.93rem] xl:text-[2.0625rem] leading[140%]">
                    Call us
                  </p>
                  <p className="font-[700] text-[19.41px] lg:text-[16.2px] xl:text-[19.41px] leading[140%] -mt-2">
                    +234 xxxxxxxxxx
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <div className="hidden sm:inline mt-3 lg:mt-0">
                  <img src={email} />
                </div>
                <div className="text-left">
                  <p className="font-[700] text-[2.0625rem] lg:text-[1.93rem] xl:text-[2.0625rem] leading[140%]">
                    Email us
                  </p>
                  <p className="font-[700] text-[19.41px] lg:text-[16.2px] xl:text-[19.41px] leading[140%] -mt-2">
                    support@rightice.ng
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <div className="hidden sm:inline mt-2">
                  <img src={partner} />
                </div>
                <div className="text-left">
                  <p className="font-[700] text-[2.0625rem] lg:text-[1.93rem] xl:text-[2.0625rem] leading[140%]">
                    Partnership
                  </p>
                  <p className="font-[700] text-[19.41px] lg:text-[16.2px] xl:text-[19.41px] leading[140%] -mt-2">
                    Partners@rightice.ng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[Roboto] sm:ml-20 text-center lg:w-[50vw]">
          <div className="mb-20 sm:mt-20 px-2 sm:px-[0px] sm:-ml-5 sm:text-left">
            <h1 className="text-[#242D4E] text-[33px] sm:text-5xl font-[700] leading-[140%]">
              We’re Here to Help You
            </h1>
            <p className="text-[#BA986BE3]/89 italic text-[14.5px] sm:text-lg font-[500] leading-[140%]">
              Have questions or need assistance?
              <br />
              Reach out to us, and we’ll get back to you promptly.
            </p>
          </div>
          <div className="sm:border-2 border-[#242D4E] pt-50 sm:p-50 sm:-ml-59 lg:pb-132 sm:-mb-50 sm:pr-90 m-auto sm:-mr-70 -z-1">
            <form
              className="grid lg:max-w-210 lg:w-[50vw] sm:w-[70vw] w-[100vw] px-3 sm:px-[0px] -mt-61 z-30 bg-white"
              action="submit"
            >
              <input
                className="w-full border-2 border-gray-500/60 outline outline-gray-500 placeholder-[#242D4E] text-base sm:text-[19.62px] rounded-[1px] mb-13 px-3 py-4"
                type="text"
                name="Name"
                id="Name"
                placeholder="Full Name"
              />
              <input
                className="w-full border-2 border-gray-500/60 outline outline-gray-500 placeholder-[#242D4E] text-base sm:text-[19.62px] rounded-[1px] mb-13 px-3 py-4"
                type="text"
                name="Email"
                id="Email"
                placeholder="Email"
              />
              <input
                className="w-full border-2 border-gray-500/60 outline outline-gray-500 placeholder-[#242D4E] text-base sm:text-[19.62px] rounded-[1px] mb-13 px-3 py-4"
                type="text"
                name="Phone"
                id="Phone"
                placeholder="Phone Number"
              />
              <textarea
                className="w-full border-2 border-gray-500/60 outline outline-gray-500 placeholder-[#242D4E] text-base sm:text-[19.62px] rounded-[1px] mb-7 px-3 py-4"
                rows="5.5"
                name="Message"
                id="Message"
                placeholder="Message"
              ></textarea>
              <button
                className="bg-[#242D4E] text-white text-[24px] font-[700] max-lg:mx-auto mb-12 px-9 py-4 w-[222px] h-[66px] rounded-3xl"
                type="submit"
              >
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
