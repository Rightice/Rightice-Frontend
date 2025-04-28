// import "react";
// import bg from "../image/courtroom.jpg";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import homeImg from "../image/2.webp";
// import TextGenerateEffectDemo from "../components/text-generate-effect-demo";

// const Home = () => {
//   return (
//     <section>
//       <div
//         className="h-screen w-full lg:bg-cover bg-contain lg:bg-center lg:no-repeat overflow-auto"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
//         }}>
//         <Navbar />
//         <div className="h-screen flex flex-col gap-10 justify-center items-center text-center px-4">
//           <h1 className="text-white lg:text-5xl text-3xl font-bold leading-tight">
//             We Specialize In Providing Professional And Affordable{" "}
//             <br className="hidden sm:block" /> Legal Assistance For All.
//           </h1>
//           <Link
//             className="text-white bg-[#BA986B] hover:bg-[#a57e54] px-6 py-3 rounded-md transition-colors duration-300"
//             to="/consultation">
//             Book Consultation
//           </Link>
//         </div>

//         <TextGenerateEffectDemo />

//         <div className="bg-white lg:h-[100vh] flex justify-center items-center py-10 px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto">
//             {/* Image Section */}
//             <div className="w-full lg:w-1/2">
//               <img
//                 src={homeImg}
//                 alt="Home"
//                 className="w-83 rounded-lg h-auto"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="w-full lg:w-1/2 flex flex-col gap-7">
//               <div>
//                 <h1 className="text-[#BA986B] text-3xl font-semibold">
//                   ABOUT US
//                 </h1>
//                 <p className="text-md text-[#242D4E]">Legal Tech Startup</p>
//               </div>
//               <p className="text-md text-stone-700 text-justify max-w-lg">
//                 Rightice.ng is a digital platform designed to address the lack
//                 of access to legal information, support, and resources for
//                 people living in Nigeria and Africa at large by leveraging
//                 technology. The platform aims to educate users about their
//                 rights and connect them with legal professionals.
//               </p>
//               <div>
//                 <Link
//                   to="/about"
//                   className="bg-[#242D4E] rounded-md px-6 py-3 text-white hover:bg-[#1c233d] transition ease-in-out duration-500">
//                   Learn more
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </section>
//   );
// };

// export default Home;
import "react";
import bg from "../image/courtroom.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import homeImg from "../image/2.webp";
import TextGenerateEffectDemo from "../components/text-generate-effect-demo";

const Home = () => {
  return (
    <section>
      <div
        className="h-screen w-full lg:bg-cover bg-contain lg:bg-center lg:no-repeat overflow-auto"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
        }}>
        <Navbar />
        <div className="h-screen flex flex-col gap-10 justify-center items-center text-center px-4">
          {/* Text Generate Effect positioned here for better visibility */}
          <div className="">
            <TextGenerateEffectDemo />
          </div>

          <Link
            className="text-white bg-[#BA986B] hover:bg-[#a57e54] px-6 py-3 rounded-md transition-colors duration-300"
            to="/consultation">
            Book Consultation
          </Link>
        </div>

        <div className="bg-white lg:h-[100vh] flex justify-center items-center py-10 px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={homeImg || "/placeholder.svg"}
                alt="Home"
                className="w-83 rounded-lg h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-7">
              <div>
                <h1 className="text-[#BA986B] text-3xl font-semibold">
                  ABOUT US
                </h1>
                <p className="text-md text-[#242D4E]">Legal Tech Startup</p>
              </div>
              <p className="text-md text-stone-700 text-justify max-w-lg">
                Rightice.ng is a digital platform designed to address the lack
                of access to legal information, support, and resources for
                people living in Nigeria and Africa at large by leveraging
                technology. The platform aims to educate users about their
                rights and connect them with legal professionals.
              </p>
              <div>
                <Link
                  to="/about"
                  className="bg-[#242D4E] rounded-md px-6 py-3 text-white hover:bg-[#1c233d] transition ease-in-out duration-500">
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