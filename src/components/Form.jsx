import { VscSend } from "react-icons/vsc";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqiyla4",
        "template_cvt1xk6",
        form.current,
        "9fHWBTxesAyrS-Vf7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Email has been sent!",
            showConfirmButton: false,
            timer: 2000,
            background: "#FFFFFF",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send email. Please try again!",
            showConfirmButton: false,
            timer: 2000,
            background: "#FFFFFF",
          });
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl space-y-6">
        <input
          className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base placeholder-[#242D4E] focus:outline-none"
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
        <input
          className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base placeholder-[#242D4E] focus:outline-none"
          type="email"
          name="email"
          placeholder="Email"
          required
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
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="flex cursor-pointer bg-[#242D4E] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#1c233d] transition-all duration-300 w-fit mx-auto lg:mx-0">
          Send Message <VscSend className="mt-1 ml-1" />
        </button>
      </form>
    </div>
  );
};

export default Form;
