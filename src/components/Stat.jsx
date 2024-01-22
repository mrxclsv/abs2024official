import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';

const Stat = ({
  value, title, added, duration, counterOn, setCounterOn, loading, setLoading, before
}) => {


  return (

    <Link className={`flexV animate-slideleft md:start ==center relative w-fit min-w-[200px] px-4 md:pl-10 ${added !== "" && "md:col-span-2 w-full max-w-[300px]"} `}>

      {counterOn &&

        <CountUp
          className={`h3 !md:h2 text-3xl flex relative text-left whitespace-nowrap ${before !== "" && "ml-4"} items-center mb-4 font-normal tracking-wide`}
          start={0}
          end={value}
          duration={duration}
          delay={0}
        >
          {added !== "" &&
            <span className='h3 md:h4 ml-2 capitalize whitespace-nowrap signal w-fit text-gray-500 font-normal mt-2 opacity-80 text-left'>
              {added}
            </span>
          }
        </CountUp>
      }
      <p className='absolute hidden= inline left-10 top-1 mx-auto my-auto text-blakk text-xl font-semibold z-[2] animate-slideleft'>{before}</p>
      {/* <h2 className=' !md:h4= whitespace-nowrap items-center mb-4 tracking-wide'>{value || "2000"} */}
      {/* </h2> */}
      <div className='w-full h-[2px] relative bg-neutral-500/30  mt-2 mb-2 =mix-blend-exclusion'>
        {/* <div className='w-8 rounded h-[3px] absolute left-0 my-auto bottom-0 bg-white' />  */}
        <div className={`${loading ? 'translate-x-[30px] opacity-10 transition duration-[2000]' : 'translate-x-[0px] opacity-100 transition duration-[2000]'}  !w-8 rounded =animate-slideright h-[3px] absolute left-0 my-auto bottom-0 bg-white mix-blend-difference`} />
      </div>
      <h4 className='h4 md:h4 capitalize whitespace-nowrap w-fit text-gray-500 font-normal mt-2 opacity-80 text-left'>{title || "2000"}</h4>

    </Link>
  )
}

export default Stat