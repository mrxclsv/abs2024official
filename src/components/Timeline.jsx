import React, { useState } from 'react'
import { TimelineElement } from '../utils/components'
import { timeline } from '../utils/data'
import ScrollTrigger from 'react-scroll-trigger'



const Timeline = ({ date, position, title, desc }) => {

  const bgcolor = "blakk"
  const [showElement, setShowElement] = useState(false)

  return (
    <div className={`w-full h-full flexV bg-${bgcolor} gap-2`}>

      {timeline?.map((item, index) => (
        <div key={index} className='text-blakk flex w-full md:center relative'>

          <ScrollTrigger onEnter={() => setShowElement(true)} onExit={() => setShowElement(true)}  >
            <div className={`highlight absolute left-4 md:left-0 md:right-0 md:mx-auto top-5 md:top-7 !h-[12px] !w-[12px] !aspect-square rounded-full bg-primary 
            ${showElement ? 'opacity-100' : 'opacity-20'}
            `}/>
            <TimelineElement
              bgcolor={bgcolor}
              layout={item.position}
              date={item.date}
              title={item.title}
              descr={item.descr}
              showElement={showElement}
              index={index}
            />
          </ScrollTrigger>
        </div>
      ))}
    </div>
  )
}

export default Timeline