import React from "react";
import disney from "../assets/disney.png";
import disneyV from "../assets/Videos/disneyv.mp4";
import pixar from "../assets/pixar.png";
import pixarV from "../assets/Videos/pixarv.mp4";
import marvel from "../assets/marvel.png";
import marvelV from "../assets/Videos/marvelv.mp4";
import starwars from "../assets/starwar.png";
import starwarsV from "../assets/Videos/starwarsv.mp4";
import ngo from "../assets/nationalG.png";
import ngoV from "../assets/Videos/ngov.mp4";
import ProductionVideo from "./ProductionVideo";

function ProductionSection() {
  const data = [
    {
      image: disney,
      video: disneyV,
    },
    {
      image: pixar,
      video: pixarV,
    },
    {
      image: marvel,
      video: marvelV,
    },
    {
      image: starwars,
      video: starwarsV,
    },
    {
      image: ngo,
      video: ngoV,
    },
  ];
  return (
    <div className="flex gap-[1.5rem] mr-16 ml-16 mt-7 flex-col md:flex-row">
      {data.map((item, index) => {
        return <ProductionVideo image={item.image} video={item.video} />;
      })}
    </div>
  );
}

export default ProductionSection;
