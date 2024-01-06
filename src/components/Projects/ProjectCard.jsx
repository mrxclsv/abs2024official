import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { workData } from '../../utils/data'
// import { workData } from '../../utils/data'
// import vidStudio from '../../assets/vidStudio.mp4'
import { allTransitions } from '../../utils/style'




const ProjectCard = ({project, setNavTrigger}) => {


  const slug = 'work'
  const [projectHover, setProjectHover] = useState(false)



  return (

    <div  onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)} 
          className='w-full flexV center animate-slideup relative'>

      <Link to={`/${slug}/${project.link}`} className={`full aspect-6/4 ${projectHover && 'p-0'} duration-300 relative overflow-hidden gradientDefault`}>
        <div className='flex full center min-w-[400px] w-full min-h-[280px] relative overflow-hidden'>
          <video
            src={project.heroVideo}
            // playsInline
            type="video/mp4"
            autoPlay
            // fluid={true}
            // width="full"
            height="full"
            preload='auto'
            loop
            muted
            controls={false}
            className={`full absolute min-w-[400px] w-full min-h-[280px] m-auto inset-0 object-cover ${project.videoCSS} `}
            id="reelVideo"
          />
        </div>
        <img src={project.heroPhoto} className={`${project.imageCSS} flex center absolute inset-0 object-cover full`} alt='' />
      </Link>


      <div className="ProjectINFO flexV center flex-grow w-full">

        <p className='title mt-4 flex-grow w-full text-center font-semibold text-[22px]'>{project.title}</p>

        <div className="servicesCaseWRAPPER h-[25px] overflow-hidden">
          <div className={`wrapperGroup ${projectHover ? "translate-y-[-25px] opacity-30" : ""} ${allTransitions} duration-200 `}>
            
            <div className="servicesInclude inline text-[15px] h-[8px]">
            {/*  {project.services.map((item, index) => (
                <p key={index} className='inline py-1 group duration-[1s] cursor-pointer opacity-30 !capitalize'>{item.category}</p>
              ))} */}
              <p className='inline py-1 group duration-[1s] cursor-pointer opacity-30 !capitalize'>{project.category.map((item, index) => (
                <span key={index}>{item}</span>
              ))}</p>

            </div>

            <p className='h-[8px] font-light'>view case</p>

          </div>
        </div>

      </div>


      
    </div>
  )
}

export default ProjectCard