import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero, SplitDiv, TextLayout, daara, leket2, mapsenegaldark, water } from '../../utils/components'
import { journey, project } from '../../utils/data'
// import { SplitDiv, TextLayout, Timeline } from '../../utils/components'

const ThePhilanthropist = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])
  
  return (
    <div className='min-h-screen= h-full w-screen center flexV bg-white text-black gap-10 relative' >

      <Hero
        image={leket2}
        title={page}
      />

      <div className='mt-0 flexV center w-full h-full relative  '>

        <div className='max-w-7xl flex center w-full relative h-full pt-6 pb-10'>
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
        
        <div className='TheJourney flex w-full relative overflow-y-hidden overflow-x-scroll bg-blakk pt-10 md:p-[200px] h-[80vh}'>

          <img className='mix-blend-screen z-[0] animate-pulse aspect-square max-w-[800px] fixed m-auto absoluteAll opacity-100 brightness-[.1]' src={mapsenegaldark} alt="senegal" />

          <div id="journey" className='flex start w-full gap-8 px-10  ml-[15vw]'>
            {journey?.map((item, index) => (
              <div key={index} className='flexV min-w-[300px] md:min-w-[400px] rounded-lg border border-white/40 max-h-[500px] bg-blakk/50 h-full relative pt-6 md:pt-2'>
                {/* <p className='text-primary mix-blend-difference absolute right-6 md:right-10 tracking-wide top-4 opacity-50 '>{`0${index + 1}`}</p> */}
                <p className='text-primary mix-blend-difference absolute left-6 md:left-10 tracking-wide  top-4 '>{item.date}</p>
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

          <div className='w-full flexV center'>
            <img src={daara} className={``} alt="daara" />
          </div>
        </div>

      </div>

      </div>
  )
}

export default ThePhilanthropist