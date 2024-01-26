import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { portfolioData } from '../../utils/data'



const PortfolioPage = () => {


  const slug = 'portfolio'
  const { portfolioId } = useSearchParams()


  return (

    <div className='w-full flexV min-h-[100vh] start relative text-white pt-[75px]'>
      <div className='animate-slideup flexV start'>

        {/* PULLED DATA */}
        {portfolioData.map((item, index) => {
          <div className={`w-full flex center bg-blakk/80 text-white `}>
            <p>{item.title}</p>
            <p>{item.descr}</p>
            <p>via this link <span></span>{item.link}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default PortfolioPage