import "react";
import LawyerNavbar from "./LawyerNavbar";
import bg from "../image/lawyerbg.jpg";

const LawyerDashboard = () => {
  return (
    <section>
      <div
        className="w-full bg-cover bg-center no-repeat overflow-auto min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
        }}>
        <LawyerNavbar />

        <div className="h-[90vh] flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-4xl font-bold text-[#BA986B] mb-6">
            Welcome, Legal Expert
          </h1>
          <p className="text-lg max-w-2xl">
            Thank you for joining Rightice.ng as a lawyer. You can now start
            offering consultations, manage cases, and connect with clients.
          </p>
          <div className="mt-6">
            <button className="bg-[#BA986B] px-6 py-3 rounded-md hover:bg-[#a57e54] transition-colors duration-300">
              Complete your profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerDashboard;
