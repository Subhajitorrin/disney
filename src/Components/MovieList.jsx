import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import VerticalCard from "./VerticalCard";

function MovieList({ id,isVertical }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    GlobalApi.getMoviesByGenresId(id).then((res) => {
      setMovie(res.data.results);
      console.log(res.data.results);
    });
  }, []);
  return(
    <div className="flex gap-[1.5rem] overflow-x-auto scrollbar-hide py-[10px] px-[20px] ">
        {
            movie.map((item,index)=>{
                if(!isVertical){
                  return <MovieCard title={item.title} image={item.backdrop_path}/>
                }else{
                  return <VerticalCard image={item.poster_path}/>
                }
            })
        }
    </div>
  );
}

export default MovieList;
