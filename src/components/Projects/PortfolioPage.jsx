import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { portfolioData } from '../../utils/data'



const PortfolioPage = () => {


  const slug = 'portfolio'
  const { portfolioId } = useParams()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  // const location = useLocation()
  // console.log(portfolioId + ' ' + location.pathname)

  console.log(portfolioData
    .filter(current => current.title.replaceAll(' ', '-')
      .toLowerCase()
      .includes(portfolioId)))


  return (

    <section className='w-full bg-white flexV min-h-[100vh] start relative text-white pt-[75px]'>
      <div className='animate-slideup flexV start full'>

        {/* PULLED DATA */}
        {portfolioData
          .filter(current => current.title.replaceAll(' ', '-')
            .toLowerCase()
            .includes(portfolioId))

          .map((item, index) => (

            <div key={index} className={`w-full flexV h-fit start text-black relative `}>

              <div id="projectHeader" className='flex flex-col lg:flex-row-reverse center relative full lg:max-h-[40svh]=='>

                <div className='projectCover relative w-full max-h-[600px] lg:w-1/2 h-full '>
                  <img src={item.cover} className='full object-cover relative ' alt={item.title} />
                </div>

                <div className='projectInfo flex center relative w-full lg:w-1/2 h-full text-white mix-blend-difference'>
                  <div className='infoWrapper full flexV text-left start p-6'>
                    <h4 className='w-full text-xl font-[500]'>{item.title}</h4>
                    <h4 className='my-3'>{item.descr || `This is a description for project ${item.title}. Kindly find and edit it in data.js at const portfolioData.descr`}</h4>
                    <h4 className='w-full text-left opacity-70 relative'><i className='ri-map-pin-line mr-1' />{item.location || 'This location, Senegal'}
                      <span className='absolute right-0 top-0 muted '>{item.year || "2023"}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>

              <div id="ProjectContent" className='w-full h-[30vh] flexV start bg-gradient-to-b from-gray-100 to-white'>
                {/* {content.mausole} */}
              </div>
            </div>

          ))}
      </div>
    </section>
  )
}

export default PortfolioPage