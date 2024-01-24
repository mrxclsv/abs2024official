import React from 'react'

const ScrollToTop = ({ scrollTop,toggleScroll, scrollToTop }) => {
  return (
    <div onClick={scrollToTop} className={`w-[55px] group flex p-3 center lg:hidden aspect-square rounded-full bg-primary  fixed m-auto bottom-[5svh] right-[5svw] z-[100] active:translate-y-[10%] ease-in-out duration-700 ease
      ${scrollTop ? "opacity-100 translate-y-0 bottom-[10svh] " : "opacity-0 translate-y-[40px]"} 
    `}>
      <div className='flexV center text-white relative '>
        <i className='ri-arrow-drop-up-line w-8 h-8 text-[30px] translate-y-[-6px]  font-[500]' />
      {/* <p className='text-xs font-[500] uppercase text-blakk drop-shadow-lg mx-auto right-0 top-0 whitespace-nowrap absolute===-translate-y-full '>To <br />Top</p> */}
      </div>
    </div>
  )
}

export default ScrollToTop