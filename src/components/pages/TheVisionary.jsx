import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { project } from '../../utils/data'
import { ContactForm, SplitDiv, Timeline, abssit, water } from '../../utils/components'

const TheVisionary = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])
  
  return (
    <div className='min-h-screen h-full= w-screen flexV bg-blakk text-black gap-10 relative scroll-smooth pt-[75px]' >

      <div className='hero w-full fixed= h-[30vh] lg:h-[60vh] min-h-[400px] flex center relative bg-gray-100 group'>


        <div className='full flex center overflow-hidden relative bg-black text-white'>
          <img className='full object-cover object-top origin-top opacity-60 lg:group-hover:opacity-100 transition duration-1000 ' src={abssit} alt="ABS The Visionary" />
        </div>
        <div className='absolute absoluteAll flex center  '>
          <h1 className='h1 text-white drop-shadow-lg translate-y-20 px-4'>I'm Abdoulaye SYLLA #ABS2024</h1>
        </div>
      </div>

      <SplitDiv title="#ABS2024 #BoromTerangaYi" color="black" link="#"
        hasTitle={true} hasText={true}  hasDescr={false}
        layout={1} 
        showLines={false}
        text="Timeline"
        descr=""
        image={water}
        wrapperCSS="hidden px-0 mx-0 h-fit"
        css="mt-0 mx-auto !pl-0 !ml-0 w-full center h-fit"
        blockCSS="px-0 pt-0 ml-0 lg:mx-auto w-full center text-center h-fit"
        hasLink={false}
        mainCSS="mt-0 pt-0 !ml-0 !pl-0 h-fit"
      />

      <div className='flexV center w-full relative h-full bg-blakk overflow-hidden lg:mt-10 mb-20'>
          <div className='lineMob md:hidden w-[3px] bg-primary/50 h-full absolute z-[1] top-6 left-0 ml-5' />
        <div className='wrapper max-w-7xl relative w-full flex center py-6 '>
          <div className='lineDesk w-[3px] bg-primary/50 h-full hidden md:flex absolute z-[1] top- bottom-4 left-0 right-0 mx-auto ' />
          <div className='w-3 h-1 bg-primary absolute left-4 lg:right-0 lg:left-0 bottom-3 mx-auto' />
          <Timeline />
        </div>

      </div>

    <div className='flex w-screen bg-gray-100 center h-fit'>
    <ContactForm />
    </div>
    

    </div>
  )
}

export default TheVisionary