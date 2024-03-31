import React, { useState } from "react";

function ProductionVideo({ image, video }) {
  const [toggle,setToggle]=useState(false);
  function handelHover(){
    setToggle(!toggle)
  }
  return (
    <div className="border border-white cursor-pointer overflow-hidden relative rounded-lg bg-[#131520] hover:scale-105 transition-all duration-300 ease-in-out" onMouseEnter={handelHover} onMouseLeave={handelHover} onTouchStart={handelHover} onTouchEnd={handelHover}>
      <video className="scale-[1.4] md:scale-[1.2] absolute rounded-lg "  loop muted autoPlay="autoplay" style={{ opacity: toggle ? 1 : 0 }}>
        <source src={video} type="video/mp4" />
      </video>
      <img src={image} alt="" className="inset-0 opacity-1 relative z-10 rounded-lg"/>
    </div>
  );
}

export default ProductionVideo;
