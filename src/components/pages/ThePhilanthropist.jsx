import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ContactForm, Hero, SplitDiv, TextLayout, daara2, leket2, water } from '../../utils/components'
import { journey, project } from '../../utils/data'

const ThePhilanthropist = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])
  
  return (
    <div className='min-h-screen= h-full w-screen center flexV bg-white text-black gap-10 relative' >

      <Hero image={leket2} title={page} />

      <div className='mt-0 flexV center w-full h-full relative text-black  '>

        <div className='#ABS2024 #BoromTerangaYi max-w-7xl flex center w-full relative h-full pt-6 pb-10'>
          <SplitDiv title="#ABS2024 #BoromTerangaYi" color="white" link=""
            hasTitle={true} hasText={true}  hasDescr
            layout={1} 
            showLines={true}
            text="Philanthropic Trailblazer"
            descr="Abdoulaye SYLLA has redefined the scope of philanthropy, demonstrating how one person's generosity can ignite a wave of positive change across an entire nation. His initiatives address the fundamental challenges faced by the people of Senegal. From education to healthcare, his contributions have laid the groundwork for sustainable development and social upliftment."
            image={water}
            wrapperCSS="mb-0 pb-0"
            css="mt-0 mx-auto"
            imageCSS=''
            hasLink
          />
        </div>
        
        <div className='TheJourney flex-row lg:flex-col scrollbar-hide  w-full start  relative overflow-y-hidden overflow-x-scroll py-10 md:p-[200px]=  lg:h-[100vh]='>
          {/* <i className='ri-arrow-right-fill p-2 m-6 rounded-full bg-neutral-500/10 aspect-square bottom-0 text-white animate-pulse absolute right-0' /> */}
          <div className='sectionCARD flexV items-start justify-start z-[1] w-full lg:w-fit h-fit sticky top-0 px-10'>
            <div className='flex relative w-fit py-10'>
              <i className='ri-arrow-right-fill p-2 m-6 rounded-full bg-neutral-500/10 aspect-square text-blakk animate-pulse absolute bottom-0 left-0 right-0 mx-auto w-8 rotate-90 lg:rotate-0' />
              <SplitDiv title="#ABS2024 #ThePhilanthropist #ABSHommeSocial2023" color="white" link=""
                hasTitle={true} hasText={true}  hasDescr={false}
                layout={1} 
                showLines={true}
                text="The Journey"
                descr=""
                mainCSS="w-fit px-0 pt-0"
                blockCSS="!p-0="
                image={water}
                wrapperCSS="hidden== =absolute"
                css="mt-0 mx-auto"
                imageCSS="hidden"
                hasLink={false}
              />

            </div>
          </div>

          <div id="journey" className='hidden=== 
          flex start w-screen h-[80vh] relative overflow-x-hidden
          '>
              {/* <div className='w-[r200px] absolute left-0 top-0 bottom-0 my-auto z-[2] bg-gradient-to-r from-black to-transparent' /> */}
            <div className='flex scrollbar-hide px-[15vw] h-full gap-8 px-10= overflow-x-auto relative'>
              {journey?.map((item, index) => (
                <div key={index} className='flexV min-w-[300px] md:min-w-[400px] rounded-lg border border-white/40 max-h-[500px] bg-gradient-to-b from-neutral-900/50 to-gray-900 h-full relative pt-6 md:pt-2'>
                  {/* <p className='text-primary mix-blend-difference absolute right-6 md:right-10 tracking-wide top-4 opacity-50 '>{`0${index + 1}`}</p> */}
                  <p className='text-primary font-semibold absolute left-6 md:left-10 tracking-wide  top-4 '>{item.date}</p>
                  <TextLayout
                    title={item.title}
                    text={item.text}
                    descr={item.descr}
                    hasTitle
                    hasText={false}
                    hasDescr
                    showLines={false}
                    color="black"
                    css="lg:min-w-[400px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full flexV center'>
          <img src={daara2} className={``} alt="daara" />
        </div>

      </div>

      <ContactForm />

      </div>
  )
}

export default ThePhilanthropist