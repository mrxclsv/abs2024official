import React from 'react'

const ScrollToTop = () => {
  return (
    <div className={`w-[55px]flex center lg:hidden aspect-square bg-white fixed bottom-2 right-2 z-[100]`}>
      <div className='text-black'>
        <i className='ri-arrow-up-line w-8 h-8 text-black' />
        ScrollToTop
      </div>
    </div>
  )
}

export default ScrollToTop