import React from 'react'
import { social } from '../utils/data'
import { allTransitions } from '../utils/style'
// import { Link } from 'react-router-dom'

const Socials = ({css, overrideCSS, simplified}) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`grid grid-cols-3 text-white ${simplified && `${overrideCSS}`} w-full h-fit p-10 gap-10 lg:gap-0 bg-blakk full z-[1]  center ${css} `}>

        {social?.map((item, index) => (
          <button key={item.icon} onClick={() => openInNewTab(`https://${item.link}${item.icon}`)}  className='lg:min-w-[150px] h-fit lg:py-6 min-h-[150px] lg:min-h-[80px] flexV border-none hover:border-l-[3px] border-gray-400/60 flexV center group gap-2'>
            <i className={`ri-${item.title.replaceAll(' ', '')}-fill flex center rounded-full p-3 w-16 h-16 text-[3rem] z-[3] opacity-70 group-hover:opacity-100 ${allTransitions}`} />
            {!simplified && <p className='text-xs lg:h4 mt-2 tracking-widest font-semibold uppercase'>{item.title}</p>
            }
          </button>
        ))}
        
      </div>
  )
}

export default Socials