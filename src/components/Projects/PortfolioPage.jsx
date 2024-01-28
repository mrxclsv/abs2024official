import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { portfolioData } from '../../utils/data'



const PortfolioPage = () => {


  const slug = 'portfolio'
  const { portfolioId } = useParams()

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  // const location = useLocation()
  // console.log(portfolioId + ' ' + location.pathname)

  console.log(portfolioData
    .filter(current => current.title.replaceAll(' ', '-')
      .toLowerCase()
      .includes(portfolioId)))



  return (

    <section className='w-full bg-white flexV min-h-[100vh] start relative text-white pt-[75px]'>

      {/* <div className={`h-10 flex absolute  bg-red-400 left-0 right-0 h- mx-auto z-[10] top-[20vh] my-auto `} /> */}

      <div className='animate-slideup= flexV start full'>

        {/* PULLED DATA */}
        {portfolioData
          .filter(current => current.title.replaceAll(' ', '-')
            .toLowerCase()
            .includes(portfolioId))

          .map((item, index) => (

            <div key={index} className={`w-full flexV h-fit start text-black relative max-w-7xl mx-auto `}>

              <div id="projectHeader" className='flex flex-col lg:flex-row-reverse center relative full lg:max-h-[40svh]=='>

                <div className='projectCover relative w-full max-h-[600px] lg:w-1/2 h-full '>
                  <img src={item.cover} className='full object-cover relative ' alt={item.title} />
                </div>


                <div className='projectInfo flex center lg:start px-6 relative w-full lg:w-1/2  h-full text-white mix-blend-difference animate-slideup'>
                  <div className='infoWrapper full flexV text-left start px-2 py-6 max-w-[400px] mx-auto self-start w-full '>
                    <h4 className='title_medium w-fit text-xl py-2 font-[500]'>{item.title}</h4>
                    {/* <p className='font-[200] my-3 tracking-wide leading-[200%] '>{item.descr || `This is a description for project ${item.title}. Kindly find and edit it in data.js at const portfolioData.descr`}</p> */}
                    <p className='w-full text-left opacity-70= relative'><i className='ri-map-pin-line mr-1' />{item.location || 'This location, Senegal'}
                      <span className='absolute right-0 top-0 muted= '>{item.year || "2023"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div id="ProjectContent" className='w-full h-[30vh] py-10 flexV start bg-gradient-to-b= from-gray-100= to-white='>
                <div className='flexV start mx-auto max-w-7xl paddingX'>
                  <p className='my-3 tracking-wide leading-[200%] text-left px-10 '>{item.descr || `This is a description for project ${item.title}. Kindly find and edit it in data.js at const portfolioData.descr`}</p>
                </div>

                {/* {content.mausole} */}
              </div>
            </div>

          ))}
      </div>
    </section>
  )
}

export default PortfolioPage