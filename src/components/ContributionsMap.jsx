import React from 'react'

import { Link } from 'react-router-dom';
import { contributions, movementSlides, project } from '../utils/data';
import { allTransitions } from '../utils/data';
import ScrollTrigger from 'react-scroll-trigger'
import { mapsenegal } from '../utils/components';


const ContributionsMap = () => {




  return (

    <div className='flexV lg:flex-row w-full center relative pb-4 md:pb-0'>

        <div className='image flex full min-h-[40vh] h-fit relative w-full'>
          {contributions?.map((item, index) => (
            <Link to="/projects" key={index} className={`cursor-pointer z-10 hover:scale-125 transition w-[20px] h-[20px] rounded-full absolute absoluteAll flex center my-auto= ${item.position} `}>
                <p className='h5 text-white absolute z-[3]'>{index+1}</p>
                <div className='bg-black/90 full p-2 z-[2] rounded-full absolute animate-pulse delay-75' />
                <div className='bg-black/60 full p-6 opacity-50 rounded-full absolute animate-pulse delay-200' />
            </Link>
          ))}
          <img className='h-full lg:w-full object-contain mix-blend-multiply p-5' src={mapsenegal} alt="senegal" />
        </div>


      </div>
  )
}

export default ContributionsMap