import "react";
import Navbar from "../components/Navbar";
import FirstImage from "../image/Image1.png";
import SecondImage from "../image/Image2.png";
import ThirdImage from "../image/Image3.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaCircleChevronRight } from "react-icons/fa6";
import "@fontsource/lato";
import content from "../../content";

const Blog = () => {
  const blogs = [
    {
      image: FirstImage,
      date: "January 14th, 2025",
      title: "Understanding Land and Property Rights in Nigeria",
      description:
        "A comprehensive guide  to help you navigate land ownership and tenancy laws.",
    },
    {
      image: SecondImage,
      date: "January 14th, 2025",
      title: "Your Rights as an Employee: A Legal Overview...",
      description:
        "An article detailing labor laws and employee rights in Nigeria",
    },
    {
      image: ThirdImage,
      date: "January 14th, 2025",
      title: "Family and Domestic Law",
      description:
        "Guidance on marriage & divorce, child custody and support, domestic violence and labor & parental rights laws.",
    },
  ];
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col gap-3 justify-center items-center text-center mt-10">
        <h1 className="text-5xl border-b-4 pb-5 text-[#242E4D]">
          {content.Blog.title}
        </h1>
        <p className="text-sm text-base text-stone-700 max-w-[80%] lg:max-w-[60%] md:max-w-[90%]">
          {content.Blog.description}
        </p>
      </div>

      {/* Blog post */}
      <div>
        <div className="flex flex-wrap justify-center gap-10 mt-10 mb-20">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden lg:w-80 w-110 group hover:bg-gradient-to-t hover:from-[#EFEFF7] hover:to-[#EFEFF7] transition ease-in-out duration-400">
              <div className="relative">
                <img
                  src={blog.image}
                  alt="Images"
                  className="w-full h-48 object-cover group-hover:scale-110 transition ease-in-out duration-300"
                />
                <p className="text-white rounded-tr-[5px] p-2 text-sm group-hover:text-white absolute bottom-0 bg-[#242E4D]">
                  {blog.date}
                </p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h1 className="font-semibold text-lg text-[#242E4D]">
                  {blog.title}
                </h1>
                <p className="text-sm text-gray-700">{blog.description}</p>
                <Link to="" className="flex gap-3 text-[#242E4D] text-sm mt-10">
                  {content.Blog.learnmore}{" "}
                  <FaCircleChevronRight className="mt-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
