import React, { useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
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
  // console.log(portfolioData.length)


  return (
    <section className='flexV w-full items-start justify-start'>


      {portfolioData?.length !== 0 &&
        <Hero page={page.replace('/', '')}
          title='Impacting an entire nation'
          image={mapsenegal}
          css='bg-black lg:w-screen lg:h-[50vh] mt-[50px] lg:max-h-[800px]='
          hasGradient={true}
          imageCSS='!opacity-30 object-left h-full origin-top lg:translate-x-[-25vw] lg:hover:animate-pulse lg:w-full lg:object-contain lg:object-right lg:origin-center lg:scale-[200%] bg-white'
        />}

      <div id="portfolioDiv" className='flexV items-start justify-start h-full w-full relative pb-20 bg-white'>

        <div className='flex justify-start items-start py-10 lg:max-w-7xl w-full h-full mx-auto relative'>

          {portfolioData.length > 1 &&
            <div className='portfolioItems grid grid-cols-2  5xl:grid-cols-3 gap-6 lg:gap-14 lg:gap-y-40 justify-between items-start relative w-full px-5 py-10'>

              {/* PORTFOLIO ITEMS */}
              {portfolioData?.map((item, index) => (
                <Link to={`/portfolio/${item.title.replaceAll(' ', '-').toLowerCase()}`} key={index} className='flexV animate-slidedown center relative w-full h-full group
                text-black  '>

                  <div className="coverWrapper full flex center group relative bg-black aspect-4/5 lg:aspect-16/9">
                    <img
                      src="/default.jpg"
                      alt={item.title}
                      className='object-cover relative full opacity-100 group-hover:scale-105 group- hover:opacity-50 transition duration-700 ease-in-out'
                    />
                  </div>

                  <div className='infoDesktop hidden lg:flex absolute inset-0 absoluteAll center'>
                    <div className="infoWrapper opacity-10 translate-y-8 group-hover:translatey-y-0 group-hover:opacity-100 duration-700 ease-in-out flexV center full">
                      <div className='bg-gradient-to-t from-blakk to-transparent absolute bottom-0 h-[25%]z-[2]' />
                      <p className=''>{item.title || 'Project Title Placeholder'}</p>
                    </div>
                  </div>

                  <div className='infoMobile relative flexV lg:hidden mt-2 '>
                    <p className=''>{item.title || 'Project Title Placeholder'}</p>
                    <p className=''>{item.location || 'This location, Senegal'}</p>
                  </div>
                  {/* <p>{item.descr}</p> */}
                </Link>
              ))}
            </div>
          }

          {/* IF NO PORTFOLIO DATA */}

          {/* {
            portfolioData.length === 0  &&
            <div className='mx-auto flexV center w-full h-full min-h-[500px] relative'>
              <p className='h4 lg:h3 text-black'>
                Something went wrong when finding ABS portfolio. <br />Please try again later.
              </p>
              <button onClick={() => navigate(-1)} className='flex mt-10 center px-6 py-3 w-[300px] gap-4 rounded-lg text-black bg-white hover:bg-gray-100 transition'>
                <i className='ri-arrow-left-s-line text-2xl ' />
                Go back
              </button>
            </div>
          } */}

        </div>
      </div>
    </section>
  )
}

export default Portfolio