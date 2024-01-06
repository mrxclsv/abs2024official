import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { project } from '../../utils/data'
import { Timeline } from '../../utils/components'

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
          <img className='full object-cover object-top origin-top opacity-60 group-hover:opacity-100 transition duration-1000 ' src="/abs/abs_sit.png" alt="ABS The Business Man" />
        </div>
        <div className='absolute absoluteAll flex center  '>
        <h1 className='h1 text-white drop-shadow-lg translate-y-20'>I'm Abdoulaye SYLLA #ABS2024</h1>
        </div>
      </div>

      <h2 className='h2 flex center z-[20] translate-y-10 text-white drop-shadow-lg  relative gap-2'>Timeline <span className='text-sm absolute translate-y-[30px] font-light'>of accomplishments</span></h2>

      <div className='flexV center w-full relative h-full bg-blakk overflow-hidden mt-10'>
          <div className='lineMob md:hidden w-[3px] bg-primary/50 h-full absolute z-[1] top-8 left-0 ml-5' />
        <div className='wrapper max-w-7xl relative w-full flex center py-10 '>
          <div className='lineDesk w-[3px] bg-primary/50 h-full hidden md:flex absolute z-[1] top-8 left-0 right-0 mx-auto ' />
          <Timeline />
        </div>

      </div>

      

    </div>
  )
}

export default TheVisionary