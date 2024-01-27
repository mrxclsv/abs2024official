import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const TimelineElement = ({
  layout, date, title, descr, css, showLines, showElement, index
}, bgcolor) => {

  const alignCondition = layout === "left" ? "text-left md:text-right md:self-end" : "self-end md:self-end text-left md:text-left"

  const [animate, setAnimate] = useState(false)

  return (
    <div className={`flexV center p-4 md:p-6 z-[1] relative animate-slideup 
        ${bgcolor === "white" ? "text-blakk" : "text-white"}
        ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-20 saturate-0 opacity-0'}
        transition-all duration-[1.5s] ease-in-out
      `}>

      <div className={`flex relative w-full lg:max-w-7xl= lg:max-w-[1200px] lg:min-w-[600px] center ${layout === "left" ? "" : "md:flex-row-reverse"}`}>
        <div className={`1 flex-col relative w-full md:w-1/2 px-6 text-left ${layout === "left" && "text-left md:text-right items-end self-end justify-end"}`}>
          <h4 className={`h4 w-full relative uppercase text-primary font-normal tracking-widest`}>{date || 'date'}</h4>
          <h4 className={`h4 title_small w-full mt-2 mb-4 relative uppercase opacity-60`}>{title || 'this event'}</h4>
          <h4 className={`h4 ${alignCondition} max-w-[800px] leading-[200%]`}>{descr || "Add the corresponding description and keep it aesthetically correct"}</h4>
        </div>
        <div className={`2 hidden md:flex w-1/2 h-full relative `} />
      </div>

    </div>

  )
}

export default TimelineElement