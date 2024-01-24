import React, { useState } from 'react'
import { TextLayout } from '../utils/components'
import { allTransitions } from '../utils/style'
import { Link } from 'react-router-dom'

const SplitDivLarge = ({
  layout, title, text, descr, image, short, css, color, hashtags, hasQuote, imageCSS, wrapperCSS, link, hasLink, mainCSS, action,
  hasTitle, hasText, hasDescr, showLines, blockCSS


}) => {

  const [toggleRead, setToggleRead] = useState(false)
  const handleToggle = () => setToggleRead(!toggleRead)


  return (
    <div className={`full relative flexV lg:flex-row center pb-0 z-[1] group lg:max-h-[100svh]  ${mainCSS}
                    ${color === "white" ? "bg-white text-gray-900 z-[1]" : "bg-blakk z-[1] text-white"}`} >

      <div className={`contentWrapper= center h-full= relative gap-10== space-around=
                    ${layout === 1 && "flexV lg:flex-row "}
                    ${layout === 2 && "flexV lg:flex-row-reverse   "} 
                    ${css}
                    `}>

        <Link to={link} className={`w-full opacity-50 ========== lg:w-1/2= relative h-full flexV ${blockCSS}  start md:pl-24 group`}>
          <div className='relative flexV md:min-w-[400px] max-w-4xl w-fit self-end  p-6 py-10 md:p-14'>
            <TextLayout
              title={title}
              text={text}
              descr={descr}
              hasTitle={hasTitle}
              hasText={hasText}
              hasDescr={hasDescr}
              showLines={showLines}
              color={color}

              css={`!w-full max-w-xl ${title !== "black" | "white" && "!border-gray-400/40"}`}
              hashtags={hashtags}
              hasQuote={hasQuote}
            />

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

        <div className={`imageWrapper w-full signal= max-h-full ${wrapperCSS} my-0 py-0 relative`}>

          <img
            src={image || '/default.jpg'} alt={short || "media"}
            className={`group-hover:scale-[105%] h-40== object-contain 
                        ${imageCSS || 'object-contain'} ${allTransitions} z-[2] !duration-[3s] 
                        `}
            loading='lazy'
          />

          <div className='w-20 h-20 === hidden ==== bg-red-400 absolute inset-5 mx-auto my-auto z-10 ' />
          {/* ONLY FOR BUSINESS MAN */}
          {title === "the business man" &&
            <div
              className='light w-[150px] lg:w-[200px] h-auto aspect-square rounded-full z-[1] bg-white blur-[100px] absolute right-[15%] top-[18%] lg:right-[30%] lg:top-[28%]' />
          }
        </div>

      </div>
    </div>
  )
}

export default SplitDivLarge