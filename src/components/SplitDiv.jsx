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
    <div className={`full max-w-[100dvw] lg:max-h-[100dvh] relative flexV center z-[1] group
                    ${mainCSS}
                    ${color === "white" ? "bg-white text-gray-900 z-[1]" : "bg-blakk z-[1] text-white"}
                  `} >

      <div className={`contentWrapper== flex center h-full relative gap-10 overflow-y-hidden justify-center
                    ${layout === 1 && "flexV lg:flex-row lg:gap-0  "}
                    ${layout === 2 && "flexV lg:flex-row-reverse   "} 
                    ${css}
                    `}>

        <Link to={link} className={`left w-full lg:w-1/2 relative flexV p-6 pb-0 ${blockCSS} h-fit sticky  items-center justify-center  group`}>
          <div className={`relative flexV overflow-y-scroll h-full !w-full= lg:min-w-[400px] ${layout === 2 && "self-start"} lg:self-end `}>
            <TextLayout
              title={title}
              text={text}
              descr={descr}
              hasTitle={hasTitle}
              hasText={hasText}
              hasDescr={hasDescr}
              showLines={showLines}
              color={color}
              css={` ${title !== "black" | "white" && "!border-gray-400/40"}`}
              hashtags={hashtags}
              hasQuote={hasQuote}
            />

            {/* READ MORE OR ACTION */}
            {hasLink &&
              <Link
                to={`/${link}`} onMouseEnter={handleToggle}
                className={`border-[1px] rounded-lg ml-6 lg:ml-10 lg:hover:bg-neutral-800= text-sm lg:opacity-0=  group-hover:opacity-100 transition-opacity= duration-700 z-[5] self-start flex center
            ${color === "white" && "text-black border-blakk lg:hover:text-white lg:hover:bg-blakk"}
            ${color === "black" && "text-white border-white lg:hover:bg-white lg:hover:text-black transition-colors duration-1000"}
            `}>
                <p className='px-4 py-2 font-[500]'>{action || 'Read more'}</p>
                <i className='ri-arrow-right-line py-2 px-3 h-full border-l-[1px] text-xl' />
              </Link>
            }

          </div>
        </Link>

        <div className={`imageWrapper w-full h-full items-end justify-end lg:w-1/2 ${wrapperCSS} lg:max-h-[95svh] !overflow-x-hidden my-0 py-0 flex-grow-0 relative`}>

          <div id='blurredSHADOW' className={`w-56 aspect-square blur-xl scale-[130%] lg:scale-[200%] translate-y-[100px] lg:opacity-80 z-[1] rounded-full absolute ${coordinates} ${!hasShadow && "hidden"}`} />

          <img  src={image || '/default.jpg'}
                alt={short || "this content"}
                loading='lazy'
                className={`group-hover:lg:translate-x-0 lg:translate-x-4 relative lg:w-full lg:h-full z-[2] !object-contain object-top 
                ${imageCSS} ${allTransitions} !duration-[2s]
            `}/>

          {/* {title === "the business man" &&
            <div className='light w-[150px] lg:w-[200px] h-auto aspect-square rounded-full z-[1] bg-white blur-[100px] absolute right-[15%] top-[18%] lg:right-[30%] lg:top-[28%]' />
          } */}
          {/*  ONLY LEADER */}


        </div>

      </div>
    </div>
  )
}

export default SplitDiv