import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SplitDiv, Stat, mapafrica, mapsenegal, abssuit1, abswhite, abshero, abssit2, flagsenegal } from '../utils/components'
import { contributions, project } from '../utils/data'
import { allTransitions } from '../utils/style'

const Home = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replace('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location ==! "/" ? page : project.tagline}`
  document.title = thisPage

  useEffect(() => {
    window.scroll(0,0)
  },[location])
  

  return (

    <div className='flexVStart w-screen overflow-x-hidden overflow-y-auto scrollbar-hide items-center justify-start relative pt-[75px]'>

      <div id='FutureOfSenegal' className='screen relative bg-gray-100 flexCenter'>
        <img className='screen flex object-cover object-bottom opacity-100' src={abshero} alt="The Future of Senegal Is Here" />
        <div className='flexV center absolute absoluteAll m-auto gap-4 '>
          <h1 className='h1 font-light uppercase'>The future of <br/> Senegal is here</h1>
          <h3 className='flexV center h3'>
            <span>{project.tagline}</span>
            <span>Nga xam sa bopp, mën sa bopp</span>
            </h3>
        </div>
      
      </div>

      <div id="Slides" className='flexV center overflow-hidden'>

        <SplitDiv title="The Leader" color="black" link=""
          hasTitle={true} hasText={true}  hasDescr
          hasLink
          layout={1} 
          showLines={true}
          text={project.tagline_long}
          descr="In the archives of Senegalese history, there are extraordinary visionaries whose unwavering dedication to their nation’s prosperity sparks transformation, leaving an indelible legacy. Among these luminaries is Abdoulaye Sylla."
          image={abssuit1}
        />

        <SplitDiv title="The Visionary" color="white" link=""
          hasTitle={true} hasText={true}  hasDescr={true}
          showLines={true}
          css="w-screen h-full bg-gradient-to-t from-gray-200 to-white"
          layout={1} 
          text='Abdoulaye SYLLA "ABS"' 
          descr="When speaking of national development and visionary leadership, Abdoulaye Sylla has no equal. Abdoulaye Sylla (ABS) stands as a remarkable figure, whose unwavering dedication to enhancing Senegal has reshaped the nation’s destiny.

          His leadership is marked by an extraordinary vision and an unyielding sense of purpose, setting him apart as a true catalyst for transformative change."
          wrapperCSS='h-full lg:min-h-[900px] md:min-h-[600px] w-screen px-0  w-full md:max-w-4xl h-fit md:w-full !overflow-hidden ' 
          image={abswhite} 
          imageCSS='object-top=== w-full h-full object-contain lg:object-cover origin-bottom md:origin-top  md:object-contain scale-[105%= pt-4 md:translate-y-20'
          hasLink
        />

        <SplitDiv title="Yoon Wi" color="white" link="" 
          hasLink
          hasTitle={true} hasText={true}  hasDescr={true}
          showLines={true}
          layout={2} 
          css="!flex-col=  gap-0 md:w-screen  "
          blockCSS="md:w-screen md:self-start"
          text='A bold blueprint for national progress' 
          descr="
          At the core of ABS’s leadership lies an unparalleled ability to envision a future for his nation that transcends the ordinary. His vision is not merely a hope or dream, but a comprehensive blueprint, meticulously crafted to guide his country toward prosperity, innovation, and sustainable growth. Abdoulaye Sylla embodies the essence of a visionary leader, capable of seeing possibilities where others see obstacles.
          "
          wrapperCSS = "w-full max-h-[800px] overflow-hidden aspect-square lg:rounded-full lg:rounded-l-none mt-14 "
          image={flagsenegal} 
          imageCSS="object-cover  origin-top w-full h-full object-top group-hover:scale-none scale-none pt-6"
        />

        <SplitDiv title="Ci La Bokk" color="white" link="" 
          hasTitle={false} hasText={true}  hasDescr={true}
          showLines={true}
          layout={1} 
          css="group"
          text='Ci La Bokk' 
          descr="What further distinguishes ABS is his unique blend of diligence and visionary thinking. He has founded numerous initiatives and companies, each meticulously designed to confront the socio-economic obstacles that have historically hindered Senegal’s progress. These initiatives serve as pathways, embodying ABS’s conviction that economic growth and social advancement are intertwined.
          "
          imageCSS={`!h-full !w-autp saturate-0 transition-colors duration-400 p-4 !object-contain transition-transform duration-1000 mix-blend-multiply  group-hover:saturate-100  ${allTransitions}`}
          image={mapafrica} wrapperCSS="md:object-right center object-center h-full !max-h-[500px] overflow-visible pr-3 md:pr-0 md:scale-80 mb-10"
        />

        <SplitDiv title="The business man" color="black" link="/" 
          hasTitle={true} hasText={true}  hasDescr={true}
          showLines={true}
          layout={1} 
          mainCSS="w-screen"
          css='group bg-gradient-to-t from-gray-800 to-gray-400 relative w-screen= flex justify-end items-start md:pr-0'
          blockCSS="lg:bg-gradient-to-r from-black to-black/20=== pl-4 lg:absolute left-0  lg:justify-center lg:full "
          hasLink
          text='A different approach to entrepreneurship' 
          descr="
          Abdoulaye SYLLA is not your typical business man. He is a visionary business leader with a potent plan to tackle Senegal’s most pressing challenges. His leadership is distinguished by his 20 years of dedication to his nation. His vision is not a mere abstraction but a clear and purposeful plan for national development. All his endeavors are infused with a purpose that transcends profit margins, seeking to address issues ranging from education and healthcare to sustainable agriculture, infrastructure, and economic empowerment.
          "
          image={abssit2} 
          wrapperCSS={`full h-[75vh] lg:w-screen md:mx-0 lg:mr-0 md:pr-4= lg:pr-0 md:opacity-80=== lg:opacity-20=== lg:w-[100vw] overflow-hidden  `} 
          imageCSS={`object-contain h-full md:pt-8 md:h-full md:w-screen object-right w-full md:origin-top-right group-hover:scale-[100%] md:pl-10= group-hover:pl-0 lg:object-top lg:mt-2 md:pr-0 lg:px-10
                    bg-gradient-to-t= from-black/80= to-transparent= 
                    `}
        />

        <div className='contributions flexV md:flex-row h-[85vh]== pb-10 md:pb-0 w-full center bg-gray-100 relative '>

          <div className='image flex full imageWrapper min-h-[50vh] md:h-[60h]  =md:p-14 relative w-full'>
            <div className='cursor-pointer z-10 hover:scale-125 transition w-[20px] h-[20px] rounded-full animate-pulse absolute absoluteAll flex center left-[30%] top-[20%] my-auto '>
                <div className='bg-purple-800/80 full p-2 z-[2] rounded-full absolute' />
                <div className='bg-purple-800/50 full p-6 opacity-50 rounded-full absolute' />
            </div>
            <img className='h-full lg:w-full object-contain mix-blend-multiply p-5' src={mapsenegal} alt="senegal" />
          </div>

          <div className='text-black center md:start grid md:grid-cols-2 lg:grid-cols-2  center w-full bg-gray-100 gap-10 paddingMRX relative'>

            <h3 className='md:absolute left-0 -top-10 md:pl-10 py-1'>Contributions</h3>

            {contributions?.map((item, index) => (
              <Stat key={index} 
              title={item.title} 
              value={item.value}
              hasAdded={item.hasAdded}
              added={item.added}
              />
            ))}
          </div>
        </div> 

      </div>


      
    </div>
  )
}

export default Home