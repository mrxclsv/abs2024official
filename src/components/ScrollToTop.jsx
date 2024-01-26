import React from 'react'

const ScrollToTop = ({ scrollTop, toggleScroll, scrollToTop }) => {
  return (
    <div  onClick={scrollToTop} 
          className={`w-[55px] group flex p-3 center lg:hidden aspect-square rounded-full bg-primary drop-shadow-2xl
                      fixed m-auto bottom-[5svh] right-[5svw] z-[100] active:translate-y-[10%] ease-in-out duration-700 ease
                      ${scrollTop ? 
                        "opacity-100 translate-y-0 bottom-[10svh] " 
                        : 
                        "opacity-0 translate-y-[40px]"
                      } 
    `}>
      <div className='flexV center text-white relative '>
        <i className='ri-arrow-drop-up-line w-8 h-8 text-[30px] translate-y-[-6px]  font-[500]' />
      </div>
    </div>
  )
}

export default ScrollToTop