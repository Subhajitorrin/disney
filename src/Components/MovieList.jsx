import React, { useState, useEffect,useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import VerticalCard from "./VerticalCard";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function MovieList({ id, isVertical }) {
  const [movie, setMovie] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    GlobalApi.getMoviesByGenresId(id).then((res) => {
      setMovie(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  function slideLeft() {
    elementRef.current.scrollLeft -= 500;
  }

  function slideRight() {
    elementRef.current.scrollLeft += 500;
  }

  return (
    <div className="flex gap-[1.5rem] overflow-x-auto scrollbar-hide py-[10px] px-[13px] scroll-smooth  " ref={elementRef}>
      <MdArrowBackIosNew className="text-white ml-[-55px] z-[100] absolute text-[40px]  mt-[50px] cursor-pointer hidden md:block select-none opacity-[.2] hover:opacity-[1] transition-all duration-300 ease-in-out" onClick={()=>slideLeft()} />
      <MdArrowForwardIos className="text-white z-[100] absolute text-[40px] mt-[50px] right-[-45px] cursor-pointer hidden md:block select-none opacity-[.2] hover:opacity-[1] transition-all duration-300 ease-in-out" onClick={()=>slideRight()} />
      {movie.map((item, index) => {
        if (!isVertical) {
          return <MovieCard title={item.title} image={item.backdrop_path} />;
        } else {
          return <VerticalCard image={item.poster_path} />;
        }
      })}
    </div>
  );
}

export default MovieList;
