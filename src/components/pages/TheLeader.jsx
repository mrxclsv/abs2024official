import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { SplitDiv, TextLayout, abswhite, Socials, workforce, absstand, } from '../../utils/components'
import { project } from '../../utils/data'
import { allTransitions } from '../../utils/style'

const TheLeader = () => {

  const location = useLocation()
  const page = location.pathname.substring(1).replaceAll('-', " ").toUpperCase()
  const thisPage = `${project.name} — ${location !== "/" ? page : project.tagline}`
  document.title = thisPage

  // useEffect(() => {
  //   window.scroll(0,0)
  // },[location])

  return (
    <div className='min-h-screen w-screen flexV bg-white text-black'>

      <div className='hero w-full h-[110vh] min-h-[400px] flex center relative bg-gray-100 z-[0]'>
        <div className='full flex center overflow-hidden relative bg-white text-white'>
          <img className='full object-cover object-top pointer-events-none  opacity-100 fixed hover:scale-110' src="/abs/abs_blue_3.PNG" alt="xam sa bopp" />
        </div>
        <div className='absolute absoluteAll flex center -translate-y-20  '>
        <h1 className='h1 leading-[100%] font-normal text-left text-[100px] uppercase text-black drop-shadow-lg line md:absolute md:left-20 md:my-auto'>Xam sa bopp</h1>
        </div>

      </div>

      <div id="Slides" className='flexV center overflow-hidden bg-gray-100 w-full'>

        <div className='TheWorkforce relative'>
          <SplitDiv title="Yoon Wi" color="black" link="/" 
            hasTitle={true} hasText={true}  hasDescr={true}
            showLines={true}
            layout={1} 
            mainCSS="w-screen"
            css='group bg-blakk relative w-screen= flex justify-end items-start md:pr-0 lg:h-[85vh] lg:min-h-[800px] overflow-hidden   '
            blockCSS="lg:bg-gradient-to-r from-black to-transparent z-[3] pl-6 lg:absolute left-0  lg:justify-center lg:full "
            hasLink
            text='Empowering the Senegalese Workforce by building local talents' 
            image={workforce} 
            imageCSS={`object-contain h-full md:h-full md:w-screen object-top lg:hover:object-center w-full md:origin-top lg:object-top md:pr-0 duration-4000 group-hover:scale-[100%] scale-[100%] `}
            wrapperCSS={`full !h-[85vh] lg:min-h-[800px] lg:w-screen md:mx-0 lg:mr-0 lg:pr-0 lg:w-[100vw] overflow-visible lg:overflow-hidden `} 
            descr="
            
            "
          />
        </div>

        <div className='splitText flexV lg:flex-row px-10 max-w-7xl py-10'>
          <TextLayout title="A leader by example"
            text='Diversity & Inclusivity'
            descr="In the modern world, diversity and inclusivity are the foundations of successful organizations, Abdoulaye Sylla's Ecotra stands as an example of how a company can leverage the strengths of both local and foreign talent to create, innovate, and build the nation . With a workforce of 1300 people, including 800 Senegalese, representatives from 20 nations around the world, and 6% disabled individuals"
            hasTitle={true}
            hasText={true}
            hasDescr={true}
            showLines={true}
            color="white"
            css="max-w-7xl"
            />
          <TextLayout title="Fostering economic growth"
          text="Senegalese workforce"
          hasTitle={true}
          hasDescr={true}
          hasText={true}
          color="white"
          showLines={false}
          descr="Founded on the principle of supporting local communities and fostering economic development, Abdoulaye Sylla plays a pivotal role in the growth of Senegal's engineering, architectural, technology, and infrastructure sectors. His commitment to hiring local young engineers and architects has provided jobs and also transferred knowledge, skills, and technology to the local workforce. "
          />
        </div>

        <SplitDiv title="Empowering the disabled" color="white" link="" 
          hasTitle={true} hasText={true}  hasDescr={true}
          showLines={true}
          layout={1} 
          mainCSS="overflow-hidden min-h-[50vh] lg:max-h-[800px]"
          blockCSS="h-full"
          css="group "
          text='policy of inclusivity' 
          descr="As part of Abdoulaye's plan to elevate the nation, he employs 6% disabled individuals as part of his workforce. His approach serves as a model for the nation. By creating an inclusive environment, he demonstrates that disabilities are no barrier to success
          "
          imageCSS={`object-contain duration-400 !object-contain transition-transform duration-1000  ${allTransitions}`}
          image={absstand} wrapperCSS="md:object-right  center object-center h-full overflow-hidden  md:scale-80 mb-20"
        />

        <div className='splitText flexV lg:flex-row px-10 max-w-7xl py-10'>
          <TextLayout title="Beyond business"
            text='Social & Community Service'
            descr="What truly marks ABS as a leader is his unwavering commitment to social & community service. For over 2 decades ABS has actively supported community development projects and initiatives, supporting education, healthcare, and infrastructure in Senegal donating over 2 billion each year.
            #ABS2024 #FiftyFiftyleu #C50PN #XamSaBopp"
            hasTitle={true}
            hasText={true}
            hasDescr={true}
            showLines={true}
            color="white"
            css="max-w-7xl"
            />
          <TextLayout title="20 years of social service"
            text="Better future for Senegal"
            hasTitle={true}
            hasDescr={true}
            hasText={true}
            color="white"
            showLines={false}
            descr="Abdoulaye Sylla's life is a testament of how one man can build a better future for his country. From constructing schools and hospitals to sustainable infrastructure and everything in between, his 20 years has created a lasting impact on the Senegal he serves. ABS is a leader and a model of how a man of vision can transform a society. "
          />
        </div>        

        {/*<SplitDiv title="The Visionary" color="white" link=""
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
        /> */}




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

export default TheLeader