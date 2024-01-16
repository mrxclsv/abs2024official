import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SplitDiv, abssuit1 } from '../../utils/components'
import { project } from '../../utils/data'

import { ABS100FACTS } from '../../utils/ABS100Facts'
// import { allTransitions } from '../../utils/style'



const ABSFacts = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    // window.scroll(0,0)
  }, [location])


  const [selected, setSelected] = useState(null)

  function handleSingleSelection(getCardId) {
    setSelected(getCardId === selected ? null : getCardId)

    console.log("you've selected card number " + getCardId )
  }





  const Card = ({ item, index, selected }) => {
    return (
      <div onClick={() => handleSingleSelection(index + 1)} id='stickyElement'
        className={`sticky= =top-96
        flexV start h-fit= h-full p-10 cursor-pointer text-left rounded-xl text-black 
          ${selected === index + 1 ? "bg-primary" : "bg-gradient-to-t from-neutral-100 to-white  hover:from-gray-200 transition duration-700"}  
                `}>
        <div className='flexV cardInfo items-start justify-start h-full '>
          <h4 className={``}>{`${index < 9 ? '0' : ''}${item.number}`}</h4>
          <h3 className='my-2'>{item.fact}</h3>
        </div>
        <p className='flex w-fit opacity-35'>#100FactsAboutABS</p>
      </div>
    );
  };




  return (
    <div className='page bg-white pt-[75px] h-[100dvh]= overflow-y-auto scrollbar-hide overflow-x-hidden '>
      <div id='wrapper' className='flexV items-center justify-start h-full '>
        {/* <div className='w-fit'>{page}</div> */}
        <section className='flexV w-full h-[1000vh]=  items-center justify-start gap-20 paddingX overflow-x-hidden relative'>

          <div className='w-screen relative justify-start items-center h-[50dvh] signal bg-gradient-to-r from-blakk to-gray-900'>

            <SplitDiv title="outstanding man" color="black" link="#"
              hasQuote={false}
              hasTitle={true} hasText={true} hasDescr={false}
              showLines={true}
              mainCSS='my-40 sticky top-10 animate-slidedown !bg-transparent z-[3]'
              css="w-screen lg:max-w-7xl h-full"
              layout={1}
              text='100 facts about abs'
              descr=""
              blockCSS="uppercase"
              wrapperCSS='hidden'
              image=''
              imageCSS='hidden'
              hasLink={false}
            />
            <img src={abssuit1} className='absolute object-cover origin-center= object-center opacity-30 inset-0 full' alt="100AboutABS" />
          </div>

          {/* <div className={` flexV h-[100dvh]= items-start grid= grid-cold-2 =lg:grid-cols-4 start =h-fit text gap-6 max-w-7xl mb-20===== relative top-56==== `}> */}
          <div className={` flexV= h-[100dvh]= items-start  grid grid-col-2 lg:grid-cols-4 mx-auto w-full start text gap-6 max-w-7xl mb-20 relative top-56==== `}>

            {ABS100FACTS?.slice(0, ABS100FACTS.length).map((item, index) => (
              <Card
              key={index+1}
              item={item}
              index={index}
              selected={selected}
              />
              ))}

            {/* <img src="/default.jpg" className='w-full z-[5]' alt="after 100 facts" /> */}
          </div>

          <h1>Following these 100 Facts about Abdoulaye SYLLA, what man is his equal?</h1>

        {/* </div> */}
      </section>

      </div>
    </div>
  )
}

export default ABSFacts