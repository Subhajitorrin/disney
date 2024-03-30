import React from 'react'

function Headeritem(props) {
  return (
    <div className='text-white flex gap-3 items-center cursor-pointer hover:underline underline-offset-8'>
        <props.icon className="text-[22px]"/>
        <h2 className='text-[20px] md:block'>{props.name}</h2>
    </div>
  )
}

export default Headeritem