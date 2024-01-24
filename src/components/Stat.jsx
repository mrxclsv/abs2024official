import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Stat = ({
  value, title, added, duration, counterOn, setCounterOn, isLoading, before
}) => {


  return (

    <Link className={`flexV md:start relative w-fit min-w-[200px] px-4 md:pl-10 group`}>
      {/* ${added !== "" && "md:col-span-2 w-full max-w-[300px]"}  */}

      <div className='flex items-center relative w-full mb-4 font-normal tracking-wide'>
        {before !== "" &&
          <p className='statMain relative w-fit text-blakk z-[2] animate-slideleft'>
            {before}
          </p>
        }

        {counterOn &&
          <CountUp
            className={`statMain w-fit flex relative text-left whitespace-nowrap opacity-80 group-hover:opacity-100 animate-slideleft ${before !== "" && "ml-1"} items-center`}
            start={0}
            end={value}
            duration={duration}
            delay={0.2}
          >
          </CountUp>

        }
        {added !== "" &&
          <p className='statMain capitalize whitespace-nowrap animate-slideleft w-fit ml-2 text-left'>
            {added}
          </p>
        }
      </div>


      <div className='w-full h-[2px] relative bg-neutral-500/30 mt-2 mb-2'>
        <div className={`!w-8 h-[3px] rounded absolute left-0 my-auto bottom-0
                        ${isLoading ? 'translate-x-[40px] opacity-0' : '!translate-x-[0px] opacity-100 transition duration-[2s] ease-out'} 
                        z-[5] bg-white mix-blend-difference `}
                        />
                        {/* } */}
                        {/* ${loading ?
                          ''
                        :
                        'translate-x-[0px] opacity-100 transition duration-[2000]'}   */}
      </div>
      <h4 className='h4 md:h4 capitalize whitespace-nowrap w-fit text-black font-normal group-hover:font-[400] mt-2 opacity-80 group-hover:opacity-100 transition text-left'>{title || "2000"}</h4>

    </Link>
  )
}

export default Stat