import React from 'react'

const TextLayout = ({
  layout, title, text, descr, image, css,
  hasTitle, hasText, hasDescr, showLines, color
}) => {


  // ${color === "white" && "border-gray-500/50"} ${css}`
  return (
    <div className={`flexVStart p-6 lg:p-10 pb-0 lg:pb-0 mb-6 z-[1] relative h-full ${showLines && "border-l border-neutral-500/60"} 
      ${color === "black" && "text-white"} 
      ${color === "white" && "text-black"} 
      ${css}
      `}>

    {hasTitle && <h4 className='h4 tracking-[.3rem] text-left mb-4 relative uppercase'>{ title ||'Headline'}</h4>}

    {hasText && 
      <h2 className='text-left leading-10 relative'>{text || "This is text for this section"}
      {showLines && 
        <div className={`highlighter absolute -left-6 lg:-left-10 top-0 h-full min-h-[10px] -translate-x-1/2 scale-y-110==  
                      border-l border-[2px]
                      ${color === "white" && "!border-black"} 
                      ${color !== "white" && "!border-white"} 
                      `}>
        </div>
        }
      </h2>
    }

    {hasDescr && <h4 className='text-left mt-8'>
                    {descr || "Add the corresponding description and keep it aesthetically correct" }
                </h4>}
    </div>

  )
}

export default TextLayout