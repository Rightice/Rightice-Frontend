"use client";

import { useState, useEffect, useCallback } from "react";
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AttorneyOne from "../image/Attorney1.webp";
import AttorneyTwo from "../image/Attorney2.jpeg";
import AttorneyThree from "../image/Attorney3.jpeg";
import BackOfAttorney from "../image/AttorneyBG.webp";
import AttorneyFour from "../image/Attorney4.avif";
import AttorneyFive from "../image/Attorney5.jpeg";
import AttorneySix from "../image/Attorney6.jpeg";

const attorneys = [
  {
    id: 1,
    name: "Barr. Joy Edwards",
    area: "Family Law",
    image: AttorneyOne,
  },
  {
    id: 2,
    name: "Barr. Esther Adeleke",
    area: "Divorce Attorney",
    image: AttorneyTwo,
  },
  {
    id: 3,
    name: "Barr. Michael Adeniyan",
    area: "Criminal Defense",
    image: AttorneyThree,
  },
  {
    id: 4,
    name: "Barr. Cynthia cole",
    area: "Intellectual Property",
    image: AttorneyFour,
  },
  {
    id: 5,
    name: "Barr. Kelvin Johnson",
    area: "Litigator",
    image: AttorneyFive,
  },
  {
    id: 6,
    name: "Barr. Rachael Adeyemi",
    area: "Tax Law",
    image: AttorneySix,
  },
];

const Attorneys = () => {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate pages based on cardsPerPage
  const getPages = useCallback(() => {
    const pagesArray = [];
    for (let i = 0; i < attorneys.length; i += cardsPerPage) {
      pagesArray.push(attorneys.slice(i, i + cardsPerPage));
    }
    return pagesArray;
  }, [attorneys, cardsPerPage]);

  const pages = getPages();
  const pageCount = pages.length;

  // Handle navigation
  const goToPage = useCallback(
    (newPage) => {
      setIsTransitioning(true);
      setPage((newPage + pageCount) % pageCount);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 5000);
    },
    [pageCount] // Dependency array
  );

  const nextPage = () => goToPage(page + 1);
  const prevPage = () => goToPage(page - 1);

  // Auto-advance with reset on manual navigation
  useEffect(() => {
    const autoAdvance = setInterval(() => {
      if (!isTransitioning) {
        goToPage(page + 1);
      }
    }, 5000);

    return () => clearInterval(autoAdvance);
  }, [page, isTransitioning, goToPage]);

  // Handle responsive cardsPerPage
  useEffect(() => {
    function handleResize() {
      let newCardsPerPage;
      if (window.innerWidth < 640) {
        newCardsPerPage = 1;
      } else if (window.innerWidth < 1024) {
        newCardsPerPage = 2;
      } else {
        newCardsPerPage = 2;
      }

      if (newCardsPerPage !== cardsPerPage) {
        setCardsPerPage(newCardsPerPage);
        // Reset to first page when layout changes
        setPage(0);
      }
    }

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardsPerPage, getPages, page]);

  // Recalculate pages when cardsPerPage changes
  useEffect(() => {
    // Ensure current page is valid after cardsPerPage changes
    if (page >= getPages().length) {
      setPage(0);
    }
  }, [cardsPerPage, getPages, page]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Section Header */}
      <div className="text-center my-10">
        <p className="text-sm italic text-[#BA986B]">
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
          }}></div>

        {/* Foreground Carousel */}
        <div className="relative z-10 py-10">
          {/* Carousel Container */}
          <div className="overflow-hidden px-4 sm:px-6 md:px-8">
            {/* Visible cards with transition */}
            <div
              className={`flex justify-center transition-transform duration-500 ease-in-out ${
                isTransitioning ? "opacity-100" : "opacity-100"
              }`}
              style={{
                transform: `translateX(calc(-${page * 100}% / ${pageCount}))`,
                gap: "2rem",
                width: `${pageCount * 100}%`,
              }}>
              {pages.map((pageAttorneys, pageIndex) => (
                <div
                  key={pageIndex}
                  className="flex justify-center gap-4 sm:gap-6 md:gap-8 w-full">
                  {pageAttorneys.map((attorney) => (
                    <div
                      key={attorney.id}
                      className="flex-1 max-w-[300px] min-w-[250px] bg-[#1E2A47] text-white rounded-t-lg rounded-b-lg shadow-lg">
                      <div className="p-5 text-center pb-4">
                        <a
                          href="#"
                          className="hover:text-gray-300 transition-colors duration-300">
                          <h3 className="text-xl">{attorney.name}</h3>
                        </a>
                        <p className="text-sm text-white/70">{attorney.area}</p>
                      </div>
                      <a
                        href="#"
                        className="block overflow-hidden rounded-b-lg">
                        <img
                          src={attorney.image || "/placeholder.svg"}
                          alt={attorney.name}
                          className="w-full h-[280px] sm:h-[300px] md:h-[330px] object-cover rounded-b-lg"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-6 mt-10">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-[#1E2A47] text-white flex items-center justify-center hover:bg-[#2a3a5d] transition-colors duration-300 cursor-pointer"
              aria-label="Previous slide">
              <FaChevronLeft />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className="focus:outline-none transition-all duration-300"
                  aria-label={`Go to slide ${index + 1}`}>
                  <FaCircle
                    className={`text-[10px] transition-colors duration-300 ${
                      page === index ? "text-gray-700" : "text-black/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-[#1E2A47] text-white flex items-center justify-center hover:bg-[#2a3a5d] transition-colors duration-300 cursor-pointer"
              aria-label="Next slide">
              <FaChevronRight />
            </button>
          </div>

          {/* Page Counter */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <span className="font-medium">{page + 1}</span> / {pageCount}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Attorneys;
