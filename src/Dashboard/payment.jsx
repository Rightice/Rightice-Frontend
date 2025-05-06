import "react";
import Sidebar from "../components/side-top-bar";
import { Link } from "react-router-dom";

const payment = () => {
  return (
    <Sidebar>
      <div className="flex justify-center items-center text-2xl h-screen text-[#242E4D]">
        You haven&apos;t made payments yet.{" "}
        <Link to="/consultation" className="px-2 underline">Proceed</Link> to make your payments.
      </div>
    </Sidebar>
  );
};

export default payment;