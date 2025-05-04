import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 flex flex-col justify-between min-h-screen py-8">
        {/* Logo area */}
        <div className="w-[20%] mx-auto md:mx-0">
          {/* Logo component would go here */}
        </div>

        {/* Main content with flex to push content to center */}
        <div className="flex flex-col justify-center items-center gap-16 flex-grow">
          {/* Header section */}
          <div className="flex flex-col gap-5 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-[#242E4D] font-bold">
              Welcome to Righticeng
            </h1>
            <p className="text-gray-600">
              We Empower communities by providing affordable legal support and
              human rights education...
            </p>
          </div>

          {/* Selection section */}
          <div className="flex flex-col gap-6 w-full max-w-md">
            <p className="text-center text-lg text-[#242E4D] font-medium">
              How do you want to use Righticeng?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/lawyersignupform"
                className="bg-[#242E4D] text-white py-3 px-6 rounded-lg text-center hover:bg-[#1a2238] transition-colors w-full md:w-auto">
                As a Lawyer
              </Link>
              <Link
                to="/register"
                className="bg-[#242E4D] text-white py-3 px-6 rounded-lg text-center hover:bg-[#1a2238] transition-colors w-full md:w-auto">
                As a customer
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-center text-gray-500 mt-8">
          Copyright 2025 @Rightice. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default MainPage;
