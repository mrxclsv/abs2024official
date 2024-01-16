import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ContactForm, Hero, SplitDiv, TextLayout, daara2, leket2, water } from '../../utils/components'
import { journey, news, project } from '../../utils/data'
import { allTransitions } from '../../utils/style'

const ThePhilanthropist = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    // window.scroll(0,0)
  },[location])
  
  return (
    <div className='min-h-screen h-full w-screen center flexV bg-white text-black gap-10 relative pt-[75px]' >

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
              <i className='ri-arrow-right-fill p-2 m-6 rounded-full min-w-[44px] bg-neutral-500/10 aspect-square text-blakk animate-pulse absolute bottom-0 left-0 right-0 mx-auto w-8 =rotate-90 lg:rotate-0= z-[2]' />
              <SplitDiv title="#ABS2024 #ThePhilanthropist #ABSHommeSocial2023" color="white" link=""
                hasTitle={true} hasText={true}  hasDescr={false}
                layout={1} 
                showLines={false}
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
          flex start w-screen h-[60svh] relative overflow-x-hidden
          '>
            {/* <div className='scrollDIV w-full === signal ==== absolute bottom-0 z-[5] inset-0 h-[5px] '>
              <div className='w-1/2 h-full bg-primary' />
            </div> */}

              {/* <div className='w-[r200px] absolute left-0 top-0 bottom-0 my-auto z-[2] bg-gradient-to-r from-black to-transparent' /> */}
            <div className='flex scrollbar-hide px-[15vw] lg:px-10= h-full gap-8 px-10= overflow-x-auto snap-mandatory snap-x relative py-10'>
              {journey?.map((item, index) => (
                <div key={index} className='snap-center flexV min-w-[300px] md:min-w-[400px] rounded-lg border= border-white/40 max-h-[500px] bg-gradient-to-b from-neutral-900/50 to-gray-900 h-full relative pt-6 md:pt-2 group overflow-hidden'>
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
                    titleCSS="line-clamp-2= min-h-[70px]  font-semibold"
                    descrCSS="h-full"
                    color="black"
                    css="lg:min-w-[400px]= justify-around "
                  />
                  <div className={`translate-x-[100%] hidden lg:flex group-hover:translate-x-0 absolute inset-0 full z-[4] bg-black rounded-lg overflow-hidden ${allTransitions} !ease-in-out`}>
                    <img src="/default.jpg" className={`full object-cover opacity-80  `} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-40 lg:mt-10 w-full flexV center relative overflow-visible bg-gradient-to-b from-white to-orange-200 '>
          <div className='flexV lg:flex-row w-full relative center overflow-visible'>
            <p className=' lg:max-w-3xl w-full text-left self-center lg:text-4xl leadin-[200%] lg:leading-[150%] portrait:max-w-[80svw] landscape:max-w-[30svw] inline lg:absolute top-40 left-40 lg:my-auto z-[0]'>
              A pivotal area transformed by Abdoulaye's contributions is education. By investing significantly in educational infrastructure and scholarships.
            </p>
          <img src={daara2} className={`w-[100dvw] z-[1]`} alt="daara" />
          </div>
        </div>
        
        <div className="inThePress flexV relative max-w-7xl w-full" id="Press">
        <SplitDiv title="#ABS2024 #ThePhilanthropist #ABSHommeSocial2023" color="white" link=""
                hasTitle={true} hasText={true}  hasDescr={false}
                layout={1} 
                showLines={true}
                text="ABS in the Press"
                descr=""
                mainCSS="w-full px-0 pt-0"
                blockCSS="!p-0= w-full self-start"
                image={water}
                wrapperCSS="hidden"
                css="mt-0 mx-auto w-full "
                imageCSS="hidden"
                hasLink={false}
              />
          <div className='grid grid-cols-2 lg:grid-cols-4 center w-full justify-between py-10'>

            {/* <p>There {news.length > 1 ? 'are' : 'is'} {news.length} {news.length > 1 ? 'articles' : 'article'} about ABS in the news</p> */}
            {/* NOTIF MARK */}
            {/* {news.length > 1 && <div></div>} */}

          {news?.map((item, index) => (
            <>
              {news.length < 1 ?

              <p className='flex text-xl'>No news available, please try again later.</p>
              :
              <button href={item.link} key={index} className=' flexV center relative overflow-hidden gap-10 lg:w-[20vw] lg:max-w-[200px] aspect-16/9 p-6 group'>
                <img 
                  src={item.image} 
                  className="newsElement w-full scale-[.95] opacity-[.7] saturate-0 group-hover:opacity-100 group-hover:scale-100 group-hover:saturate-100 transition duration-700" 
                  alt={`ABS in ${item.title}`} 
                />
              </button>
              }
            </>       
          ))}
        </div>
        </div>

      </div>

      <ContactForm />

      </div>
  )
}

export default ThePhilanthropist