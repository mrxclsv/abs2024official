import React from 'react'

const Hero = ({image, page, title}) => {
  return (
    <div id='hero' className={`w-screen h-[55vh] lg:h-[75vh] relative bg-gray-900 overflow-hidden text-white flexCenter z-[1]`}>
      <div className='shadow bg-gradient-to-t from-blakk/80 to-transparent h-[50vh] min-h-[500px] z-[1] absolute bottom-0 left-0 right-0' />
        <img className='full flex object-cover object-bottom opacity-100' src={image} alt={image} />
        <div className='flexV center absolute absoluteAll m-auto gap-4 z-[2] '>
          <h1 className='h1 font-normal  uppercase'>{title}</h1>
          <h3 className='flexV center h3'>
            {/* <span>""</span> */}
            </h3>
        </div>
      </div>
  )
}

export default Hero