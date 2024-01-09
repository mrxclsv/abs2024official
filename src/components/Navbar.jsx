// import { useEffect, useState } from 'react'
// import { useState } from 'react'
import { Link, NavLink, /* useLocation */ } from 'react-router-dom'
import { headers, navbar, social } from '../utils/data'
import { allTransitions } from '../utils/style'



const Navbar = ({ navTrigger, menu, setMenu, toggleMenu, currentHour }) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const notActiveCSS = 'flexV center text-xs font-semibold text-neutral-700 hover:text-black cursor-pointer w-full h-full rounded-lg capitalize px-3 relative z-[2] duration-500'
  const activeCSS = `${notActiveCSS} font-bold underline text-black z-[2] md:text-black ${allTransitions} ` 

  const headerNotActiveCSS = `flexV justify-end items-end w-full capitalize pr-4 end group h-fit py-4= lg:py-0 relative ${allTransitions}`
  const headerActiveCSS = `${headerNotActiveCSS} pr-4 underline=underline-offset-[10px]= opacity-100 font-semibold !text-black z-[2] !md:text-black ${allTransitions} ` 


  return (

    <header className={`fixed shadow-lg shadow-gray-400/5 top-0 sideZero w-screen z-[300] flex center 
                        h-[75px] bg-white  `}>

      <div className='flex relative w-full max-w-7xl items-center justify-between'>

        <Link to='/' onClick={() => setMenu(false)} className='absLOGO ml-6 absolute--- left-10 z-[300] p-6--- animate-slideleft group '>
          <img className='w-full object-contain scale-[75%] group-hover:scale-[80%] duration-500' src="/abslogo_black.svg" alt="lawwd" />
        </Link>

        <div className={`navLinks flex= center gap-4 z-[300] animate-slidedown h-full hidden md:flex  `}>
          {navbar.map((item, index) => (
            <NavLink to={item.link} key={index} onClick={() => setMenu(false)} className={({isActive}) => isActive ? activeCSS : notActiveCSS }>
              <p className='whitespace-nowrap'>{item.name}</p>
            </NavLink>
          ))}

          <Link className={`${menu ? 'opacity-0 translate-x-[50px]' : 'translate-x-[0px] opacity-100'} transition-all duration-1000 bg-black text-white text-xs px-6 tracking-widest py-3 rounded-lg ml-10 whitespace-nowrap`}>Subscribe</Link>
        </div>

        <p className=''>{/* {currentHour} */}</p>

        <button id="menuBtn" onClick={toggleMenu} 
                className={`menuBtn z-[300] h-full aspect-square flexV center absolute right-10 animate-slideright duration-700 ease-out 
        ${menu && "bg-gray-100 rounded-full scale-75 "} `}>
          <div className={`line bg-black origin-center top bg-blue-500++ translate-y-[-6px] ${menu && 'rotate-45 translate-y-[2px]'} ${allTransitions} `} />
          <div className={`line bg-black origin-center bot translate-y-[2px] ${menu && ' -rotate-45 translate-y-[3.4px]== '} ${allTransitions}`} />
        </button>

      </div>


      <div className={`flexV lg:flex-row absolute inset-0 screen items-end bg-white z-[299] gap-10 
                      ${menu ? '' : 'opacity-80 overflow-hidden translate-x-[120%]'} ${allTransitions} duration-[.7s] `}>

        <div className='hidden =============lg:flex w-2/4 h-full opacity-0 overflow-hidden'>
          <div className={`w-full flex center
                `}>
                  {/* ${menuImage === menu0 && 'translate-x-[25%]=='}
                  ${menuImage === menu1 && 'translate-x-[25%]=='}
                  ${menuImage === menu2 && 'translate-x-[25%]=='}
                  ${menuImage === menu3 && 'translate-x-[-75%]=='}
                  ${menuImage === menu4 && 'translate-x-[-100%]=='} */}
            {headers?.slice(1).map((item, index) => (
              <img key={index} className='min-w-full w-full h-full object-contain' src={item.image} alt={item.name} />
            ))}
          </div>
        </div>

        <div className="headersBIGMENU flexV h-full justify-center items-end mx-auto lg:max-w-7xl w-full relative gap-8 px-10 =ml-20 mr-10=">

          <div className='flexV w-fit h-fit relative'>
          {headers.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.link} 
              // onMouseEnter={() => setMenuImage(item.image)}
              onClick={() => setMenu(false)} 
              className={({isActive}) => isActive ? headerActiveCSS: headerNotActiveCSS} 
            >
              <h1 className={`h2 md:h1 text-gray-700 text-right self-start w-full whitespace-nowrap h-20 md:h-full py-4 group-hover:text-blakk overflow-visible ${allTransitions} `}>{item.name}</h1>

              <div className={`w-fit -translate-y-2 h-full flex center text-center text-gray-400 object-center opacity-0 relative group-hover:opacity-100 ${allTransitions} `}>
                  <p className={`hidden lg:flex text-right lg:whitespace-nowrap translate-y-[-50%] pl-10 h-fit w-full group-hover:translate-y-[0px] ${allTransitions} duration-[.5s]`}>{item.descr}</p>
              </div>
            </NavLink>
          ))}
          </div>

          <div className='w-full flex-col-reverse====lg:flex-row flex center absolute left-0 right-0 lg;bottom-4 bottom-20 center'>

            <div className='flexV gap-6 ==flex-col-reverse lg:flex-row w-full items-center ===center justify-between px-8 py-6 mb-2 lg:gap-4'>
              <div className='socialNetworks flex gap-4 self-center w-fit !text-black '>
              {social?.map((item, index) => (
                <button 
                  key={item.icon} onClick={() => openInNewTab(`https://${item.link}${item.icon}`)}  
                  className={`group gap-2 min-h-[40px] aspect-square center hover:bg-gray-100/80
                  `}>

                  <i className={`ri-${item.title.replaceAll(' ', '')}-fill flex center mx-auto rounded-full p-3 w-10 h-10 !aspect-square !text-[1.4em] z-[3] opacity-70 group-hover:opacity-100 ${allTransitions}`} />
                </button>
                ))}

              </div>
              <Link className='bg-black text-white text-sm px-3 w-fit self-center py-4 rounded-lg relative '>Become a member today!</Link>
            </div>
          </div>
        </div>

        
      </div>

    </header>
  )
}

export default Navbar