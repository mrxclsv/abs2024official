import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';

const Stat = ({
  value, title, added, counterOn, setCounterOn
}) => {
  

  return (

    <Link className={`flexV animate-slideleft md:start ==center relative w-fit min-w-[200px] px-4 md:pl-10 ${added !== "" && "md:col-span-2 w-full max-w-[300px]"} `}>
        {counterOn && 
          <CountUp className='!md:h4= h1 text-3xl flex relative text-left whitespace-nowrap items-center mb-4 font-normal tracking-wide' start={0} end={value} duration={2} delay={0}>
          {/* <h5 className='!md:h4= h2 whitespace-nowrap items-center mb-4 tracking-wide' >{value} */}
          {added !== "" && 
            <span className='h3 md:h4 ml-2 capitalize whitespace-nowrap signal w-fit text-gray-500 font-normal mt-2 opacity-80 text-left'>
              {added}
            </span>}
          </CountUp>
        }
          {/* <h2 className=' !md:h4= whitespace-nowrap items-center mb-4 tracking-wide'>{value || "2000"} */}
        {/* </h2> */}
        <div className='w-full h-[2px] relative bg-neutral-500/30  mt-4 mb-2 =mix-blend-exclusion'>
          {/* <div className='w-8 rounded h-[3px] absolute left-0 my-auto bottom-0 bg-white' />  */}
          <div className={`w-8 rounded h-[3px] absolute left-0 my-auto bottom-0 bg-white mix-blend-difference`} /> 
        </div>
        <h4 className='h4 md:h4 capitalize whitespace-nowrap w-fit text-gray-500 font-normal mt-2 opacity-80 text-left'>{title || "2000"}</h4>

    </Link>
  )
}

export default Stat