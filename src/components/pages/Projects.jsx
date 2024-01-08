import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { project } from '../../utils/data'


const Projects = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])

  return (
    <div className='w-screen min-h-screen flex center h-full overflow-x-hidden'>
      <div className='wrapper relative'>
        <div className='relative flex start max-w-7xl'>

          Projects 

        </div>
      </div>
    </div>
  )
}

export default Projects