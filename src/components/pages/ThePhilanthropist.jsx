import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero, SplitDiv, TextLayout, daara2, leket2, mapsenegal, water } from '../../utils/components'
import { journey, project } from '../../utils/data'
// import { SplitDiv, TextLayout, Timeline } from '../../utils/components'

const ThePhilanthropist = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  // useEffect(() => {
  //   window.scroll(0,0)
  // },[location])
  
  return (
    <div className='min-h-screen= h-full w-screen center flexV bg-white text-black gap-10 relative' >

      <Hero
        image={leket2}
        title={page}
      />

      <div className='mt-0 flexV center w-full h-full relative  '>

        <div className='#ABS2024 #BoromTerangaYi max-w-7xl flex center w-full relative h-full pt-6 pb-10'>
          <SplitDiv title="#ABS2024 #BoromTerangaYi" color="white" link=""
            hasTitle={true} hasText={true}  hasDescr
            layout={1} 
            showLines={true}
            text="Philanthropic Trailblazer"
            descr="Abdoulaye SYLLA has redefined the scope of philanthropy, demonstrating how one person's generosity can ignite a wave of positive change across an entire nation. His initiatives address the fundamental challenges faced by the people of Senegal. From education to healthcare, his contributions have laid the groundwork for sustainable development and social upliftment."
            image={water}
            css="mt-0 mx-auto"
            hasLink
          />
        </div>
        
        <div className='TheJourney flexV w-full relative overflow-y-hidden overflow-x-scroll===== bg-blakk pt-10 md:p-[200px] h-[80vh]'>

          <SplitDiv title="#ABS2024 #BoromTerangaYi" color="black" link=""
            hasTitle={true} hasText={true}  hasDescr={false}
            layout={1} 
            showLines={true}
            text="The Journey"
            descr=""
            image={water}
            wrapperCSS="hidden"
            css="mt-0 mx-auto"
            hasLink={false}
          />
          {/* <i className='ri-arrow-right-fill text-white absoluteAll left-0 bottom-0 z-[1] opacity-5 animate-pulse aspect-square absolute  m-auto' src='' alt="" /> */}

          <div id="journey" className='flex start w-screen h-[80vh] relative overflow-x-hidden'>
              {/* <div className='w-[200px] absolute left-0 top-0 bottom-0 my-auto z-[2] bg-gradient-to-r from-black to-transparent' /> */}
            <div className='flex scrollbar-hide pr-[15vw] h-full gap-8 px-10 pl-[15vw] overflow-x-auto relative'>
              {journey?.map((item, index) => (
                <div key={index} className='flexV min-w-[300px] md:min-w-[400px] hidden rounded-lg border border-white/40 max-h-[500px] bg-gradient-to-t from-neutral-900/50 to-gray-900 h-full relative pt-6 md:pt-2'>
                  {/* <p className='text-primary mix-blend-difference absolute right-6 md:right-10 tracking-wide top-4 opacity-50 '>{`0${index + 1}`}</p> */}
                  <p className='text-primary font-semibold absolute left-6 md:left-10 tracking-wide  top-4 '>{item.date}</p>
                  <TextLayout
                    title={item.title}
                    text={item.text}
                    descr={item.descr}
                    hasTitle
                    hasText={false}
                    hasDescr
                    showLines={false}
                    color="black"
                    css="min-w-[400px]"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

          <div className='w-full flexV center'>
            <img src={daara2} className={``} alt="daara" />
          </div>

      </div>

      </div>
  )
}

export default ThePhilanthropist