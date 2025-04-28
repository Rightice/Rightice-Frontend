import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Corporate from "../image/about.png"
import Criminal from "../image/2.webp";
import family from "../image/family.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const data = [
  {
    title: "Family and Divorce Law",
    info: "Support for marriage disputes, child custody, and domestic violence cases.",
    img: family,
  },
  {
    title: "Corporate Law",
    info: "We offer legal support for business contracts, compliance, and disputes.",
    img: Corporate,
  },
  {
    title: "Criminal Defense",
    info: "Expert defense services to protect your rights in legal proceedings.",
    img: Criminal,
  },
];

const NextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#242D4E] bg-black/10 p-2 rounded-full"
      onClick={onClick}>
      <FaAngleRight className="text-3xl" />
    </div>
  );
};

const PrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer font-light text-[#242D4E] bg-black/10 p-2 rounded-full"
      onClick={onClick}>
      <FaAngleLeft className="text-3xl" />
    </div>
  );
};

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <Slider {...settings}>
        {data.map((item, index) => (
          <SlideCard key={index} data={item} />
        ))}
      </Slider>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SlideCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { title, info, img } = data;

  return (
    <div className="px-3">
      <div className="bg-white p-6 rounded-xl shadow-md text-center h-full">
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full overflow-hidden">
          <img
            src={img}
            alt={title || "Slider Image"}
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-[#242D4E]">{title}</h3>
        <p className="text-sm text-stone-700 mt-2">{info}</p>
      </div>
    </div>
  );
};

export default CardSlider;
