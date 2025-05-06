import "react";
import LawyerSidebar from "./LawyerSidebar";

const LawyerAppointments = () => {
  return (
    <LawyerSidebar>
      <div className="flex justify-center items-center text-2xl h-screen text-[#242E4D]">
        You have no appointments available at this time.
      </div>
    </LawyerSidebar>
  );
};

export default LawyerAppointments;
