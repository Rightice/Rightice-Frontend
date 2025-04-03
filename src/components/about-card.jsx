import "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import aboutImg from "../image/about.png";

function Card() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 mx-auto py-8">
      <Slider {...settings}>
        {data.map((d) => (
          <div
            key={d.title}
            className="bg-white p-6 rounded-lg shadow-lg text-center">
            {/* Image */}
            <div className="w-32 h-32 mx-auto flex items-center justify-center bg-[#242D4E] rounded-full overflow-hidden">
              <img
                src={d.img}
                className="w-24 h-24 object-cover rounded-full"
                alt="About"
              />
            </div>

            {/* Text */}
            <div className="mt-4 space-y-2">
              <h1 className="text-lg font-bold">{d.title}</h1>
              <p className="text-gray-600">{d.info}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    title: "Family and Divorce Law",
    info: "Support for marriage disputes, child custody, and domestic violence cases.",
    img: aboutImg,
  },
];

export default Card;
