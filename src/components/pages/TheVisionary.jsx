import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { project } from '../../utils/data'
import { SplitDiv, Timeline, abssit, water } from '../../utils/components'

const TheVisionary = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])
  
  return (
    <div className='min-h-screen h-full= w-screen flexV bg-blakk text-black gap-10 relative' >

      <div className='hero w-full h-[70vh] min-h-[400px] flex center relative bg-gray-100 group'>


        <div className='full flex center overflow-hidden relative bg-black text-white'>
          <img className='full object-cover object-top origin-top opacity-60 group-hover:opacity-100 transition duration-1000 ' src={abssit} alt="ABS The Visionary" />
        </div>
        <div className='absolute absoluteAll flex center  '>
        <h1 className='h1 text-white drop-shadow-lg translate-y-20'>I'm Abdoulaye SYLLA #ABS2024</h1>
        </div>
      </div>

      <SplitDiv title="#ABS2024 #BoromTerangaYi" color="black" link=""
            hasTitle={true} hasText={true}  hasDescr={false}
            layout={1} 
            showLines={false}
            text="Timeline"
            descr=""
            image={water}
            wrapperCSS="hidden"
            css="mt-0 mx-auto"
            hasLink={false}
            mainCSS="translate-x-[-5%]"
          />

      <div className='flexV center w-full relative h-full bg-blakk overflow-hidden mt-10 pb-20'>
          <div className='lineMob md:hidden w-[3px] bg-primary/50 h-full absolute z-[1] top-8 left-0 ml-5' />
        <div className='wrapper max-w-7xl relative w-full flex center py-10 '>
          <div className='lineDesk w-[3px] bg-primary/50 h-full hidden md:flex absolute z-[1] top-8 left-0 right-0 mx-auto ' />
          <div className='w-3 h-1 bg-primary absolute left-0 right-0 -bottom-2 mx-auto' />
          <Timeline />
        </div>

      </div>

      

    </div>
  )
}

export default TheVisionary