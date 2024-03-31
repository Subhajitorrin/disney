import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

function MovieList({ id }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    GlobalApi.getMoviesByGenresId(id).then((res) => {
      setMovie(res.data.results);
    });
  }, []);
  return(
    <div className="flex gap-[1.5rem] overflow-x-auto scrollbar-hide py-[10px] px-[20px] ">
        {
            movie.map((item,index)=>{
                return <MovieCard title={item.title} image={item.backdrop_path}/>
            })
        }
    </div>
  );
}

export default MovieList;
