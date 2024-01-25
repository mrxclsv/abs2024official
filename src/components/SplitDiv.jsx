import React, { useState } from 'react'
// import { project } from '../utils/data'
import { TextLayout } from '../utils/components'
import { allTransitions } from '../utils/style'
import { Link } from 'react-router-dom'

const SplitDiv = ({
  layout, title, text, descr, image, short, css, color, hashtags, hasQuote, imageCSS, wrapperCSS, link, hasLink, mainCSS, action, hasShadow, coordinates, hasTitle, hasText, hasDescr, showLines, blockCSS


}) => {

  const [toggleRead, setToggleRead] = useState(false)
  const handleToggle = () => setToggleRead(!toggleRead)


  return (
    <div className={`full min-h-[60vh] max-w-[100dvw] lg:max-h-[100vh] relative flexV center z-[1] group overflow-x-hidden
                    ${mainCSS} ${color === "white" ? "bg-white text-gray-900 z-[1]" : "bg-blakk z-[1] text-white"}
                    `}>

      <div className={`flex center h-full relative ${layout === 1 && 'gap-6'} overflow-y-hidden justify-center max-w-7xl= mx-auto 
                    ${layout === 1 && "flexV lg:flex-row lg:gap-0  "}
                    ${layout === 2 && "flexV lg:flex-row-reverse   "} 
                    ${css}
                    `}>

        <div className={`left w-full lg:w-1/2 relative flexV p-6 lg:py-20 pb-0 ${blockCSS} h-fit items-center justify-center group `}>
          <div /* to={link} */ className={`relative flexV overflow-y-hidden h-full= !w-full= lg:min-w-[400px] ${layout === 2 && "!self-start md:pl-0"} lg:self-end `}>
            <TextLayout
              title={title}
              text={text}
              descr={descr}
              hasTitle={hasTitle}
              hasText={hasText}
              hasDescr={hasDescr}
              showLines={showLines}
              color={color}
              css={` ${title !== "black" | "white" && "!border-gray-400/40 "}`}
              hashtags={hashtags}
              hasQuote={hasQuote}
            />

            {/* READ MORE OR ACTION */}
            {hasLink &&
              <button
                // href={`/${link}`} onMouseEnter={handleToggle}
                className={`border-[1px] rounded-lg ml-6 lg:ml-10 lg:hover:bg-neutral-800= text-sm lg:opacity-0=  group-hover:opacity-100 transition-opacity= duration-700 z-[5] self-start flex center
                ${color === "white" && "text-black border-blakk lg:hover:text-white lg:hover:bg-blakk"}
                ${color === "black" && "text-white border-white lg:hover:bg-white lg:hover:text-black transition-colors duration-1000"}
              `}>
                <p className='px-4 py-2 font-[500]'>{action || 'Read more'}</p>
                <i className='ri-arrow-right-line py-2 px-3 h-full border-l-[1px] text-xl' />
              </button>
            }

          </div>
        </div>

        <div className={`imageWrapper w-screen h-full center items-end justify-end lg:w-1/2 ${wrapperCSS} lg:max-h-[95svh] relative`}>

          <div id='blurredSHADOW'
            className={`w-56 aspect-square blur-xl scale-[130%] justify-end items-end lg:scale-[200%] 
                            ${coordinates} 
                            ${!hasShadow && "hidden"}
                            translate-y-[100px] lg:opacity-80 z-[1] rounded-full absolute 
            
          `}/>

          <img src={image || '/default.jpg'}
            alt={short || "this content"}
            loading='eager'
            className={`origin-bottom lg:group-hover:scale-[103%] relative w-full lg:h-full== min-h-[500px]= z-[2] 
                        object-cover object-bottom ${imageCSS || ''} ${allTransitions} !duration-[2s]
                    `} />

          {title === "the business man" &&
            <div className='light w-[150px] lg:w-[200px] h-auto aspect-square rounded-full z-[1] bg-white blur-[100px] absolute right-[15%] top-[20%] lg:right-[30%] lg:top-[34%]' />
          }
          {/*  ONLY LEADER */}


        </div>

      </div>
    </div>
  )
}

export default SplitDiv