import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./Slider.css"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  function getTrendingMovies() {
    GlobalApi.getTrending.then((response) => {
      setTrendingMovies(response.data.results);
    });
  }

  function slideLeft() {
    elementRef.current.scrollLeft -= screenWidth - 112;
  }

  function slideRight() {
    elementRef.current.scrollLeft += screenWidth - 112;
  }

  return (
    <div className="scroll-smooth">
      <MdArrowBackIosNew className="text-white absolute text-[40px] ml-2 mt-[230px] cursor-pointer hidden md:block select-none" onClick={()=>slideLeft()} />
      <MdArrowForwardIos className="text-white absolute text-[40px] mr-2 mt-[230px] right-0 cursor-pointer hidden md:block select-none" onClick={()=>slideRight()} />
      <div className=" sliderWrapper flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
        {trendingMovies.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[500px] object-cover object-top mr-4 rounded-lg scroll-smooth border-[4px] border-transparent hover:border-white hover:border-[4px] cursor-pointer transition-all duration-[100ms] ease-in"
            alt={`Trending Movie ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
