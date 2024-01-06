import React, { useState } from 'react'
// import { project } from '../utils/data'
import { TextLayout } from '../utils/components'
import { allTransitions } from '../utils/style'
import { Link } from 'react-router-dom'

const SplitDiv = ({
  layout, title, text, descr, image, short, css, color, imageCSS, wrapperCSS, link, hasLink, mainCSS,
  hasTitle, hasText, hasDescr, showLines, blockCSS

  
}) => {
  
  const [toggleRead, setToggleRead] = useState(false)
  const handleToggle = () => setToggleRead(!toggleRead)
  

  return (
    <div className={`full max-w-6xl= flexV lg:flex-row center  pb-0  z-[1] group ${mainCSS}
                    
                    ${color === "white" ? "bg-white text-gray-900 z-[1]" : "bg-blakk z-[1] text-white" }`} >
      
      <div className={`contentWrapper== flex center 
                    ${layout === 1 && "flexV lg:flex-row "}
                    ${layout === 2 && "flexV lg:flex-row-reverse   "} 
                    ${css}
                    `}>

      <Link to={link} className={`left w-full lg:w-1/2 flexV p-6 ${blockCSS} md:p-10 start max-w-3xl group`}>
        <TextLayout
          title={title}
          text={text}
          descr={descr}
          hasTitle={hasTitle}
          hasText={hasText}
          hasDescr={hasDescr}
          showLines={showLines}
          color={color}
          css=""
        />
        {hasLink && 
          <Link to={`/${link}`} onMouseEnter={handleToggle} 
                className={`border rounded ml-6 lg:ml-10 py-2 px-4 lg:hover:bg-gray-800 lg:hover:text-white text-sm opacity-0  group-hover:opacity-100 transition-opacity duration-700 
                ${color === "white" && "text-black border-blakk" }
                ${color === "black" && "text-white border-white" }
                          `}><p>Read more</p> 
          </Link>
        }
      </Link>

      <div className={`imageWrapper right md:w-full lg:w-1/2 h-full lg:max-h-[1900px]= ${wrapperCSS} my-0 py-0`}>
        <img className={`group-hover:scale-[105%] object-cover ${imageCSS} ${allTransitions} !duration-[3s] `} src={image || '/default.jpg'} alt={short || "this content"} />
      </div>

      </div>
      </div>
  )
}

export default SplitDiv