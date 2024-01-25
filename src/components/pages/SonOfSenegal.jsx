import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AndTheCommunity, Slide, SplitDiv, TextLayout, absyellowfit, jumeaux, senegalHero } from '../../utils/components'
import { project } from '../../utils/data'
import ScrollTrigger from 'react-scroll-trigger'

const SonOfSenegal = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    // window.scroll(0,0)
  }, [location])

  const [activateFrame, setActivateFrame] = useState(false)
  console.log(activateFrame)
  // function handleActivate() {
  //   if(setActiv)
  // }


  return (
    <div className='min-h-screen h-full relative w-screen flexV bg-white text-black pt-[75px]'>

      <div className='hero w-full lg:hidden= lg:h-[70vh] min-h-[400px]= center relative bg-gray-100'>
        <div className='full flex center overflow-hidden relative bg-black text-white'>
          <img className='full object-cover origin-top opacity-60' src={senegalHero} alt="beloved son" />
        </div>
        <div className='absolute absoluteAll flex center  '>
        <h1 className='h3 lg:h1 text-white drop-shadow-lg'>Senegal's beloved son</h1>
        </div>
      </div>

      <div className='contentWrapper= flexV w-full relative h-full center mx-auto bg-white'>

        <div className='flex-col !lg:flex-row w-screen bg-gradient-to-t from-gray-200 to-white relative overflow-hidden'>
          <SplitDiv title="The Son of Senegal" color="white" link="/"
            hasQuote={false}
            hasTitle={true} hasText={true} hasDescr={false}
            showLines={true}
            mainCSS='bg-gradient-to-t from-gray-200 to-white'
            css="w-screen lg:max-w-7xl h-full"
            layout={1}
            text='Fétë fétë biiy xaalë yoonu sopi, Yoonu koom.'
            descr=""
            wrapperCSS='h-full max-h-[80vh] h-fit '
            image={absyellowfit}
            imageCSS='pt-4 !h-full object-bottom origin-bottom object-contain '
            hasLink={false}
          />
          {/* lg:min-h-[900px] md:min-h-[600px] w-screen px-0 justify-end items-end w-full md:max-w-4xl h-full md:w-full !overflow-hidden */}

          {/* <img className='hidden lg:flex absolute z-[0] max-w-[900px] origin-top object-bottom lg:right-0 translate-x-1/4 lg:scale-[60%] right-[15vw]  top-20 h-full mx-auto my-auto object-contain' src={flagsenegal2} alt="senegal" />  */}

          {/* <img className='lg:absolute right-0 md:right-[20%] m-auto top-[30%] min-w-[300px] max-w-full lg:scale-[150%] origin-bottom  object-top scale-[120%] z-[1] left-0== top-20===== h-[80vh]== object-contain w-[400px]' src={absyellowfit} alt="senegal" /> */}
        </div>

        <div className='splitText bg-white flexV md:flex-row px-4 lg:px-8 max-w-7xl py-10 lg:h-[60vh]'>
          <TextLayout title="Roots"
            text="His senegalese heritage"
            descr="Born and raised in Senegal, ABS takes immense pride in his roots. His journey from a humble beginning to becoming a national leader is a testament to the hard work, determination, and the values instilled in him by his Senegalese upbringing. He often speaks of how his Senegalese heritage has shaped his character, instilling in him a deep sense of community, respect for tradition, and the importance of family."
            hasTitle={true} hasText={false} hasDescr={true} showLines={false} color="white" 
            css="max-w-7xl"
          />
          <TextLayout title="values"
            text="The family man"
            hasTitle={true}
            hasText={false}
            hasDescr={true}
            color="white"
            showLines={false}
            descr="ABS's journey as a family man, son of Senegal, and a successful professional sets a remarkable example for aspiring individuals in Senegal and beyond. He showcases that it is possible to soar to great heights without compromising  family values. ABS's story is an inspiration for the youth of Senegal, demonstrating that with dedication, resilience, and a strong support system, one can excel both in all spheres of life."
          />
        </div>

        <div className='hashtags bg-gray-100/40 flexV center relative w-full '>
          <div className='grid grid-cols-2 lg:grid-cols-4 justify-evenly items-center mx-auto max-w-7xl lg:w-full py-6' >
            <button onClick={() => { }} className='hashtag self-start md:self-center lg:w-full'>#ABS2024</button>
            <button onClick={() => { }} className='hashtag self-end md:self-center lg:w-full'>#LeguiFiftyFiftyLeu</button>
            <button onClick={() => { }} className='hashtag self-start md:self-center lg:w-full'>#YoonWi</button>
            <button onClick={() => { }} className='hashtag self-end md:self-center lg:w-full'>#BoromTerangaYi</button>
          </div>
        </div>

        <Slide />

        <div className={`flex w-full center relative overflow-hidden center lg:p-20==== max-w-7xl pb-20 `}>
          <ScrollTrigger  className="flex center w-full px-10" 
                          onEnter={() => setActivateFrame(true)} 
                          onExit={() => setActivateFrame(false)}
          >
            <div className='flex w-full center border-[6px] lg:border-[30px] border-blakk/80'>
              <div className='flex center relative w-full'>
                <img className='full object-cover self-center relative' src={jumeaux} alt="beloved son" />
              </div>
            </div>
          </ScrollTrigger>
        </div>


      </div>


    </div>
  )
}

export default SonOfSenegal