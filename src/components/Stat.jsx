import React from 'react'
import { Link } from 'react-router-dom'

const Stat = ({
  value, title, added

}) => {

  return (
    <Link className={`flexV md:start ==center relative w-fit px-4 md:pl-10 ${added !== "" && "md:col-span-2 w-full max-w-[300px]"} `}>
        <h2 className=' !md:h4= whitespace-nowrap items-center mb-4 tracking-wide'>{value || "2000"}
        {added !== "" && 
          <span className='h3 md:h4 ml-2 capitalize whitespace-nowrap w-fit text-gray-500 font-normal mt-2 opacity-80 text-left'>
            {added}
          </span>}
        </h2>
        <div className='w-full h-[2px] relative bg-neutral-500/30  mt-4 mb-2 mix-blend-exclusion'>
          <div className='w-8 rounded h-[3px] absolute left-0 my-auto bottom-0 bg-white' /> 
        </div>
        <h4 className='h3 md:h4 capitalize whitespace-nowrap w-fit text-gray-500 font-normal mt-2 opacity-80 text-left'>{title || "2000"}</h4>

    </Link>
  )
}

export default Stat