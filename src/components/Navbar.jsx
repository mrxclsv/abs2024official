// import { useEffect, useState } from 'react'
import { Link, NavLink, /* useLocation */ } from 'react-router-dom'
import { headers, navbar } from '../utils/data'
import { allTransitions } from '../utils/style'



// CONSOLE LOGS
// console.log(navbar.length)

const Navbar = ({ navW, navTrigger, menu, setMenu, toggleMenu, currentHour, navHeight  }) => {
  

  const notActiveCSS = 'flexV center text-xs font-semibold text-neutral-700 hover:text-black cursor-pointer w-full h-full rounded-lg capitalize px-3 relative z-[2] duration-500'
  const activeCSS = `${notActiveCSS} font-bold underline text-black z-[2] md:text-black ${allTransitions} ` 

  // const location = useLocation()
  // var pageTitle = String(location.pathname).substring(6)/* .replace(/\/$/, ''); */ 
  

  return (

    <header className={`fixed shadow-lg shadow-gray-400/5 top-0 sideZero w-screen z-[300] flex center 
                        h-[75px] bg-white `}>

      <div className='flex relative w-full max-w-7xl items-center justify-between'>

        <Link to='/' onClick={() => setMenu(false)} className='absLOGO absolute--- left-10 z-[300] p-6--- animate-slideleft group '>
          <img className='w-full object-contain scale-[75%] group-hover:scale-[80%] duration-500' src="/abslogo_black.svg" alt="lawwd" />
        </Link>


        <div className={`flex= gap-6 z-[300] animate-slidedown h-full hidden md:flex  `}>
          {navbar.map((item, index) => (
            <NavLink to={item.link} key={index} onClick={() => setMenu(false)} className={({isActive}) => isActive ? activeCSS : notActiveCSS }>
                <p className='whitespace-nowrap'>{item.name}</p>
            </NavLink>
          ))}
        </div>

        <p className=''>{currentHour}</p>

        <button id="menuBtn" onClick={toggleMenu} className={`menuBtn z-[300] h-full aspect-square flexV center absolute right-10 animate-slideright duration-700 ease-out 
        ${menu && "bg-gray-100 rounded-full scale-75 "} `}>
          <div className={`line bg-black origin-center top bg-blue-500++ translate-y-[-6px] ${menu && 'rotate-45 translate-y-[2px]'} ${allTransitions} `} />
          <div className={`line bg-black origin-center bot translate-y-[2px] ${menu && ' -rotate-45 translate-y-[3.4px]== '} ${allTransitions}`} />
        </button>

      </div>

      <div className={`flexV absolute inset-0 screen center bg-gray-100 z-[299] gap-10 ${menu ? '' : 'opacity-80 translate-x-[120%]'} ${allTransitions} duration-[1s] `}>
          {headers.map((item, index) => (
            <NavLink key={index} to={item.link} onClick={() => setMenu(false)} className={`flex center group gap-8 w-[60vw] py-4 ml-[30vw] mr-24 h-fit relative ${allTransitions} `} >
                <h1 className={`h2 md:h1 text-gray-700 whitespace-nowrap h-10 group-hover:text-blakk overflow-visible ${allTransitions} `}>{item.name}</h1>
                <div className={`w-full h-full flex text-gray-400 object-center text-left opacity-0 relative group-hover:opacity-100 ${allTransitions} `}>
                    <p className={`flex absolute translate-y-[-50%] h-fit inset-0 my-auto w-full group-hover:translate-y-[0px] ${allTransitions} duration-[.5s]`}>{item.descr}</p>
                </div>
            </NavLink>
          ))}
      </div>

    </header>
  )
}

export default Navbar