import React, { useEffect, useState } from 'react'

import {
  SplitDiv, Stat, mapafrica, mapsenegal, abswhite, abshero, abssit2, TextLayout, AndTheCommunity,
  ContactForm,
  abssuit3,
  flagsenegal,
} from '../../utils/components';
import { Link, useLocation } from 'react-router-dom';
import { contributions, movementSlides, project } from '../../utils/data';
import { allTransitions } from '../../utils/style';
import ScrollTrigger from 'react-scroll-trigger'

const Home = () => {

  const location = useLocation()
  const page = location.pathname.substring(0)
  const thisPage = `${project.name} — ${location === "" ? page : project.tagline}`
  // document.title = `${project.name} — ${project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0, 0)
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("component is loading" + loading, loading)
    if (loading)
      setLoading(false)
    console.log("component is done loading", loading)
  }, [loading])

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
          mainCSS='bg-gradient-to-t from-gray-200 to-white'
          css=""
          layout={1}
          text='I strive to create Senegalese national champions in this generation and the next.
          '
          descr="When speaking of national development and visionary leadership, Abdoulaye SYLLA has no equal. Abdoulaye SYLLA (ABS) stands as a remarkable figure, whose unwavering dedication to enhancing Senegal has reshaped the nation’s destiny.

          His leadership is marked by an extraordinary vision and an unyielding sense of purpose, setting him apart as a true catalyst for transformative change."
          wrapperCSS='h-full lg:min-h-[900px] md:min-h-[600px] w-screen px-0 w-full md:max-w-4xl h-fit md:w-full !overflow-hidden'
          image={abswhite}
          imageCSS='object-top=== w-full h-full object-contain lg:object-cover origin-bottom md:origin-top md:object-contain scale-[105%= pt-4 md:translate-y-20'
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
          // w-full md:self-start= lg:h-full lg:items-center
          descr="At the core of ABS’s leadership lies an unparalleled ability to envision a future for his nation that transcends the ordinary. His vision is not merely a hope or dream, but a comprehensive blueprint, meticulously crafted to guide his country toward prosperity, innovation, and sustainable growth. Abdoulaye SYLLA embodies the essence of a visionary leader, capable of seeing possibilities where others see obstacles.
          "
          wrapperCSS="overflow-hidden"
          image={flagsenegal}
          imageCSS="pt-6"
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
          imageCSS={`saturate-0 transition-colors !object-contain duration-400 transition-transform duration-1000 mix-blend-multiply h-full group-hover:saturate-100  ${allTransitions}`}
          image={mapafrica} wrapperCSS="md:object-right center !object-contain object-center h-fit md:pr-0 md:scale-80 pb-20 px-4"
        />

        <div className='TheBusinessMan relative'>
          <SplitDiv title="the business man" color="black" link="/projects"
            hasQuote={false}
            hasTitle={true} hasText={true} hasDescr={true}
            showLines={true}
            layout={1}
            mainCSS="w-[100dvw]"
            css='group bg-gradient-to-t from-gray-600 to-gray-900 =====lg:from-gray-800 ====lg:to-gray-400 relative w-screen= flex justify-end items-start md:pr-0 lg:h-[85vh] lg:min-h-[800px] overflow-hidden   '
            blockCSS="lg:bg-gradient-to-r from-black to-transparent z-[3] pl-6 lg:absolute left-0  lg:justify-center lg:full =3xl:ml-[15vw] "
            hasLink
            text='A different approach to entrepreneurship'
            image={abssit2}
            imageCSS={`object-contain h-full pt-3 md:h-full md:w-screen object-top w-full md:origin-top-right hover:scale-90 group-hover:scale-[100%] md:pl-10= group-hover:pl-0== group-hover:brightness-[.9] lg:object-top lg:mt-2 md:pr-0 lg:px-10= translate-y-[.4rem] bg-gradient-to-t= from-black/80= to-transparent duration-2000`}
            wrapperCSS={`full !h-[85vh]= lg:min-h-[800px] lg:w-screen md:mx-0 lg:mr-0 md:pr-4= lg:pr-0 md:opacity-80=== lg:opacity-20=== lg:w-[100vw] overflow-visible lg:overflow-hidden  `}
            descr="
            Abdoulaye SYLLA is not your typical business man. He is a visionary business leader with a potent plan to tackle Senegal’s most pressing challenges. His leadership is distinguished by his 20 years of dedication to his nation. His vision is not a mere abstraction but a clear and purposeful plan for national development. All his endeavors are infused with a purpose that transcends profit margins, seeking to address issues ranging from education and healthcare to sustainable agriculture, infrastructure, and economic empowerment.
            "
          />
        </div>

        <div className='contributions bg-gradient-to-t from-gray-200 -to-transparent flexV w-full center bg-gray-100 relative'>
          <div className='flexV flex-col-reverse lg:flex-row w-full center relative pb-4 md:pb-0'>

            <div className='image flex full min-h-[40vh] h-fit relative w-full'>
              {contributions?.map((item, index) => (
                <Link to="/projects" key={index} className={`cursor-pointer z-10 hover:scale-125 transition w-[20px] h-[20px] rounded-full absolute absoluteAll flex center my-auto= ${item.position} `}>
                  <p className='h5 text-white absolute z-[3]'>{index + 1}</p>
                  <div className='bg-black/90 full p-2 z-[2] rounded-full absolute animate-pulse delay-75' />
                  <div className='bg-black/60 full p-6 opacity-50 rounded-full absolute animate-pulse delay-200' />
                </Link>
              ))}
              <img className='h-full lg:w-full object-contain mix-blend-multiply p-5' src={mapsenegal} alt="senegal" />
            </div>

            <div className='contributionsMOB text-black group center md:start center w-full gap-8 paddingMRX relative'>

              <div className='relative flexV w-full '>
                <div className='translate-x-4 lg:translate-x-10 w-16 z-[3] translate-y-[65%] rounded h-[3px] bg-blakk' />
                <TextLayout title="Homme Social 2023"  /* &#127942; */
                  text="Contributions "
                  descr="Président Abdoulaye SYLLA a été nommé Homme Social de l'année aux Jambaar Awards 2023. Sa contribution exceptionnelle à l'éducation et au développement économique du Sénégal y a été saluée. Félicitations à un leader visionnaire !"
                  hasTitle
                  hasText={true}
                  hasDescr={true}
                  showLines={false}
                  color="white"
                  css="border-l-0 border-t w-fit self-start lg:pt-0 pl-4"
                />
              </div>

              <Link to='/the-philanthropist' onMouseEnter={handleToggle}
                className={`border-[1px] rounded-lg ml-6 lg:ml-10 w-fit border-blakk text-blakk lg:hover:bg-neutral-800 lg:hover:text-white lg:hover:text-white= text-sm group-hover:opacity-100 transition-opacity duration-700 z-[5] self-start flex center
                `}>
                <p className='px-4 py-2 font-[500]'>Read more</p>
                <i className='ri-arrow-right-line py-2 px-3 h-full border-l-[1px] border-blakk/30 text-xl' />
              </Link>


              <ScrollTrigger onEnter={() => setCounterOn(true)} className='w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 pt-14 lg:absolute top-0 lg:hidden  '>
                {contributions?.map((item, index) => (
                  <Stat key={index}
                    title={item.title}
                    value={item.value}
                    hasAdded={item.hasAdded}
                    added={item.added}
                    duration={item.duration}
                    counterOn={counterOn}
                    setCounterOn={setCounterOn}
                    loading={loading}
                  />
                ))}
              </ScrollTrigger>

            </div>

          </div>
          <ScrollTrigger onEnter={() => setCounterOn(true)}
            className='contributionsLAPTOP hidden lg:flex border-t border-black/10 center w-screen gap-8 py-6 bg-gray-200 text-black justify-around px-20'>
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
              />
            ))}
          </ScrollTrigger>
        </div>

        <AndTheCommunity />

        <div className='JoinTheMovement w-full min-h-[100vh] flexV center bg-white relative overflow-hidden pb-10 lg:pb-0'>
          <div className="flex flex-col lg:flex-row center w-full max-w-7xl h-full relative gap-10 md:gap-0 overflow-hidden">
            <SplitDiv title="Join The Movement" color="white" link=""
              hasQuote={false}
              hasTitle={true} hasText={true} hasDescr={true}
              showLines={true}
              mainCSS="center w-fit relative"
              css="w-full lg:px-0 lg:mx-0 !h-full !start"
              blockCSS="self-center center !lg:px-0 !lg:mx-0 "
              layout={1}
              text='ABS2024'
              descr="Join us in supporting the ABS2024 campaign. Let's take decisive action to build a more resilient, equitable, and prosperous nation for all its citizens. The ABS2024 campaign serves as a guiding force, offering a comprehensive roadmap to drive positive change. Together, we can propel Senegal towards a more prosperous and sustainable future."
              hashtags={hashtagsArray}
              wrapperCSS='hidden '
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


    </div>
  )
}

export default Home