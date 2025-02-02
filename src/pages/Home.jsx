import "react";
import bg from "../image/bg.png";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-contain bg-center lg:top-0 lg:absolute"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
      }}>
      <div className="flex items-center justify-center h-full text-center text-white text-6xl font-bold">
        We Specialize In Providing Professional And Affordable Legal Assistance
        For All.
      </div>
    </div>
  );
};

export default Home;
