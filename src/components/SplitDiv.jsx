import React, { useState } from 'react'
// import { project } from '../utils/data'
import { TextLayout } from '../utils/components'
import { allTransitions } from '../utils/style'
import { Link } from 'react-router-dom'

const SplitDiv = ({
  layout, title, text, descr, image, short, css, color, hashtags, hasQuote, imageCSS, wrapperCSS, link, hasLink, mainCSS, action,
  hasTitle, hasText, hasDescr, showLines, blockCSS

  
}) => {
  
  const [toggleRead, setToggleRead] = useState(false)
  const handleToggle = () => setToggleRead(!toggleRead)
  

  return (
    <div className={`full relative flexV lg:flex-row center pb-0 z-[1] group ${mainCSS}
                    ${color === "white" ? "bg-white text-gray-900 z-[1]" : "bg-blakk z-[1] text-white" }`} >
      
      <div className={`contentWrapper== flex center h-full relative
                    ${layout === 1 && "flexV lg:flex-row "}
                    ${layout === 2 && "flexV lg:flex-row-reverse   "} 
                    ${css}
                    `}>

      <Link to={link} className={`left w-full lg:w-1/2 relative h-full flexV p-6 ${blockCSS} md:p-10 start max-w-3xl group`}>
        <div className='relative flexV w-full'>
          <TextLayout
            title={title}
            text={text}
            descr={descr}
            hasTitle={hasTitle}
            hasText={hasText}
            hasDescr={hasDescr}
            showLines={showLines}
            color={color}
            css={title !== "black" | "white" && "!border-gray-400/40" }
            hashtags={hashtags}
            hasQuote={hasQuote}
          />
          
          {hasLink && 
          <Link 
            to={`/${link}`} onMouseEnter={handleToggle} 
            className={`border-[2px] rounded-lg ml-6 lg:ml-10  lg:hover:bg-gray-800 lg:hover:text-white lg:hover:text-white= text-sm lg:opacity-0=  group-hover:opacity-100 transition-opacity duration-700 z-[5] self-start flex center
            ${color === "white" && "text-black border-blakk" }
            ${color === "black" && "text-white border-white lg:hover:bg-white lg: hover:text-black transition-colors duration-1000" }
            `}>
              <p className='px-4 py-2 font-[500]'>{action || 'Read more'}</p>
              <i className='ri-arrow-right-line py-2 px-3 h-full border-l-[2px] text-xl' />
          </Link>
          }

        </div>
      </Link>

      <div className={`imageWrapper right md:w-full lg:w-1/2 h-full lg:max-h-[1900px]= ${wrapperCSS} my-0 py-0 relative`}>

        {/* ONLY FOR BUSINESS MAN */}
        {title === "the business man" && 
          <div className='light w-[150px] lg:w-[200px] h-auto aspect-square rounded-full z-[1] bg-white blur-[100px] absolute right-[15%] top-[18%] lg:right-[30%] lg:top-[28%]' />
        }
        <img className={`group-hover:scale-[105%] object-cover ${imageCSS} ${allTransitions} z-[2] !duration-[3s] `} src={image || '/default.jpg'} alt={short || "this content"} />
      </div>

      </div>
      </div>
  )
}

export default SplitDiv