import "react";
import bg from "../image/bg.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import homeImg from "../image/home.png";

const Home = () => {
  return (
    <section>
      <div
        className="h-screen w-full bg-contain bg-center overflow-auto"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
        }}>
          <Navbar />
        <h1 className="flex items-center justify-center h-full text-center text-white lg:text-5xl text-3xl font-bold leading-tight px-4">
          We Specialize In Providing Professional And Affordable <br /> Legal
          Assistance For All.
        </h1>

        <div className="bg-white min-h-screen flex justify-center items-center py-10 px-6">
          <div className="flex flex-col lg:flex-row items-center gap-56 max-w-6xl mx-auto">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img src={homeImg} alt="Home" className="w-full h-auto" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-7">
              <h1 className="text-[#BA986B] text-3xl font-bold">ABOUT US</h1>
              <h1 className="text-3xl font-bold">Legal Tech Startup</h1>
              <p className="text-xl text-justify max-w-lg">
                Rightice.ng is a digital platform designed to address the lack
                of access to legal information, support, and resources for
                people living in Nigeria and Africa at large by leveraging
                technology. The platform aims to educate users about their
                rights and connect them with legal professionals.
              </p>
              <div>
                <Link
                  to="/about"
                  className="bg-[#242D4E] rounded-md px-6 py-3 text-white">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Home;
