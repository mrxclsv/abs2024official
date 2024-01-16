import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SplitDiv } from '../../utils/components'
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
  },[location])

  const [selectedCard, setSelectedCard] = useState(null)

  const handleCard = (card) => {
    if(card) {
      setSelectedCard(card)
    };
  };



  const Card = ({card, index, selected, handleSelect}) => {
    return (
      <div onClick={() => handleSelect(card)}
      className={`flexV start h-full p-10 cursor-pointer  text-left rounded-xl text-black 
          ${selectedCard ? "bg-primary" : "bg-gradient-to-tr from-gray-100 to-gray-200 hover:from-gray-200 transition duration-700"}  
                `}>
            <div className='flexV items-start justify-start h-full '>
              <h4 className={``}>{`${index < 10 ? '0' : ''}${card.number}`}</h4>
              <h3 className='my-2'>{card.fact}</h3>
            </div>
            <p className='flex w-fit opacity-35'>#100FactsAboutABS</p>
      </div>
    );
  };

  return (
    <div className='page bg-white'>
      <div className='flexV justify-start items-center'>
        {/* <div className='w-fit'>{page}</div> */}
        <div className='flexV w-screen center'>

        <SplitDiv title="outstanding man" color="white" link="#"
            hasQuote={false}
            hasTitle={true} hasText={true}  hasDescr={false}
            showLines={true}
            mainCSS='my-40'
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

        <div className={` flex== center text grid grid-cols-4 gap-6 max-w-7xl ===px-20`}>

          {ABS100FACTS?.slice(0,16).map((card, index) => (
            <Card 
              key={index}
              card={card}
              index={index}
              selected={selectedCard && selectedCard.index === card.number}
              handleSelect={handleCard}
            />
          ))}
        </div>

        </div>
      </div>
    </div>
  )
}

export default ABSFacts