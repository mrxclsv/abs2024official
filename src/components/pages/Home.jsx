import React, { useEffect, useState } from 'react'

import {
  SplitDiv, Stat, mapafrica, mapsenegal, abswhite, abshero, abssit2, TextLayout, AndTheCommunity,
  ContactForm,
  abssuit3, flagsenegal,
} from '../../utils/components';
import { Link, useLocation } from 'react-router-dom';
import { contributions, project } from '../../utils/data';
import { allTransitions } from '../../utils/style';
import ScrollTrigger from 'react-scroll-trigger'

const Home = () => {

  const location = useLocation()
  const page = location.pathname.substring(0)
  const thisPage = `${project.name} — ${location === "" ? page : project.tagline}`
  // document.title = `${project.name} — ${project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  }, [location])

  const [toggleRead, setToggleRead] = useState(false)
  const handleToggle = () => setToggleRead(!toggleRead)

  const [slide, setSlide] = useState()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSlide(slide === '0,1' ? "1,2" : '0,1');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [slide]);

  const [counterOn, setCounterOn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if(counterOn) 
      setIsLoading(false)
    }, 1000);
    }, [counterOn])

  const handleCounter = useEffect(() => {
    setTimeout(() => {
      setCounterOn(true)
    }, 3000)

    return () => { clearTimeout() }
  }, [])


  const hashtagsArray = ['abs2024', 'c50pn', 'fifty50leu']


  return (

    <div className='flexVStart w-[100dvw] overflow-x-hidden overflow-y-auto scrollbar-hide items-center justify-start relative pt-[75px]=='>


      <div id='FutureOfSenegal' className='w-screen h-[100svh] relative md:bg-gray-800 flexCenter bg-black md:bg-transpaprent'>
        <div className='w-full h-3/4 absolute -top-20 left-0 right-0 bg-gradient-to-b from-black/60 -to-transparent  z-[1]' />
        <img className='screen flex object-cover origin-bottom object-bottom scale-110 opacity-80  md:opacity-100 transition duration-700' src={abshero} alt="The Future of Senegal Is Here" />

        <div className='flexV center absolute absoluteAll sm:max-w-3/4 lg:max-w-[1024px] mx-auto gap-4 text-white z-[2]'>
          <h1 className='leading-[110%] px-6 md:px-10 text-4xl font-normal md:text-7xl md:font-light md:font-semibold== uppercase'>The future of {/* <br/>  */}Senegal is here</h1>
          <div className='flex flex-col lg:flex-row gap-0 lg:gap-4 center h4 lg:h3 font-normal'>
            <p>{project.tagline}</p>
            <p>Nga xam sa bopp, mën sa bopp</p>
          </div>
        </div>
      </div>

      <div id="Slides" className='flexV center overflow-hidden bg-gray-100 w-full'>

        <SplitDiv title="The Leader" color="black" link=""
          hasQuote={false}
          hasTitle={true} hasText={true} hasDescr
          text={project.tagline_long}
          descr="In the archives of Senegalese history, there are extraordinary visionaries whose unwavering dedication to their nation’s prosperity sparks transformation, leaving an indelible legacy. Among these luminaries is Abdoulaye SYLLA."
          hasLink={false}
          layout={1}
          showLines={true}
          wrapperCSS='overflow-x-visible scrollbar-hide'
          imageCSS='lg:mt-6'
          coordinates={`!bg-black mx-auto left-0 right-0 !bottom-0 scale-[120%] bg-black`}
          hasShadow={true}
          image={abssuit3}
          mainCSS="bg-gradient-to-b from-blakk to-neutral-900"
        />

        <SplitDiv title="The Visionary" color="white" link="/the-visionary"
          hasQuote={true}
          hasTitle={true} hasText={true} hasDescr={true}
          showLines={true}
          mainCSS='bg-gradient-to-t from-gray-200 to-white lg:max-h-[80vh]'
          css=""
          layout={1}
          text='I strive to create Senegalese national champions in this generation and the next.'
          descr="When speaking of national development and visionary leadership, Abdoulaye SYLLA has no equal. Abdoulaye SYLLA (ABS) stands as a remarkable figure, whose unwavering dedication to enhancing Senegal has reshaped the nation’s destiny.

          His leadership is marked by an extraordinary vision and an unyielding sense of purpose, setting him apart as a true catalyst for transformative change."
          wrapperCSS='h-full relative max-h-[100vh]'
          image={abswhite}
          imageCSS='lg:pt-10 object-contain lg:object-cover origin-bottom md:origin-top md:object-contain pt-4'
          hasLink
        />

        <SplitDiv title="A bold blueprint for national progress" color="white" link="/the-leader"
          text='A bold blueprint for national progress'
          hasQuote={false}
          hasLink
          hasTitle={false} hasText={true} hasDescr={true}
          showLines={false}
          mainCSS=" mx-auto max-w-7xl"
          layout={2}
          css="center gap-0 w-full "
          blockCSS=""
          descr="At the core of ABS’s leadership lies an unparalleled ability to envision a future for his nation that transcends the ordinary. His vision is not merely a hope or dream, but a comprehensive blueprint, meticulously crafted to guide his country toward prosperity, innovation, and sustainable growth. Abdoulaye SYLLA embodies the essence of a visionary leader, capable of seeing possibilities where others see obstacles.
          "
          image={flagsenegal}
          wrapperCSS="overflow-hidden"
          imageCSS="pt-20 lg:w-full max-h-[700px] object-top 3xl:object-center origin-top"
        />

        <SplitDiv title="Ci La Bokk" color="white" link="/the-visionary"
          hasQuote={false}
          hasTitle={false} hasText={true} hasDescr={true}
          showLines={false}
          layout={1}
          mainCSS="overflow-hidden max-h-[1000px] lg:h-[100dvh] lg:max-h-[800px]"
          blockCSS="h-full"
          css="group"
          text='Ci La Bokk'
          descr="What further distinguishes ABS is his unique blend of diligence and visionary thinking. He has founded numerous initiatives and companies, each meticulously designed to confront the socio-economic obstacles that have historically hindered Senegal’s progress. These initiatives serve as pathways, embodying ABS’s conviction that economic growth and social advancement are intertwined.
          "
          wrapperCSS="md:object-right center h-full object-center md:pr-0 md:scale-80 pb-20= px-4"
          imageCSS={`saturate-0 pb-10 px-6 h-full !lg:h-full transition-colors !object-contain duration-400 transition-transform duration-1000 mix-blend-multiply  group-hover:saturate-100  ${allTransitions}`}
          image={mapafrica}
        />

        <div className='TheBusinessMan relative'>
          <SplitDiv title="the business man" color="black" link="/projects"
            hasQuote={false}
            hasTitle={true} hasText={true} hasDescr={true}
            showLines={true}
            layout={1}
            mainCSS="w-[100dvw]"
            css='group bg-gradient-to-t from-gray-600 to-gray-900 relative flex items-start justify-end md:pr-0 lg:h-[85vh]   lg:min-h-[800px] overflow-hidden !lg:px-0  '
            blockCSS="lg:bg-gradient-to-r from-black to-transparent z-[3] pl-6 lg:absolute left-0 lg:full =3xl:ml-[15vw]"
            hasLink
            text='A different approach to entrepreneurship'
            image={abssit2}
            wrapperCSS={`lg:w-screen  !overflow-visible !scrollbar-hide    `}
            imageCSS={`h-full pt-3 !lg:w-screen object-top  
              md:origin-top-right md:h-full md:pr-0 hover:scale-90 group-hover:scale-[100%] group-hover:brightness-[.9] 
              lg:object-top lg:mt-2 lg:pt-8 
              translate-y-[.4rem] duration-2000`}
            descr="
            Abdoulaye SYLLA is not your typical business man. He is a visionary business leader with a potent plan to tackle Senegal’s most pressing challenges. His leadership is distinguished by his 20 years of dedication to his nation. His vision is not a mere abstraction but a clear and purposeful plan for national development. All his endeavors are infused with a purpose that transcends profit margins, seeking to address issues ranging from education and healthcare to sustainable agriculture, infrastructure, and economic empowerment.
            "
          />
        </div>

        <div className='contributions bg-gradient-to-t from-gray-200 -to-transparent flexV w-full center bg-gray-100 relative'>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}
            className='
          '>
            {/* w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 pt-14 lg:absolute top-0 lg:hidden   */}
            <div className='flex flex-col lg:flex-row w-full max-w-7xl center relative pb-4 md:pb-0'>

              <div className='image flex w-full lg:w-1/2 full min-h-[40vh] h-fit relative '>
                {contributions?.map((item, index) => (
                  <Link to="/projects" key={index} className={`cursor-pointer z-10 hover:scale-125 transition w-[20px] h-[20px] rounded-full absolute absoluteAll flex center my-auto= ${item.position} `}>
                    <p className='h5 text-white absolute z-[3]'>{index + 1}</p>
                    <div className='bg-black/90 full p-2 z-[2] rounded-full absolute animate-pulse delay-75' />
                    <div className='bg-black/60 full p-6 opacity-50 rounded-full absolute animate-pulse delay-200' />
                  </Link>
                ))}
                <img className='h-full lg:w-full object-contain mix-blend-multiply p-5' src={mapsenegal} alt="senegal" />
              </div>

              <div className='flexV lg:w-1/2 center relative start pl-0 lg:pl-0'>

                <div className='sectionTITLE relative flexV w-full mb-8'>
                  <div className='translate-x-4 lg:translate-x-10 w-16 z-[3] translate-y- lg:translate-y-8 rounded h-[3px] bg-blakk' />
                  <TextLayout title="Homme Social 2023"  /* &#127942; */
                    text="Contributions "
                    descr="Président Abdoulaye SYLLA a été nommé Homme Social de l'année aux Jambaar Awards 2023. Sa contribution exceptionnelle à l'éducation et au développement économique du Sénégal y a été saluée. Félicitations à un leader visionnaire !"
                    hasTitle
                    hasText={true}
                    hasDescr={false}
                    showLines={false}
                    color="white"
                    css="border-l-0 lg:border-t w-fit self-start lg:pt-4 pl-4"
                  />
                </div>
                <div className='flex w-full start'>
                  <div className='contributions grid grid-cols-2 w-full center gap-x-0 gap-y-10 py-6 text-black justify-around'>
                    {contributions?.map((item, index) => (
                      <Stat key={index}
                        title={item.title}
                        value={item.value}
                        hasAdded={item.hasAdded}
                        duration={item.duration}
                        added={item.added}
                        before={item.before}
                        counterOn={counterOn}
                        setCounterOn={setCounterOn}
                        isLoading={isLoading}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </ScrollTrigger>
        </div>

        <AndTheCommunity />

        <div className='JoinTheMovement w-full min-h-[100vh] flexV center bg-white relative overflow-hidden pb-10 lg:pb-0'>
          <div className="flex flex-col lg:flex-row start w-full max-w-7xl h-full relative gap-10 md:gap-0 overflow-hidden">
            <SplitDiv title="Join The Movement" color="white" link=""
              hasQuote={false}
              hasTitle={true} hasText={true} hasDescr={true}
              showLines={true}
              mainCSS="center w-fit relative !lg:ml-0"
              css="w-full lg:px-0 lg:mx-0 !h-full !start "
              blockCSS="self-center center !lg:px-0 !lg:mx-0"
              layout={1}
              text='ABS2024'
              descr="Join us in supporting the ABS2024 campaign. Let's take decisive action to build a more resilient, equitable, and prosperous nation for all its citizens. The ABS2024 campaign serves as a guiding force, offering a comprehensive roadmap to drive positive change. Together, we can propel Senegal towards a more prosperous and sustainable future."
              hashtags={hashtagsArray}
              wrapperCSS='hidden'
              imageCSS='hidden'
              image={abswhite}
              hasLink action="Become a member"
            />

            <ContactForm simplified />

            {/* <TextLayout
                  title="Title"
                  text="Text"
                  descr="Hello"
                  hasTitle={true}
                  hasText={true}
                  hasDescr={true}
                  showLines={true}
                  color='white'
                  css={` ${title !== "black" | "white" && "!border-gray-400/40"}`}
                  hashtags={true}
                  hasQuote={false}
                /> */}


          </div>

        </div>

      </div>


    </div >
  )
}

export default Home