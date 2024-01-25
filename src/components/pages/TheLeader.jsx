import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom"
import { SplitDiv, TextLayout, workforce, absstand, absleader, ContactForm, AndTheCommunity, abssignature, } from '../../utils/components'
import { project } from '../../utils/data'
import { allTransitions } from '../../utils/style'

const TheLeader = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  // var heroHeight = document.getElementById('hero').offsetHeight

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])


  // HERO REFERENCE
  const heroRef = useRef()
  const [elementWidth, setElementWidth] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    function handleResize() {
      if (heroRef.current) {
        const x = heroRef.current.offsetLeft
        const y = heroRef.current.offsetTop
        const width = heroRef.current.offsetWidh
        const height = heroRef.current.offsetHeight
        const scrollY = heroRef.current.getBoundingBoxClient
        setElementHeight(height)
        setElementWidth(width)
        setPosition({ x, y })
      }
    }

    handleResize();
    window.addEventListener("scroll", handleResize)
    return () => window.removeEventListener('scroll', handleResize)
  }, [heroRef])

  useEffect(() => {
    if (heroRef.current.offsetTop > 200) {

    }
  }, [])

  console.log("Hero section dimension is " + elementHeight + ' and position is' + position.x + " " + position.y)


  return (
    <div className='min-h-screen w-screen relative flexV start bg-white text-black'>

      <div ref={heroRef} id="hero" className='hero w-screen h-[110vh] min-h-[400px] flex center relative bg-gray-100 z-[0] '>
        <div className='full flex min-w-[100dvw] center overflow-hidden relative bg-white text-white'>
          <img className='min-w-[100dvw] min-h-[100vh] pt-4 top-16= h-full object-cover lg:!object-contain origin-bottom opacity-100 fixed hover:scale-110 transition duration-[4s]' src={absleader} alt="xam sa bopp" />
        </div>
        <div className='absolute absoluteAll flex center left-0 right-0 px-4 -translate-y-20=  '>
          <h1 className='h1 leading-[100%] font-normal text-left text-[100px] uppercase md:absolute md:left-20 md:my-auto text-white lg:text-blakk'>
            Xam <br /> sa <br /> bopp
          </h1>
        </div>

      </div>

      <div className='z-[2] flexV start w-full relative'>

        <div id='text' className='w-full relative flex center h-[100svh] overflow-hidden bg-primary bg-gradient-to-b= =from-gray-200 to-gray-='>
          <div className='flexV full center relative py-20 p-10'>
            <div className='flexV center max-w-xl leading-[200%] gap-10 relative'>
              {/* <span className='text-sm'>Abdoulaye SYLLA</span> */}
              <img className='flex object-contain h-24 relative' src={abssignature} alt='Abs signature' />
              <h4 className='text-lg z-[2] relative'> Building a Better Future Through Local <br /> and Global Talent.</h4>
            </div>

            <img src={absleader}
              className=' absolute z-[1] opacity-40 translate-x-1/2 saturate-0 top-0 bottom-0 h-full my-auto object-top scale-[200%] object-cover right-0 self-end w-fit mix-blend-multiply transition duration-[4s] translate-y-1/2 '
              // origin-right object-right
              alt="xam sa bopp" />

          </div>
          {/* <image className="w-10 h-10 ========= signal" width="96" height="96" src={abs_signature} /> */}
        </div>

        <div id="Slides" className='flexV center overflow-hidden bg-white z-[1] w-sceen'>

          <div className='TheWorkforce relative'>
            <SplitDiv title="Yoon Wi" color="black" link="/"
              hasTitle={true} hasText={true} hasDescr={false}
              showLines={true}
              layout={1}
              mainCSS="w-[100vw]"
              css='group bg-blakk relative w-screen flex justify-end items-start md:pr-0 lg:h-[85vh] lg:min-h-[800px] overflow-hidden  '
              blockCSS="bg-gradient-to-b pb-20 lg:pb-0 lg:bg-gradient-to-r from-black to-transparent z-[3] pl-6 !absolute top-0 left-0 justify-center lg:full "
              text='Empowering the Senegalese Workforce by building local talents'
              image={workforce}
              wrapperCSS={`full !h-[85vh] lg:min-h-[800px] lg:w-screen md:mx-0 lg:mr-0 lg:pr-0 lg:w-[100vw] overflow-visible lg:overflow-hidden`}
              imageCSS={`object-cover h-full md:h-full md:w-screen object-top lg:hover:object-center w-full md:origin-top lg:object-top md:pr-0 duration-4000 group-hover:scale-[100%] scale-[100%]`}
              descr=""
              hasLink
            />
          </div>

          <div className='splitText flexV w-screen center bg-gradient-to-b from-blakk to-neutral-900'>

            <div className='flexV max-w-7xl justify-between lg:flex-row px-10 py-10'>
              <TextLayout title="A leader by example"
                text='Diversity & Inclusivity'
                descr="In the modern world, diversity and inclusivity are the foundations of successful organizations, Abdoulaye SYLLA's Ecotra stands as an example of how a company can leverage the strengths of both local and foreign talent to create, innovate, and build the nation . With a workforce of 1300 people, including 800 Senegalese, representatives from 20 nations around the world, and 6% disabled individuals"
                hasTitle={true}
                hasText={false}
                hasDescr={true}
                showLines={false}
                color="black"
                css="px-0"
              />
              <TextLayout title="Fostering economic growth"
                text="Senegalese workforce"
                hasTitle={true}
                hasDescr={true}
                hasText={false}
                color="black"
                showLines={false}
                css="px-0"
                descr="Founded on the principle of supporting local communities and fostering economic development, Abdoulaye SYLLA plays a pivotal role in the growth of Senegal's engineering, architectural, technology, and infrastructure sectors. His commitment to hiring local young engineers and architects has provided jobs and also transferred knowledge, skills, and technology to the local workforce. "
              />
            </div>
          </div>

          <SplitDiv title="Empowering the disabled" color="white" link=""
            hasTitle={true} hasText={true} hasDescr={true}
            showLines={false}
            layout={1}
            mainCSS="overflow-hidden min-h-[50vh] max-w-7xl lg:max-h-[800px] my-20= rounded-lg overflow-hidden"
            blockCSS="h-full"
            css="group "
            text='Policy of Inclusivity'
            descr="As part of Abdoulaye's plan to elevate the nation, he employs 6% disabled individuals as part of his workforce. His approach serves as a model for the nation. By creating an inclusive environment, he demonstrates that disabilities are no barrier to success
            "
            imageCSS={`object-contain duration-400 !object-contain w-full transition-transform duration-1000  ${allTransitions}`}
            image={absstand} wrapperCSS="md:object-right center object-center h-full overflow-hidden  md:scale-80"
          />

          <div className='splitText flexV lg:flex-row px-6 lg:px-0 max-w-7xl py-10'>
            <TextLayout title="Beyond business"
              text='Social & Community Service'
              descr="What truly marks ABS as a leader is his unwavering commitment to social & community service. For over 2 decades ABS has actively supported community development projects and initiatives, supporting education, healthcare, and infrastructure in Senegal donating over 2 billion each year.
              #ABS2024 #FiftyFiftyleu #C50PN #XamSaBopp"
              hasTitle={true}
              hasText={false}
              hasDescr={true}
              showLines={false}
              color="white"
              css="max-w-7xl"
            />
            <TextLayout title="20 years of social service"
              text="Better future for Senegal"
              hasTitle={true}
              hasText={false}
              hasDescr={true}
              color="white"
              showLines={false}
              descr="Abdoulaye SYLLA's life is a testament of how one man can build a better future for his country. From constructing schools and hospitals to sustainable infrastructure and everything in between, his 20 years has created a lasting impact on the Senegal he serves. ABS is a leader and a model of how a man of vision can transform a society. "
            />
          </div>

          <div className="&TheCommunity h-full lg:h-fit w-screen flexV lg:flex center relative bg-blakk">

            <div className='flexV lg:flex-row center w-full lg:h-[80vh] relative max-w-7xl'>
              <AndTheCommunity />
            </div>

          </div>


        </div>
      </div>


    </div>
  )
}

export default TheLeader