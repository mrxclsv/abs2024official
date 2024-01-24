import React from 'react'

const TextLayout = ({
  layout, title, text, descr, image, css, hashtags, hasQuote, titleCSS, descrCSS,
  hasTitle, hasText, hasDescr, showLines, color
}) => {


  // ${color === "white" && "border-gray-500/50"} ${css}`
  return (
    <div className={`flexVStart p-6 lg:p-10 pt-0 lg:pt-0 !mt-8 ${!showLines && "!lg:p-0"} pb-0 lg:pb-0 max-w-[600px]  mb-6 z-[1] relative h-full ${showLines && "border-l border-neutral-500/60"} 
      ${color === "black" && "text-white"} 
      ${color === "white" && "text-black"} 
      ${css}
      `}>

      {hasTitle && <h4 className={`h4 tracking-[.3rem] !leading-[200%] ${titleCSS} text-left mb-4 relative uppercase`}>{title || 'Headline'}</h4>}

      {hasText &&
        <div className='titleText text-left flexV relative '>

          {hasQuote &&
            <img
              src="/icons/quote.svg"
              className='w-10 h-10 -translate-x-2 md:translate-x-0  fill-primary opacity-50 
                        scale-50 md:scale-100 self-start mix-blend-exclusion mt-10 brightness-[.1] '
              alt="quote" />}

          {text || "This is text for this section"}

          {/* {hasQuote && <img className='w-10 h-10 scale-50 md:scale-100 self-start inline mix-blend-exclusion fill-primary opacity-50 mt-2 rotate-180 brightness-[.1] =absolute bottom-4 md:right-8 right-0 ' src="/icons/quote.svg" alt="quote"  />
        } */}
          {hasQuote && <span className='text-sm origin-bottom-left scale-[70%] font-[400] whitespace-nowrap'>— Abdoulaye SYLLA</span>}

          {showLines &&
            <div className={`highlighter absolute -left-6 lg:-left-10 top-0 h-full min-h-[10px] -translate-x-1/2 scale-y-110==  
                      border-l border-[2px]
                      ${color === "white" && "!border-black"} 
                      ${color !== "white" && "!border-white"} 
                      `}>
            </div>
          }
        </div>
      }

      {hasDescr && <h4 className={`text-left mt-10 font-[400] leading-[230%] w-full ${descrCSS} `}>
        {descr || "Add the corresponding description and keep it aesthetically correct"}
      </h4>}
      {/* {hashtags !== "" && 
      <h4 className=''>{hashtags}</h4>
    }                 */}
      <div className='flex gap-1'>
        {hashtags?.map((item, index) => (
          <h4 key={item} className='opacity-80 italic hover:opacity-100 hover:font-normal transition py-1 cursor-pointer'>{`#${item}`}</h4>
        ))}

      </div>
    </div>

  )
}

export default TextLayout