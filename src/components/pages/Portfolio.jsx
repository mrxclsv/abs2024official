import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { contributions, portfolioData, project } from '../../utils/data'
import Hero from '../Hero'
import { mapsenegal } from '../../utils/components'


const Portfolio = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])


  const navigate = useNavigate()

  return (
    <div className='w-[100vw] min-h-screen h-full flexV start relative overflow-x-hidden'>
      <div className='portfolioWrapper flexV h-full w-full start relative bg-gray-200 text-black '>

        <Hero page={page.replace("/", "")}
          title='Impacting an entire nation'
          image={mapsenegal}
          css='bg-black h-[65vh] lg:w-screen lg:min-h-[800px]'
          hasGradient={true}
          imageCSS='!opacity-30 object-left h-full origin-top lg:w-full lg:object-contain lg:object-right lg:origin-center lg:scale-[200%] bg-white'
        />

        <div className='flexV min-h-[60svh] h-full w-full relative start max-w-7xl mx-auto py-10'>
          {portfolioData ?
            <div className='portfolioItems grid grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-start relative w-full px-5 py-10'>
              {portfolioData?.map((item, index) => (
                <div key={index} className='flexV center relative p-4 w-full h-full bg-gradient-to-b from-white to-gray-100  text-black aspect-4/6 lg:aspect-16/9 '>
                  <p>{item.title || 'Project Title Placeholder'}</p>
                  <p>{item.descr}</p>
                </div>
              ))}
            </div>

            :

            <>
              <p className='h4 lg:h3'>
                Something went wrong when finding ABS portfolio. <br />Please try again later.
              </p>
              <button onClick={() => navigate(-1)} className='flex center px-6 py-3 w-[300px] gap-4 rounded-lg text-black bg-white hover:bg-gray-100 transition'>
                <i className='ri-arrow-left-s-line text-2xl ' />
                Go back
              </button>
            </>


          }

        </div>
      </div>
    </div>
  )
}

export default Portfolio