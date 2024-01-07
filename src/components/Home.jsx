import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SplitDiv, Stat, mapafrica, mapsenegal, abssuit1, abswhite, abshero, abssit2, flagsenegal, TextLayout, Socials } from '../utils/components'
import { contributions, project, social } from '../utils/data'
import { allTransitions } from '../utils/style'

const Home = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replace('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location === "/" ? project.tagline : page}`
  document.title = thisPage

  // useEffect(() => {
  //   window.scroll(0,0)
  // },[location])

  const [toggleRead, setToggleRead] = useState(false)
  const handleToggle = () => setToggleRead(!toggleRead)

  return (

    <div className='flexVStart w-screen overflow-x-hidden overflow-y-auto scrollbar-hide items-center justify-start relative pt-[75px]=='>

      <div id='FutureOfSenegal' className='screen relative bg-gray-800 flexCenter'>
        <div className='w-full h-3/4 absolute -top-20 left-0 right-0 bg-gradient-to-b from-black/60 -to-transparent z-[1]' />
          <img className='screen flex object-cover origin-bottom object-bottom scale-110 opacity-100' src={abshero} alt="The Future of Senegal Is Here" />

          <div className='flexV center absolute absoluteAll sm:max-w-3/4 lg:max-w-[1024px] mx-auto gap-4 text-white z-[2]'>
            <h1 className='leading-[110%] px-6 md:px-10 text-5xl md:text-7xl font-light md:font-semibold== uppercase'>The future of {/* <br/>  */}Senegal is here</h1>
            <h3 className='flexV center h3'>
              <span>{project.tagline}</span>
              <span>Nga xam sa bopp, mën sa bopp</span>
              </h3>
          </div>
      </div>

      <div id="Slides" className='flexV center overflow-hidden bg-gray-100 w-full'>

        <SplitDiv title="The Leader" color="black" link=""
          hasTitle={true} hasText={true}  hasDescr
          hasLink
          layout={1} 
          showLines={true}
          text={project.tagline_long}
          image={abssuit1}
          descr="In the archives of Senegalese history, there are extraordinary visionaries whose unwavering dedication to their nation’s prosperity sparks transformation, leaving an indelible legacy. Among these luminaries is Abdoulaye Sylla."
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
          mainCSS="lg:min-w-screen lg:items-between"
          layout={2} 
          css="!flex-col= center gap-0 w-full=  "
          blockCSS="md:w-screen= w-full md:self-start= lg:h-full lg:items-center"
          text='A bold blueprint for national progress' 
          descr="
          At the core of ABS’s leadership lies an unparalleled ability to envision a future for his nation that transcends the ordinary. His vision is not merely a hope or dream, but a comprehensive blueprint, meticulously crafted to guide his country toward prosperity, innovation, and sustainable growth. Abdoulaye Sylla embodies the essence of a visionary leader, capable of seeing possibilities where others see obstacles.
          "
          wrapperCSS="lg:w-1/2 max-h-[800px] overflow-hidden aspect-square lg:rounded-full lg:rounded-l-none== mt-14 "
          image={flagsenegal} 
          imageCSS="object-cover origin-top w-full h-full object-top group-hover:scale-none scale-none pt-6"
        />

        <SplitDiv title="Ci La Bokk" color="white" link="" 
          hasTitle={false} hasText={true}  hasDescr={true}
          showLines={true}
          layout={1} 
          mainCSS="overflow-hidden min-h-[50vh] lg:max-h-[800px]"
          blockCSS="h-full"
          css="group "
          text='Ci La Bokk' 
          descr="What further distinguishes ABS is his unique blend of diligence and visionary thinking. He has founded numerous initiatives and companies, each meticulously designed to confront the socio-economic obstacles that have historically hindered Senegal’s progress. These initiatives serve as pathways, embodying ABS’s conviction that economic growth and social advancement are intertwined.
          "
          imageCSS={`!h-full== !w-auto== saturate-0 transition-colors object-contain duration-400 px-6 !object-contain transition-transform duration-1000 mix-blend-multiply =h-fit group-hover:saturate-100  ${allTransitions}`}
          image={mapafrica} wrapperCSS="md:object-right  center object-center h-full !max-h-[500px]== overflow-visible pr-3 md:pr-0 md:scale-80 mb-20"
        />

        <div className='TheBusinessMan relative'>
          <SplitDiv title="the business man" color="black" link="/" 
            hasTitle={true} hasText={true}  hasDescr={true}
            showLines={true}
            layout={1} 
            mainCSS="w-screen"
            css='group bg-gradient-to-t from-gray-600 to-gray-900 =====lg:from-gray-800 ====lg:to-gray-400 relative w-screen= flex justify-end items-start md:pr-0 lg:h-[85vh] lg:min-h-[800px] overflow-hidden   '
            blockCSS="lg:bg-gradient-to-r from-black to-transparent z-[3] pl-6 lg:absolute left-0  lg:justify-center lg:full 2xl:ml-[15vw] "
            hasLink
            text='A different approach to entrepreneurship' 
            image={abssit2} 
            imageCSS={`object-contain h-full pt-3 md:h-full md:w-screen object-top w-full md:origin-top-right hover:scale-90 group-hover:scale-[100%] md:pl-10= group-hover:pl-0== group-hover:brightness-[.9] lg:object-top lg:mt-2 md:pr-0 lg:px-10= translate-y-[.4rem] bg-gradient-to-t= from-black/80= to-transparent duration-2000`}
            wrapperCSS={`full !h-[85vh] lg:min-h-[800px] lg:w-screen md:mx-0 lg:mr-0 md:pr-4= lg:pr-0 md:opacity-80=== lg:opacity-20=== lg:w-[100vw] overflow-visible lg:overflow-hidden  `} 
            descr="
            Abdoulaye SYLLA is not your typical business man. He is a visionary business leader with a potent plan to tackle Senegal’s most pressing challenges. His leadership is distinguished by his 20 years of dedication to his nation. His vision is not a mere abstraction but a clear and purposeful plan for national development. All his endeavors are infused with a purpose that transcends profit margins, seeking to address issues ranging from education and healthcare to sustainable agriculture, infrastructure, and economic empowerment.
            "
          />
        </div>

        <div className='contributions bg-gradient-to-t from-gray-200 -to-transparent flexV w-full center bg-gray-100 relative'>
          <div className='flexV lg:flex-row w-full center relative pb-4 md:pb-0'>

            <div className='image flex full min-h-[40vh] h-fit relative w-full'>
              {contributions?.map((item, index) => (
                <div key={index} className={`cursor-pointer z-10 hover:scale-125 transition w-[20px] h-[20px] rounded-full absolute absoluteAll flex center my-auto= ${item.position} `}>
                    <p className='h5 text-white absolute z-[3]'>{index+1}</p>
                    <div className='bg-black/90 full p-2 z-[2] rounded-full absolute animate-pulse delay-75' />
                    <div className='bg-black/60 full p-6 opacity-50 rounded-full absolute animate-pulse delay-200' />
                </div>
              ))}
              <img className='h-full lg:w-full object-contain mix-blend-multiply p-5' src={mapsenegal} alt="senegal" />
            </div>

            <div className='contributionsMOB text-black group center md:start center w-full gap-10 paddingMRX relative'>
              
              <div className='relative flexV w-full '>
                <div className='translate-x-4 lg:translate-x-10 w-16 z-[3] translate-y-[65%] rounded h-[3px] bg-blakk' />
                <TextLayout title="Homme Social 2023"  /* &#127942; */
                  text="Contributions "
                  descr="Président Abdoulaye Sylla a été nommé Homme Social de l'année aux Jambaar Awards 2023. Sa contribution exceptionnelle à l'éducation et au développement économique du Sénégal est saluée. Félicitations à un leader visionnaire !"
                  hasTitle
                  hasText={true}
                  hasDescr={true}
                  showLines={false}
                  color="white"
                  css="border-l-0 border-t w-fit self-start lg:pt-4 pl-4"
                />
              </div>

              <Link to='/the-philanthropist' onMouseEnter={handleToggle} 
                className={`border hidden lg:flex rounded w-fit ml-6 lg:ml-10 py-2 bg-blakk text-white px-4 lg:hover:bg-gray-800 lg:hover:text-white text-sm opacity-0  group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap absolute -bottom-0 left-10  `}><p className='whitespace-nowrap w-fit'>Read more</p> 
              </Link>
              
              <div className='w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 pt-8 lg:absolute top-0 lg:hidden  '>
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
        
        <div className='contributionsLAPTOP hidden lg:flex border-t border-white/70 center w-screen gap-8 py-6 bg-gray-200  text-black justify-around px-20'>
          {contributions?.map((item, index) => (
            <Stat key={index} 
            title={item.title} 
            value={item.value}
            hasAdded={item.hasAdded}
            added={item.added}
            />
          ))}
        </div>

        <div className="&TheCommunity h-full lg:h-fit w-screen flexV lg:flex center relative bg-blakk">

          <div className='flexV lg:flex-row center w-full lg:h-[80vh] relative max-w-7xl'>

            <SplitDiv title="The philanthropist" color="black" link="/the-philanthropist"
              hasTitle={true} hasText={true}  hasDescr={true}
              showLines={true}
              mainCSS="lg:w-full"
              css="w-full pr-0"
              blockCSS="!h-fit w-full min-w-full lg:pr-0"
              layout={1} 
              text='& the community' 
              descr="Abdoulaye’s vision extends far beyond the economic realm; it encompasses a holistic approach to societal well-being. His commitment to social equity, environmental sustainability, and overall quality of life for his fellow Senegalese showcases the depth of his vision. ABS is not just a leader driven by numbers and statistics; he is a champion of comprehensive progress."
              wrapperCSS='h-fit w-1/2== hidden=' 
              imageCSS='hidden'
              image={abswhite}
              hasLink
            />
            <Socials css="" />

          </div>
          
        </div>


      </div>




      
    </div>
  )
}

export default Home