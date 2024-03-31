import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function VerticalCard({image}) {
  return (
    <>
        <img src={IMAGE_BASE_URL+image} className='w-[260px] hover:scale-[1.05] rounded-lg hover:border cursor-pointer hover:border-white border-transparent border  transition-all ease-in-out duration-[.3s]'/>
    </>
  )
}

export default VerticalCard