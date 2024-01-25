// import { useEffect, useState } from 'react'
// import { useState } from 'react'
import { Link, NavLink, /* useLocation */ } from 'react-router-dom'
import { headers, navbar, social } from '../utils/data'
import { allTransitions } from '../utils/style'



const Navbar = ({ navTrigger, menu, setMenu, toggleMenu, currentHour }) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const notActiveCSS = 'flex flex-row-reverse gap-2 relative center text-xs font-semibold text-neutral-700 hover:text-primary cursor-pointer w-full h-full rounded-lg capitalize px-3 relative z-[2] duration-500'
  const activeCSS = `${notActiveCSS} font-bold underline text-black z-[2] md:text-black ${allTransitions} `

  const headerNotActiveCSS = `flexV justify-end items-end w-full capitalize pr-4 end group h-fit py-4= lg:py-0 relative ${allTransitions}`
  const headerActiveCSS = `${headerNotActiveCSS} pr-4 underline lg:no-underline underline-offset-[10px] opacity-100 font-semibold !text-black z-[2] !md:text-black ${allTransitions} `



  
  return (

    <header className={`fixed shadow-lg shadow-gray-400/5 top-0 sideZero w-[100dvw] z-[300] flex center 
                        h-[75px] bg-white  `}>

      <div className='flex relative w-full max-w-6xl items-center justify-between'>

        <Link to='/' onClick={() => setMenu(false)} className='absLOGO ml-6 absolute--- left-10 z-[300] p-6--- animate-slideleft group '>
          <img className='w-full object-contain scale-[75%] group-hover:scale-[80%] duration-500' src="/abslogo_black.svg" alt="lawwd" />
        </Link>

        <div className={`navLinks flex= center gap-4 z-[300] animate-slidedown h-full hidden lg:flex lg:mr-36  `}>
          {navbar.map((item, index) => (
            <NavLink to={item.link} key={index} onClick={() => setMenu(false)} className={({ isActive }) => isActive ? activeCSS : notActiveCSS}>
              <p className='whitespace-nowrap'>{item.name}</p>
              {/* <i className={`ri-${item.icon}-fill text-lg `} /> */}
            </NavLink>
          ))}

          <Link className={`${menu ? 'opacity-0 translate-x-[50px]' : 'translate-x-[0px] opacity-100'} transition-all duration-1000 bg-black text-white text-xs px-6 tracking-wide py-3 rounded-lg ml-10 whitespace-nowrap`}>Subscribe</Link>
        </div>

        {/* <p className=''>{currentHour}</p> */}

        <button id="menuBtn" onClick={toggleMenu}
          className={`menuBtn z-[300] h-full bg-white rounded-full aspect-square flexV center absolute right-6 md:right-10 animate-slideright duration-700 ease-out 
        ${menu && "bg-gray-100 rounded-full scale-75 "} `}>
          <div className={`line bg-black origin-center top bg-blue-500++ translate-y-[-6px] ${menu && 'rotate-45 translate-y-[2px]'} ${allTransitions} `} />
          <div className={`line bg-black origin-center bot translate-y-[2px] ${menu && ' -rotate-45 translate-y-[3.4px]== '} ${allTransitions}`} />
        </button>

      </div>

      {menu && <div className={`md:hidden fixed inset-0 screen z-[298] bg-white opacity-0 duration-500 ${menu && 'opacity-100 duration-500'} `} />}
      <div className={`flexV lg:flex-row absolute inset-0 screen max-h-[100dvh] =transition-transform duratuion-[300] max-w-[100dvw] items-end bg-white z-[299] gap-10 
                      ${menu ? '' : 'opacity-90  overflow-hidden translate-x-[120%]'} ${allTransitions} duration-[.7s] `}>

        <div className="headersBIGMENU flexV h-full justify-center items-end mx-auto lg:max-w-6xl w-full relative gap-8 px-10 =ml-20 mr-10=">

          <div className='flexV w-fit h-full mt-20 lg:mt-0 center relative'>
            {headers.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                onClick={() => setMenu(false)}
                className={({ isActive }) => isActive ? headerActiveCSS : headerNotActiveCSS}
              >
                <h2 className={`h3 md:text-5xl text-gray-700 text-right self-start w-full whitespace-nowrap h-20 md:h-full py-4 group-hover:text-blakk overflow-visible ${allTransitions} `}>{item.name}</h2>

                <div className={`w-fit -translate-y-2 h-full flex center text-center text-gray-400 object-center opacity-0 relative group-hover:opacity-100 ${allTransitions} `}>
                  <p className={`hidden lg:flex text-right lg:whitespace-nowrap translate-y-[-50%] pl-10 h-fit w-full group-hover:translate-y-[0px] ${allTransitions} font-normal duration-[.5s]`}>{item.descr}</p>
                </div>
              </NavLink>
            ))}
          </div>

          <div className='w-full flex-col-reverse====lg:flex-row flex center md:absolute relative left-0 right-0 md:bottom-8 bottom-4 px-10 center'>

            <div className='flexV gap-6 ==flex-col-reverse lg:flex-row md:w-full justify-end items-end lg:justify-between py-6 mb-2 w-fit lg:gap-4'>
              <div className='socialNetworks flex gap-4 self-center w-fit !text-black '>
                {social?.map((item, index) => (
                  <button
                    key={item.icon} 
                    onClick={() => openInNewTab(`https://${item.link}${item.icon}`)}
                    className={`group gap-2 min-h-[40px] aspect-square center overflow-hidden rounded-full hover:bg-gray-100/80
                  `}>
                    <i className={`ri-${item.title.replaceAll(' ', '')}-fill flex center mx-auto rounded-full p-3 w-10 h-10 !aspect-square !text-[1.4em] z-[3] opacity-70 group-hover:opacity-100 ${allTransitions}`} />
                  </button>
                ))}
              </div>

              <Link className='bg-black text-white text-sm px-3 w-full lg:w-fit self-center py-4 rounded-lg relative'>Become a member today!</Link>
            </div>
          </div>
        </div>


      </div>

    </header>
  )
}

export default Navbar