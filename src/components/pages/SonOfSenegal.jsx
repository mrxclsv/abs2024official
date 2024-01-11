import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AndTheCommunity, Slide, SplitDiv, TextLayout, absyellowfit, jumeaux, senegalHero } from '../../utils/components'
import { project } from '../../utils/data'

const SonOfSenegal = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])
  

  return (
    <div className='min-h-screen w-screen flexV bg-white text-black pt-[75px]'>

      <div className='hero w-full lg:hidden= h-[50vh] min-h-[400px] center relative bg-gray-100'>
        <div className='full flex center overflow-hidden relative bg-black text-white'>
          <img className='full object-cover origin-top opacity-60' src={senegalHero} alt="beloved son" />
        </div>
        <div className='absolute absoluteAll flex center  '>
        <h1 className='h1 text-white drop-shadow-lg'>Senegal's beloved son</h1>
        </div>
      </div>

      <div className='contentWrapper= flexV relative center mx-auto'>

        <div className='flex-col !lg:flex-row w-screen lg:h-[250vh]==== md:h-[100vh]== bg-gradient-to-t from-gray-200 to-white relative overflow-hidden'>
          <SplitDiv title="The Son of Senegal" color="white" link="/"
            hasQuote={false}
            hasTitle={true} hasText={true}  hasDescr={false}
            showLines={true}
            mainCSS='bg-gradient-to-t from-gray-200 to-white'
            css="w-screen lg:max-w-7xl h-full"
            layout={1} 
            text='Fétë fétë biiy xaalë yoonu sopi, Yoonu koom.'
            descr=""
            wrapperCSS='h-full lg:min-h-[900px] md:min-h-[600px] w-screen px-0  w-full md:max-w-4xl h-fit md:w-full !overflow-hidden ' 
            image={absyellowfit} 
            imageCSS='object-top=== w-full h-full object-contain lg:object-cover origin-bottom md:origin-top  md:object-contain scale-[105%= pt-4 md:translate-y-20'
            hasLink
          />
            {/* <img className='hidden lg:flex absolute z-[0] max-w-[900px] origin-top object-bottom lg:right-0 translate-x-1/4 lg:scale-[60%] right-[15vw]  top-20 h-full mx-auto my-auto object-contain' src={flagsenegal2} alt="senegal" />  */}
          
            {/* <img className='lg:absolute right-0 md:right-[20%] m-auto top-[30%] min-w-[300px] max-w-full lg:scale-[150%] origin-bottom  object-top scale-[120%] z-[1] left-0== top-20===== h-[80vh]== object-contain w-[400px]' src={absyellowfit} alt="senegal" /> */}
        </div>

        <div className='splitText bg-white flexV md:flex-row px-4 lg:px-8 max-w-7xl py-10'>
          <TextLayout title="Roots"
            text="His senegalese heritage"
            descr="Born and raised in Senegal, ABS takes immense pride in his roots. His journey from a humble beginning to becoming a national leader is a testament to the hard work, determination, and the values instilled in him by his Senegalese upbringing. He often speaks of how his Senegalese heritage has shaped his character, instilling in him a deep sense of community, respect for tradition, and the importance of family."
            hasTitle={true}
            hasText={false}
            hasDescr={true}
            showLines={false}
            color="white"
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

        <div className='hashtags bg-gray-100 flexV center relative w-full '>
          <div className='grid grid-cols-2 lg:grid-cols-4 justify-evenly items-center mx-auto max-w-7xl lg:w-full py-6' >
            <button onClick={() => {}} className='hashtag self-start md:self-center lg:w-full'>#ABS2024</button>
            <button onClick={() => {}} className='hashtag self-end md:self-center lg:w-full'>#LeguiFiftyFiftyLeu</button>
            <button onClick={() => {}} className='hashtag self-start md:self-center lg:w-full'>#YoonWi</button>
            <button onClick={() => {}} className='hashtag self-end md:self-center lg:w-full'>#BoromTerangaYi</button>
          </div>
        </div>

        <Slide />

        <div className='flex w-screen relative overflow-hidden center my-20 mb- px-6 lg:px-0 '>
          <img className='full object-cover max-w-7xl self-center rounded-lg' src={jumeaux} alt="beloved son" />
        </div>


      </div>

      <AndTheCommunity />

    </div>
  )
}

export default SonOfSenegal