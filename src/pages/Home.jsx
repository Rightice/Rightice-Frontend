import "react";
import bg from "../image/bg.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-contain bg-center lg:fixed overflow-scroll overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center h-full text-center text-white lg:text-6xl text-3xl font-bold">
        We Specialize In Providing Professional And Affordable Legal Assistance
        For All.
      </div>
      <div className="flex bg-white py-8 px-10">
        <div>
          <img src="home.png" className="" />
        </div>
        <div className="px-20 ">
          <h1 className="text-[#BA986B] text-3xl font-bold">ABOUT US</h1>
          <h1 className="text-3xl pt-4 font-bold">Legal Tech Startup</h1>
          <p className=" pt-8 text-xl text-justify ">
            Rightice.ng is a digital platform designed to address the lack of
            access to legal information, support and resources for people living
            in Nigeria and Africa at large by leveraging technology. <br />
            The platform aims to educate users about their rights, connect them
            legal professionals.
          </p>
          <div className="pt-4">
            <Link to="/about">
              <button className="bg-[#242D4E] rounded-md p-4 text-white">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
