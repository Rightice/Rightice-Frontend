import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import AttorneyOne from "../image/Attorney1.png";
import AttorneyTwo from "../image/Attorney2.png";
import AttorneyThree from "../image/Attorney3.png";
import BackOfAttorney from "../image/AttorneyBG.jpg"
import AttorneyFour from "../image/Attorney4.png";
import AttorneyFive from "../image/Attorney5.png";

const attorneys = [
  {
    id: 1,
    name: "Attorney One",
    area: "Corporate Law",
    image: AttorneyOne,
  },
  {
    id: 2,
    name: "Attorney Two",
    area: "Family Law",
    image: AttorneyTwo,
  },
  {
    id: 3,
    name: "Attorney Three",
    area: "Criminal Defense",
    image: AttorneyThree,
  },
  {
    id: 4,
    name: "Attorney Four",
    area: "Intellectual Property",
    image: AttorneyFour,
  },
  {
    id: 5,
    name: "Attorney Five",
    area: "Real Estate",
    image: AttorneyFive,
  },
  {
    id: 6,
    name: "Attorney Six",
    area: "Tax Law",
    image: AttorneyOne,
  },
  {
    id: 7,
    name: "Attorney Seven",
    area: "Labor Law",
    image: AttorneyFour}
];

const Attorneys = () => {
  // 1) Keep track of which “page” (group of 3) is active
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // 2) Pre‑slice into pages of 3 items each
  const pages = [];
  for (let i = 0; i < attorneys.length; i += cardsPerPage) {
    pages.push(attorneys.slice(i, i + cardsPerPage));
  }
  const pageCount = pages.length;

  // 3) Auto‑advance every 5s
  useEffect(() => {
    const pausa = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, 3000);
    return () => clearInterval(pausa);
  }, [pageCount]);

  useEffect(() => {
    function windowResize ()  {
      if (window.innerWidth < 640) 
        setCardsPerPage(1);
      else if (window.innerWidth < 1024) 
        setCardsPerPage(2);
       else 
        setCardsPerPage(3);
      }

    windowResize(); // Set initial value
    window.addEventListener("resize", windowResize); // Add event listener

    return () => window.removeEventListener("resize", windowResize); // Cleanup
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />

        {/* Section Header */}
<div className="text-center my-10">
  <p className="text-sm italic text-[#444] font-semibold">
    Find the Right Legal Help for Your Needs
  </p>
  <h1 className="text-2xl sm:text-3xl font-black text-[#242D4E]">
    Meet Our Attorneys
  </h1>
</div>

{/* Background Image only for Carousel section */}
<div className="relative mb-5">
  {/* Background Image */}
  <div
    className="absolute inset-0 h-50 bg-scale-down bg-center z-0 opacity-35"
    style={{
      backgroundImage: `url(${BackOfAttorney})`,
    }}
  ></div>

  {/* Foreground Carousel */}
  <div className="relative z-10 py-10">
    {/* Dot Indicators */}
    <div className="flex justify-center gap-2 mb-8">
      {pages.map((_, index) => (
        <button key={index} onClick={() => setPage(index)}>
          <FaCircle
            className={`text-[10px] ${
              page === index ? "text-gray-700" : "text-white"
            }`}
          />
        </button>
      ))}
    </div>

    {/* Visible cards */}
    <div
      className="flex justify-center gap-8 px-6"
 >
      {pages[page].map((attorney) => (
        <div
          key={attorney.id}
          className="sm:w-[280px] w-[300px] bg-[#1E2A47] text-white rounded-b-lg shadow-lg"
        >
          <div className="p-5 text-center pb-8">
            <a href="#"><h3 className="text-xl font-bold">{attorney.name}</h3></a>
            <p className="text-sm text-white/70">{attorney.area}</p>
          </div>
          <a href="">
          <img
            src={attorney.image}
            alt={attorney.name}
            className="w-full md:h-[330px] object-cover rounded-b-lg"
          />
          </a>
        </div>
      ))}
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};


export default Attorneys;
