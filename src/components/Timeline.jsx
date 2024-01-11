import React from 'react'
import { TimelineElement } from '../utils/components'
import { timeline } from '../utils/data'



const Timeline = ({date, position, title, desc}) => {
  
  const bgcolor = "blakk"

  
  return (
    <div className={`w-full h-full flexV bg-${bgcolor} gap-2`}>

      {timeline?.map((item, index) => (
        <div key={index} className='text-blakk flex w-full md:center relative'>

          <div className={`highlight absolute left-4 md:left-0 md:right-0 md:mx-auto top-5 md:top-8 !h-[12px] !w-[12px] ==translate-y-1/3 !aspect-square rounded-full bg-primary`}/>

          <TimelineElement 
            bgcolor={bgcolor}
            layout={item.position}
            date={item.date}
            title={item.title}
            descr={item.descr}
          />

        </div>
      ))}
    </div>
  )
}

export default Timeline