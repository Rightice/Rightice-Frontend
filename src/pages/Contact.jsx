import "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import "@fontsource/lato";
import Form from "../components/Form";

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
                  <p className="text-white/60">+234 816 597 6800</p>
                  <p className="text-white/60">+234 809 945 6138</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GrSend className="text-xl mt-1 hidden sm:block" />
                <div>
                  <p className="font-semibold">Email us</p>
                  <p className="text-white/60">righticeng@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiMiniUsers className="text-xl mt-1 hidden sm:block" />
                <div>
                  <p className="font-semibold">Partnership</p>
                  <p className="text-white/60">partnersrighticeng@gmail.com</p>
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

          <Form />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;