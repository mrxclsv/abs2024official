import React from 'react'

const Hero = ({ image, imageCSS, page, title, css, hasGradient }) => {
  return (
    // <div id='hero' className={`w-screen h-[55vh] lg:h-[75vh] relative bg-gray-900 overflow-hidden text-white flexCenter z-[1]`}>
    //   <div className='shadow bg-gradient-to-t from-blakk/80 to-transparent h-[50vh] min-h-[500px] z-[1] absolute bottom-0 left-0 right-0' />
    //     <img className='full flex object-cover object-bottom opacity-100' src={image} alt={image} />
    //     <div className='flexV center absolute absoluteAll m-auto gap-4 z-[2] '>
    //       <h1 className='h1 font-normal  uppercase'>{title}</h1>
    //       <h3 className='flexV center h3'>
    //         {/* <span>""</span> */}
    //         </h3>
    //     </div>
    //   </div>
    <div id='pageHero' className={`w-screen h-[100svh] overflow-hidden relative md:bg-gray-800= flexCenter bg-black ${css} `}>

      {hasGradient &&
        <div className='w-full h-3/4 absolute -top-20 left-0 right-0 bg-gradient-to-b from-black/60 -to-transparent  z-[1]' />
      }
      <img className={`full flex object-cover origin-bottom object-bottom scale-110 opacity-80  md:opacity-100 transition duration-700 ${imageCSS} `} src={image} alt="The Future of Senegal Is Here" />

      <div className='flexV center absolute absoluteAll sm:max-w-3/4 lg:max-w-7xl mx-auto gap-4 text-white z-[2]'>
        <h1 className='leading-[110%] px-6 md:px-10 text-4xl font-normal md:text-7xl md:font-light md:font-semibold== uppercase'>{page}</h1>
        <div className='flex flex-col lg:flex-row gap-0 lg:gap-4 center h4 lg:h3 font-normal'>
          <div className='lg:h3 font-normal'>{title}</div>
          {/* <p>{title}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Hero