import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
 };
  return (
    <div className="w-3/4 m-auto">
      <div className="">
       
          {data.map((d) => (
            <div className="bg-white w-70 p-4">
              <div className=" w-40 py-4 rounded-full bg-[#242D4E] flex items-center justify-center">
                <img src={d.img} className="rounded-full " />
              </div>
              <div className=" justify-center items-center text-center gap-4 p-4">
                <h1 className="font-bold">{d.title}</h1>
                <p>{d.info}</p>
              </div>
            </div>
          ))}
      
      </div>
    </div>
  );
}
const data = [
  {
    title: "Family and Divorce Law",
    info: "Support for marriage disputes, child custody  and domestic violence cases.",
    img: `image 7.png`,
  },
 
];
export default Card;

