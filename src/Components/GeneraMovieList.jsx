import React from 'react'
import GenereList from "../Services/generaData.json"
import MovieList from './MovieList'

function GeneraMovieList() {
  return (
    <div className='text-white p-8 md:px-16 flex flex-col gap-[2rem]'>
        {
            GenereList.genres.map((item,index)=>(
                <div className="relative z-[10] ">
                    <h2 className='text-[20px] font-bold'>{item.name}</h2>
                    <MovieList id={item.id} isVertical={index%2!=0?true:false}/>
                </div>
            ))
        }
    </div>
  )
}

export default GeneraMovieList