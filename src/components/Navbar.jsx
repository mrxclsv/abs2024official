// import { useEffect, useState } from 'react'
import { useState } from 'react'
import { Link, NavLink, /* useLocation */ } from 'react-router-dom'
import { headers, navbar } from '../utils/data'
import { allTransitions } from '../utils/style'
import { abshero, abssit, abssuit1, flagsenegal, mapafrica } from '../utils/components'



// CONSOLE LOGS
// console.log(navbar.length)

const Navbar = ({ navW, navTrigger, menu, setMenu, toggleMenu, currentHour, navHeight  }) => {
  

  const notActiveCSS = 'flexV center text-xs font-semibold text-neutral-700 hover:text-black cursor-pointer w-full h-full rounded-lg capitalize px-3 relative z-[2] duration-500'
  const activeCSS = `${notActiveCSS} font-bold underline text-black z-[2] md:text-black ${allTransitions} ` 

  // const linkCSS = `${isActive && ""}`
  const headerNotActiveCSS = `flexV w-full start group h-fit relative ${allTransitions}`
  const headerActiveCSS = `${headerNotActiveCSS} border-l-[4px]=== border-black=== font-semibold text-black z-[2] md:text-black ${allTransitions} ` 

  const menu0 = abssuit1
  const menu1 = mapafrica
  const menu2 = flagsenegal
  const menu3 = abshero
  const menu4 = abssit

  const [menuImage, setMenuImage] = useState(
    // menu0 && abssuit1
  )

  // console.log(menuImage)

  // const location = useLocation()
  // var pageTitle = String(location.pathname).substring(6)/* .replace(/\/$/, ''); */ 
  

  return (

    <header className={`fixed shadow-lg shadow-gray-400/5 top-0 sideZero w-screen z-[300] flex center 
                        h-[75px] bg-white `}>

      <div className='flex relative w-full max-w-7xl items-center justify-between'>

        <Link to='/' onClick={() => setMenu(false)} className='absLOGO ml-8 absolute--- left-10 z-[300] p-6--- animate-slideleft group '>
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


      <div className={`flexV lg:flex-row absolute inset-0 screen center bg-white z-[299] gap-10 
                      ${menu ? '' : 'opacity-80 translate-x-[120%]'} ${allTransitions} duration-[1s] `}>

        <div className='hidden lg:flex w-2/4 h-full opacity-0 overflow-hidden'>
          <div className={`w-full flex center
                  ${menuImage === menu0 && 'translate-x-[25%]=='}
                  ${menuImage === menu1 && 'translate-x-[25%]=='}
                  ${menuImage === menu2 && 'translate-x-[25%]=='}
                  ${menuImage === menu3 && 'translate-x-[-75%]=='}
                  ${menuImage === menu4 && 'translate-x-[-100%]=='}
                `}>
            {headers?.slice(1).map((item, index) => (
              <img key={index} className='min-w-full w-full h-full object-contain' src={item.image} alt={item.name} />
            ))}
          </div>
        </div>

        <div className="flexV h-full justify-center items-start lg:max-w-7xl w-full relative gap-8 ml-20">

          {headers.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.link} 
              // onMouseEnter={() => setMenuImage(item.image)}
              onClick={() => setMenu(false)} 
              className={({isActive}) => isActive ? headerActiveCSS: headerNotActiveCSS} 
            >
              <h1 className={`h2 md:h1 text-gray-700 pl-10 whitespace-nowrap h-10 md:h-full py-4 group-hover:text-blakk overflow-visible ${allTransitions} `}>{item.name}</h1>

              <div className={`w-fit -translate-y-2 h-full flex center text-center text-gray-400 object-center opacity-0 relative group-hover:opacity-100 ${allTransitions} `}>
                  <p className={`flex whitespace-nowrap translate-y-[-50%] pl-10 h-fit w-full group-hover:translate-y-[0px] ${allTransitions} duration-[.5s]`}>{item.descr}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

    </header>
  )
}

export default Navbar