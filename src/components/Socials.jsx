import React from 'react'
import { social } from '../utils/data'
import { allTransitions } from '../utils/style'
// import { Link } from 'react-router-dom'

const Socials = ({css, overrideCSS, simplified}) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`grid grid-cols-3 text-white center ${simplified && ` ${overrideCSS}`} w-full h-fit p-10 gap-10 lg:gap-0 bg-blakk full z-[1]  center ${css} `}>

        {social?.map((item, index) => (
          <button key={item.icon} onClick={() => openInNewTab(`https://${item.link}${item.icon}`)}  
                  className={`group gap-2  lg:py-6 min-h-[150px] lg:min-h-[50px] center
                  ${simplified && `md:!max-w-[50px] lg:py-0 hover:bg-gray-100/80 flex center ${allTransitions} aspect-square rounded-full`}
                  `}>

            <i className={`ri-${item.title.replaceAll(' ', '')}-fill flex center mx-auto rounded-full p-3 w-16 h-16 ${simplified && 'w-fit h-fit !aspect-square !text-[1.4em]'} text-[3rem] z-[3] opacity-70 group-hover:opacity-100 ${allTransitions}`} />

            {!simplified && 
            <p className='text-xs lg:h4 mt-2 tracking-widest font-semibold uppercase'>{item.title}</p>
            }
          </button>
        ))}
        
      </div>
  )
}

export default Socials