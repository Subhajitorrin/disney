import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ title, image }) {
  return (
    <div className="hover:scale-[1.1] transition-all ease-in-out duration-[.3s] relative z-[10]">
      <img
        src={IMAGE_BASE_URL + image}
        className="w-[260px] rounded-lg hover:border cursor-pointer hover:border-white border-transparent border  transition-all ease-in-out duration-[.3s] mb-[5px]"
      />
      <h3 className="w-[260px]">{title}</h3>
    </div>
  );
}

export default MovieCard;
