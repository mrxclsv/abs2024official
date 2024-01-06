import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SplitDiv, TextLayout } from '../../utils/components'
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
    <div className='min-h-screen w-screen flexV bg-white text-black'>

      <div className='hero w-full h-[70vh] min-h-[400px] flex center relative bg-gray-100'>
        <div className='full flex center overflow-hidden relative bg-black text-white'>
          <img className='full object-cover origin-top opacity-60' src="/default.jpg" alt="beloved son" />
        </div>
        <div className='absolute absoluteAll flex center  '>
        <h1 className='h1 text-white drop-shadow-lg'>Senegal beloved son</h1>
        </div>

      </div>

      <div className='contentWrapper flexV center mx-auto'>

        <SplitDiv title="The Family man" 
          hasTitle={true} hasText={true}  hasDescr={true}
          layout={1} 
          showLines={true}
          text="Fétë fétë biiy xaalë yoonu sopi, Yoonu koom"
          descr=""
          color="white" 
        />

        <div className='splitText flex px-10 py-10'>

        <TextLayout title="roots"
          text=""
          descr="Born and raised in Senegal, ABS takes immense pride in his roots. His journey from a humble beginning to becoming a national leader is a testament to the hard work, determination, and the values instilled in him by his Senegalese upbringing. He often speaks of how his Senegalese heritage has shaped his character, instilling in him a deep sense of community, respect for tradition, and the importance of family."
          hasTitle={true}
          hasText={false}
          hasDescr={true}
          />
          <TextLayout title="family man"
          text=""
          descr="ABS's journey as a family man, son of Senegal, and a successful professional sets a remarkable example for aspiring individuals in Senegal and beyond. He showcases that it is possible to soar to great heights without compromising 

          family values. ABS's story is an inspiration for the youth of Senegal, demonstrating that with dedication, resilience, and a strong support system, one can excel both in all spheres of life."
          hasTitle={true}
          hasText={false}
          hasDescr={true}
          />
        </div>

        <div className='hashtags bg-gray-100 flexCenter relative'>
          <h5 className='grid grid-cols-2 gap-6 justify-around max-w-2xl py-6' >
            <span className='hashtag'>#ABS2024</span>
            <span className='hashtag'>#LeguiFiftyFiftyLeu</span>
            <span className='hashtag'>#YoonWi</span>
            <span className='hashtag'>#BoromTerangaYi</span>
          </h5>
        </div>

        <div className='w-full flexV md:flex-row center pt-10 '>
          <div className='left relative overflow-hidden w-full md:w-1/2'>
            <img className='full oject-contain' src="/default.jpg" alt="photos" />
            <div className="descrBox absolute bottom-0 left-0 right-0 flexV py-2 bg-gray-200/70">
              <p>Portrait de famille ABS</p>
            </div>
          </div>

          <div className='flex w-full md:w-1/2 center'>
            <TextLayout 
              title="A dedicated father "
              text=""
              descr="Abdoulaye Sylla remains a devoted father to his children. He emphasizes the importance of family values and the pivotal role that a supportive family environment plays in shaping the future of the next generation. He has always prioritized spending quality time with his children, nurturing their dreams, and instilling in them the same values of integrity and compassion that he upholds in his own life
              "
              hasTitle
              hasText={false}
              hasDescr
              showLines={false}
            />

          </div>


        </div>

        <div className='flex w-screen relative overflow-hiddenf'>
          <img className='full object-cover' src="/default.jpg" alt="beloved son" />
        </div>

      </div>
    </div>
  )
}

export default SonOfSenegal