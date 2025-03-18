import "react";
import bg from "../image/bg.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-contain bg-center lg:fixed overflow-scroll overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
      }}>
      <Navbar />
      <div className="flex items-center justify-center h-full text-center text-white lg:text-6xl text-3xl font-bold">
        We Specialize In Providing Professional And Affordable Legal Assistance
        For All.
      </div>

      <Footer />
    </div>
  );
};

export default Home;
