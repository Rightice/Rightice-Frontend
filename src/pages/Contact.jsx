import "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import "@fontsource/lato";

const Contact = () => {
  return (
    <div className="overflow-x-hidden font-lato">
      <Navbar />

      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left Sidebar */}
        <div className="bg-[#242D4E] text-white lg:w-[20%] px-6 py-10 rounded-tr-3xl rounded-bl-3xl lg:rounded-l-3xl lg:rounded-tr-none m-4 lg:m-10">
          <div className="flex flex-col justify-between gap-10 h-full">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
                Contact Us
              </h1>
              <p className="text-white/70 text-base mt-4 leading-relaxed text-justify">
                At Rightice.ng, we’re committed to providing the support you
                need. Whether you have legal questions, want to partner with us,
                or need help accessing our resources — don’t hesitate to contact
                us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-xl mt-1 hidden sm:block" />
                <div>
                  <p className="font-semibold">Call us</p>
                  <p className="text-white/60">+234 xxxxxxxxxx</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GrSend className="text-xl mt-1 hidden sm:block" />
                <div>
                  <p className="font-semibold">Email us</p>
                  <p className="text-white/60">support@rightice.ng</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiMiniUsers className="text-xl mt-1 hidden sm:block" />
                <div>
                  <p className="font-semibold">Partnership</p>
                  <p className="text-white/60">partners@rightice.ng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 px-6 lg:px-16 py-10 flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#242D4E] leading-tight">
              We’re Here to Help You
            </h2>
            <p className="mt-4 text-[#BA986BE3] text-base lg:text-md font-medium">
              Have questions or need assistance? Reach out to us, and we’ll get
              back to you promptly.
            </p>
          </div>

          <form className="max-w-2xl space-y-6">
            <input
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base placeholder-[#242D4E] focus:outline-none"
              type="text"
              name="name"
              placeholder="Full Name"
            />
            <input
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base placeholder-[#242D4E] focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base placeholder-[#242D4E] focus:outline-none"
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
            <textarea
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base placeholder-[#242D4E] focus:outline-none"
              name="message"
              rows="5"
              placeholder="Message"></textarea>
            <button
              type="submit"
              className="bg-[#242D4E] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#1c233d] transition-all duration-300 w-fit mx-auto lg:mx-0">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
